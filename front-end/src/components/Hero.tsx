import LinkButton from "./basic/LinkButton";
import SkillsSlider from "./sliders/SkillsSlider";
import styled from "styled-components";

const StyledLastName = styled.span`
    color: var(--secondary-color);
`;

const Hero = () => {
    return (
        <div>
            <h1>
                Marouane
                <StyledLastName> El Moujahid</StyledLastName>
            </h1>
            <SkillsSlider />
            <LinkButton to={"/about"}>About</LinkButton>
        </div>
    );
};

export default Hero;
