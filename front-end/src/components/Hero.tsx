import LinkButton from "./basic/LinkButton";
import SkillsSlider from "./sliders/SkillsSlider";
import styled from "styled-components";
import Background from "./WaveDots";

const StyledLastName = styled.span`
    color: var(--secondary-color);
`;

// const StyledHeroContainer = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

const StyledBigName = styled.h1`
    font-size: 4rem;
`;

const Hero = () => {
    return (
        // <StyledHeroContainer>
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            >
                <Background />
            </div>

            {/* Foreground Content */}
            {/* <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    color: "white",
                    textAlign: "center",
                    paddingTop: "20vh",
                }}
            >
                <StyledBigName>
                    Marouane
                    <StyledLastName> El Moujahid</StyledLastName>
                </StyledBigName>
                <SkillsSlider />
                <LinkButton to={"/about"}>About</LinkButton>
            </div> */}
            {/* </StyledHeroContainer> */}
        </div>
    );
};

export default Hero;
