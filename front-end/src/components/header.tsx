import React from "react";
import { NavLink } from "react-router-dom";
import ThemOption from "./ThemOption";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* background-color: var(--bg-color); */
`;

const StyledLogo = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
`;

const StyledNavBar = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const NavList = styled.ul`
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
    padding: 0;

    li a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        /* transition: font-weight 0s ease; */
        opacity: 0.8;


        &:hover {
            opacity: 1;
        }

        &.active {
            font-weight: bold;
        }
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const HeaderCom: React.FC = () => {
    return (
        <StyledHeader>
            <StyledLogo>MJH</StyledLogo>
            <HeaderRight>
                <StyledNavBar>
                    <NavList>
                        <li>
                            <NavLink to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts">Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </NavList>
                </StyledNavBar>
                <ThemOption />
            </HeaderRight>
        </StyledHeader>
    );
};

export default HeaderCom;
