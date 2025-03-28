import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Skills: string[] = [
    "Programmer",
    "Problem Solver",
    "Human Being",
    "Thinker",
];
const animationDuration = 2 + 1 + 1 + 1;

const rotateAnimation = keyframes`
  0% { 
    opacity: 0; 
    transform: rotateX(100deg);
    transform-origin: bottom;
  }
  30% { 
    opacity: 1; 
    transform: rotateX(0deg);
    transform-origin: bottom;
  }
  60% { 
    opacity: 1; 
    transform: rotateX(0deg);
    transform-origin: bottom;
  }
  75% { 
      transform: rotateX(50deg);
      transform-origin: bottom;
  }
  100% { 
      transform: rotateX(-90deg);
      opacity: 0;
      transform-origin: bottom;
  }
`;

const StyledSkillSlider = styled.div`
    display: flex;
    font-size: 2rem;
    width: 20rem;
    height: 3rem;
    gap: 0;
    position: relative;
    align-items: center;
    perspective: 1000px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        width: 15rem;
        height: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
        width: 12rem;
        height: 2rem;
    }

    @media (max-height: 600px) and (orientation: landscape) {
        font-size: 1rem;
        height: 1.8rem;
    }
`;

const StyledSkillContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 0.5rem;
    width: auto;
    height: 100%;

    @media (max-width: 480px) {
        margin-left: 0.25rem;
    }
`;

const StyledSkill = styled.span<{ $mobileRotation?: number }>`
    position: absolute;
    width: 20rem;
    backdrop-filter: blur(10px);
    color: var(--secondary-color);
    left: 0;
    top: 0;
    backface-visibility: hidden;
    animation: ${rotateAnimation} ${animationDuration * 0.97}s ease-in-out
        infinite;
    animation-fill-mode: both;

    @media (max-width: 768px) {
        width: 15rem;
        animation: ${rotateAnimation} ${animationDuration * 0.8}s ease-in-out
            infinite;
        transform: rotateX(${(props) => props.$mobileRotation || 0}deg);
    }

    @media (max-width: 480px) {
        width: 12rem;
        backdrop-filter: blur(5px);
        animation: ${rotateAnimation} ${animationDuration * 0.7}s ease-in-out
            infinite;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
        transform: none;
    }
`;

const SkillsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Skills.length);
        }, animationDuration * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <StyledSkillSlider>
            <span>I'm a</span>
            <StyledSkillContainer>
                <StyledSkill
                    key={currentIndex}
                    $mobileRotation={isMobile ? 80 : undefined}
                >
                    {Skills[currentIndex]}
                </StyledSkill>
            </StyledSkillContainer>
        </StyledSkillSlider>
    );
};

export default SkillsSlider;
