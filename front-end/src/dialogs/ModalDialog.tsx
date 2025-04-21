import React, { useState, useEffect, ReactNode } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Props interface for the Modal component
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    size?: "small" | "medium" | "large" | "full";
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow-y: auto;
    padding: 20px;
    
`;

const ModalContainer = styled.div<{ size: string }>`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    padding: 0;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    width: ${(props) => {
        switch (props.size) {
            case "small":
                return "400px";
            case "medium":
                return "600px";
            case "large":
                return "800px";
            case "full":
                return "95%";
            default:
                return "600px";
        }
    }};
    max-width: 95%;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #e0e0e0;
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
`;

const ModalTitle = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
`;

const CloseButton = styled(NavLink)`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: background-color 0.2s;
    text-decoration: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: #333;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
`;

const ModalContent = styled.div`
    padding: 20px;
`;

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title = "",
    size = "medium",
}) => {
    const [isClosing, setIsClosing] = useState(false);

    // Handle escape key press to close modal
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                handleClose();
            }
        };

        document.addEventListener("keydown", handleEscapeKey);

        // Prevent scrolling on the body when modal is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // If modal is not open, don't render
    if (!isOpen) {
        return null;
    }

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 200);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <ModalOverlay
            onClick={handleOverlayClick}
            style={{
                animation: isClosing ? "fadeOut 0.2s" : "fadeIn 0.3s",
            }}
        >
            <ModalContainer
                size={size}
                style={{
                    animation: isClosing ? "slideOut 0.2s" : "slideIn 0.3s",
                }}
            >
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <CloseButton
                        to=".."
                        onClick={handleClose}
                        aria-label="Close"
                    >
                        &times;
                    </CloseButton>
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
            </ModalContainer>
        </ModalOverlay>
    );
};

// Create a global style for animations
const GlobalStyle = document.createElement("style");
GlobalStyle.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  
  @keyframes slideIn {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-30px); opacity: 0; }
  }
`;
document.head.appendChild(GlobalStyle);

export default Modal;
