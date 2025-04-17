import styled from "styled-components";
import React from "react";

interface ContainerProps {
    children?: React.ReactNode;
    $maxWidth?: string;
    $padding?: string;
    $margin?: string;
    $notMain?: boolean;
    $flex?: boolean;
    $gap?: string;
    $flexDirection?: "column" | "row";
    $alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
    $justifyContent?:
        | "flex-start"
        | "center"
        | "flex-end"
        | "space-between"
        | "space-around";
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    height: ${(props) => props.$notMain && "80vh"};
    max-width: ${(props) => props.$maxWidth || "100%"};
    margin: ${(props) => props.$margin || "0 auto"};
    padding: ${(props) => props.$padding || "0 1rem"};
    box-sizing: border-box;
    flex-direction: ${(props) => props.$flexDirection || ""};
    overflow-y: auto;

    ${(props) =>
        props.$flex &&
        `
    display: flex;
    gap: ${props.$gap || "1rem"};
    align-items: ${props.$alignItems || "stretch"};
    justify-content: ${props.$justifyContent || "flex-start"};
  `}

    /* Responsive Breakpoints */
  @media (min-width: 480px) {
        /* Mobile landscape & small tablets */
        padding: ${(props) => props.$padding || "0 1.25rem"};
        max-width: ${(props) => props.$maxWidth || "464px"};
    }

    @media (min-width: 768px) {
        /* Tablets */
        padding: ${(props) => props.$padding || "0 1.5rem"};
        max-width: ${(props) => props.$maxWidth || "720px"};
    }

    @media (min-width: 992px) {
        /* Small laptops */
        padding: ${(props) => props.$padding || "0 1.75rem"};
        max-width: ${(props) => props.$maxWidth || "960px"};
    }

    @media (min-width: 1200px) {
        /* Desktop */
        padding: ${(props) => props.$padding || "0 2rem"};
        max-width: ${(props) => props.$maxWidth || "1140px"};
    }

    @media (min-width: 1440px) {
        /* Large desktop */
        padding: ${(props) => props.$padding || "0 2.5rem"};
        max-width: ${(props) => props.$maxWidth || "1320px"};
    }

    @media (min-width: 1920px) {
        /* 4K screens */
        max-width: ${(props) => props.$maxWidth || "1600px"};
    }
`;

export default Container;
