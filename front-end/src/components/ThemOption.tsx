import { useState } from "react";

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
        <>
            <div onClick={() => toggleTheme()}>theme</div>
        </>
    );
};

export default ThemOption;
