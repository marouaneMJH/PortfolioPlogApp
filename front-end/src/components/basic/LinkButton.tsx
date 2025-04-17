import { NavLink } from "react-router-dom";

import styled from "styled-components";
interface LinkButtonProps {
    children?: React.ReactNode;

    $maxWidth?: string;
    $minWidth?: string;

    $height?: string;
    $maxHeight?: string;
    $minHeight?: string;

    $padding?: string;
    $margin?: string;
}

const LinkButton = styled(NavLink)<LinkButtonProps>`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 8px;
    height: ${(props) => props.$height || "2rem"};
    max-height: ${(props) => props.$maxHeight || "2rem"};
    min-height: ${(props) => props.$minHeight || "3rem"};

    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    min-width: ${(props) => props.$minWidth || "12rem"};
    margin: ${(props) => props.$margin || "0 auto"};
    padding: ${(props) => props.$padding || "0 1rem"};
    box-sizing: border-box;

    
    background-color: var(--bg-secondary-color);
    color: var(--main-color);
    &:hover {
        background-color: var(--main-color);
        color: var(--bg-secondary-color);
    }
`;

export default LinkButton;
