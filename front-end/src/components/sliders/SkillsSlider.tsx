import React, { useState, useEffect } from "react";

const Skills: string[] = [
    "Programmer",
    "Problem Solver",
    "Human Being",
    "Thinker",
];

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

    return <div>I'm a {currentSkill}</div>;
};

export default SkillsSlider;
