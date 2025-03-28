import { NavLink } from "react-router-dom";

import styled from "styled-components";

const LinkButton = styled(NavLink)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 8px;
    min-width: 12rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    background-color: var(--bg-secondary-color);
    color: var(--main-color);
    &:hover {
        background-color: var(--main-color);
        color: var(--bg-secondary-color);
    }
`;

export default LinkButton;
