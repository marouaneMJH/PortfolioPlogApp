import LinkButton from "./basic/LinkButton";
import SkillsSlider from "./sliders/SkillsSlider";



const StyledName =  styled.


const Hero = () => {
    return (
        <div>
            <p>Marouane El Moujahid</p>
            <SkillsSlider />
            <LinkButton to={"/about"}>About</LinkButton>
        </div>
    );
};

export default Hero;
