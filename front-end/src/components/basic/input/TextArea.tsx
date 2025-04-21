import styled from "styled-components";

export default styled.textarea`
    width: 100%;
    min-height: 8rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(30, 30, 34, 0.7);
    color: var(--main-color);
    border: none;
    resize: vertical;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px var(--secondary-color);
    }
`;

