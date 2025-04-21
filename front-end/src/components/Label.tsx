import styled from "styled-components";

export const FileInputLabel = styled.div`
    padding: 1rem;
    background-color: rgba(30, 30, 34, 0.7);
    color: var(--main-color);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px dashed #444;

    &:hover {
        border-color: var(--secondary-color);
    }
`;

const Label = styled.label`
    color: var(--main-color);
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500;
`;

export default Label;
