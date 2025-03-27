import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const StyledCard = styled.div`
    background-color: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 12px;
    padding: 20px;
    color: var(--main-color);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(
            circle at center,
            var(--main-color) 0%,
            transparent 70%
        );
        /* animation: glow 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; */
        opacity: 0.7;
    }

    &:hover {
        transform: scale(1.005);
        box-shadow: 0 0 15px var(--main-color);
    }

    /* @keyframes glow {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(360deg);
        }
    } */

    // Selection styling based on variables
    ::selection {
        background-color: var(--selection-bg-color);
        color: var(--selection-color);
    }
`;

const Card: React.FC<CardProps> = ({ children, className }) => {
    return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
