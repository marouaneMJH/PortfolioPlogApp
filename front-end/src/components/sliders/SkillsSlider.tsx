import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Skills: string[] = [
    "Programmer",
    "Problem Solver",
    "Human Being",
    "Thinker",
];

const StyledSkillSlider = styled.div`
    display: flex;
    font-size: 2rem;
    display: block;
`;

const StyledSkill = styled.span`
    color: var(--secondary-color);
    width: 5rem;
    background-color: green;
`;
const SkillsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSkill, setCurrentSkill] = useState(Skills[0]);
    const duration: number = 2;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Skills.length);
        }, duration * 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentSkill(Skills[currentIndex]);
    }, [currentIndex]);

    return (
        <StyledSkillSlider>
            I'm a <StyledSkill>{currentSkill}</StyledSkill>
        </StyledSkillSlider>
    );
};

export default SkillsSlider;
