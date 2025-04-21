import styled from "styled-components";

export const SubmitButton = styled.button`
    align-self: flex-end;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: var(--secondary-color);
    color: white;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #d32f2f;
    }
`;
