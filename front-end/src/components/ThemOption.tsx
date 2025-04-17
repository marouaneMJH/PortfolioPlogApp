import { Sun } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
const StyledSun = styled(Sun)`
    border-left: 2px dotted var(--main-color);
    padding-left: 0.7rem;
    /* border-radius: 1px; */
`;

const ThemOption = () => {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    const toggleTheme = (): void => {
        setTheme((curentThem: "dark" | "light") =>
            curentThem === "dark" ? "light" : "dark"
        );

        const bodyTag = document.querySelector("body");
        bodyTag?.setAttribute("data-theme", theme);
        console.log(theme);
    };

    return (

        // debug instead the inverce
        <>
            <StyledSun
                size={18}
                style={{ marginRight: "8px" }}
                onClick={() => toggleTheme()}
            />
        </>
    );
};

export default ThemOption;
