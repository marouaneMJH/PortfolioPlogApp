import { NavLink } from "react-router-dom";

import styled from "styled-components";

const LinkButton = styled(NavLink)`
    background-color: var(--main-color);
    color: var(--secondary-color);
    padding: 0.25rem;
    min-width: 12rem;
    border-radius: 40px;

    &:hover {
        background-color: var(--secondary-color);
        color: var(--main-color);
    }
`;

export default LinkButton;
