import styled from "styled-components";
import { TabButtonProps, SkillCircleProps } from "../interface/About";
// Styled Components
export const PageContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    background-color: var(--bg-color);
    color: (--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const ProfileSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const ProfileImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #333;
`;

export const InfoSection = styled.div`
    flex: 1.5;
`;

export const Name = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
`;

export const FirstName = styled.span`
    color: var(--main-color);
`;

export const LastName = styled.span`
    color: var(--secondary-color);
`;

export const Title = styled.h2`
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #aaa;
`;

export const TitleHighlight = styled.span`
    color: #fff;
    font-weight: 600;
`;

export const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: #333;
    margin: 1.5rem 0;
    width: 100%;
`;

export const AboutText = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #aaa;
    margin-bottom: 2rem;
`;

export const ActionButton = styled.button`
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #c0392b;
    }
`;

// Modal Styled Components
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background-color: #111;
    border-radius: 10px;
    width: 90%;
    max-width: 1000px;
    display: flex;
    overflow: hidden;
    max-height: 90vh;

    @media (max-width: 768px) {
        flex-direction: column;
        overflow-y: auto;
    }
`;

export const ModalSidebar = styled.div`
    flex: 0 0 300px;
    background-color: #1a1a1a;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    &  * 
    {
        background-color: #1a1a1a;

    }
`;

export const ModalName = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 1rem 0 0.5rem;
    text-align: center;
`;

export const ModalTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
    color: #aaa;
    margin-bottom: 1.5rem;
    text-align: center;
`;

export const ContactInfo = styled.div`
    width: 100%;
    margin-top: 1.5rem;
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #aaa;
`;

export const ContactIcon = styled.span`
    margin-right: 0.8rem;
    color: #e74c3c;
    font-size: 1.2rem;
    width: 20px;
    text-align: center;
`;

export const DownloadButton = styled.button`
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: 2rem;

    &:hover {
        background-color: #c0392b;
    }
`;

export const ModalContent = styled.div`
    flex: 1;
    padding: 2rem;
    position: relative;
    overflow-y: auto;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: 1px solid #333;
    color: #fff;
    font-size: 1rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e74c3c;
        border-color: #e74c3c;
    }
`;

export const TabNav = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;

export const TabButton = styled.button<TabButtonProps>`
    background: none;
    border: none;
    color: ${(props) => (props.active ? "#e74c3c" : "#aaa")};
    font-size: 1.2rem;
    font-weight: ${(props) => (props.active ? "600" : "400")};
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 2px solid
        ${(props) => (props.active ? "#e74c3c" : "transparent")};

    &:hover {
        color: ${(props) => (props.active ? "#e74c3c" : "#fff")};
    }
`;

export const TabContent = styled.div`
    color: #aaa;
`;

export const SectionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #fff;
`;

export const HighlightText = styled.span`
    color: #e74c3c;
`;

export const AboutContent = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    margin: 1rem 0 2rem;
`;

export const ServicesList = styled.div`
    margin: 1rem 0 2rem;
`;

export const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
`;

export const ServiceIcon = styled.span`
    color: #e74c3c;
    margin-right: 0.8rem;
`;

// Timeline Styled Components
export const TimelineContainer = styled.div`
    position: relative;
    margin: 2rem 0;
    padding-left: 2rem;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 2px;
        background-color: #333;
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    margin-bottom: 2rem;
`;

export const TimelineDot = styled.div`
    position: absolute;
    left: -2.25rem;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #e74c3c;
`;

export const TimelineDate = styled.div`
    display: inline-block;
    padding: 0.4rem 1rem;
    background-color: #222;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
`;

export const TimelineContent = styled.div`
    padding-left: 1rem;
`;

export const TimelineTitle = styled.h4`
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 0.3rem;
`;

export const TimelineSubtitle = styled.p`
    font-size: 0.9rem;
    color: #aaa;
`;

// Skills Styled Components
export const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SkillCircle = styled.div<SkillCircleProps>`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: conic-gradient(
        #e74c3c 0% ${(props) => props.percentage}%,
        #333 ${(props) => props.percentage}% 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #222;
    }
`;

export const SkillPercentage = styled.span`
    position: relative;
    z-index: 1;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const SkillName = styled.span`
    margin-top: 1rem;
    font-size: 1rem;
`;

export const SkillCategory = styled.div`
    margin-bottom: 2.5rem;
`;

export const CategoryTitle = styled.h4`
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 1.5rem;
`;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SkillBarContainer = styled.div`
    margin-bottom: 0.5rem;
`;

export const SkillBarLabel = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`;

export const SkillBarWrapper = styled.div`
    width: 100%;
    height: 8px;
    background-color: #333;
    border-radius: 4px;
    overflow: hidden;
`;

export const SkillBarFill = styled.div<{ percentage: number }>`
    height: 100%;
    width: ${(props) => props.percentage}%;
    background-color: #e74c3c;
    border-radius: 4px;
`;

export const SkillBarPercentage = styled.span`
    font-size: 0.9rem;
    color: #aaa;
`;


