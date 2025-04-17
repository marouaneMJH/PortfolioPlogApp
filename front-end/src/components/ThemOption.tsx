import { useState } from "react";
import { Sun, Moon } from "lucide-react";
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
            {theme === "dark" ? (
                <Sun onClick={() => toggleTheme()} />
            ) : (
                <Moon onClick={() => toggleTheme()} />
            )}
        </>
    );
};

export default ThemOption;
