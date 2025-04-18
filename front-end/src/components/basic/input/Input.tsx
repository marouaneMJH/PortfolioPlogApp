import styled from "styled-components";

export const InputGroup = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FileInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(30, 30, 34, 0.7);
    color: var(--main-color);
    border: none;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px var(--secondary-color);
    }
`;



export default Input;
