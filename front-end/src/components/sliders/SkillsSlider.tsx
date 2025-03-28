import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Skills: string[] = [
    "Programmer",
    "Problem Solver",
    "Human Being",
    "Thinker",
];
const animationDuration = 2 + 1 + 1 + 1; // Duration in seconds

// Single animation that handles the whole transition
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
    /* text-align: center; */
    perspective: 1000px;
`;

const StyledSkillContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 0.5rem;
    width: auto;
    height: 100%;
`;

const StyledSkill = styled.span`
    position: absolute;
    width: 20rem;
    backdrop-filter: blur(10px);
    background-color: none;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    animation: ${rotateAnimation} ${animationDuration * 0.97}s ease-in-out
        infinite;
    animation-fill-mode: both;
`;

const SkillsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Skills.length);
        }, animationDuration * 1000); // Change skill every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <StyledSkillSlider>
            <span>I'm a</span>
            <StyledSkillContainer>
                <StyledSkill key={currentIndex}>
                    {Skills[currentIndex]}
                </StyledSkill>
            </StyledSkillContainer>
        </StyledSkillSlider>
    );
};

export default SkillsSlider;
