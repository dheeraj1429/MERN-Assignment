import styled from "styled-components";

export const div = styled.div`
    display: flex;
    justify-content: center;

    .Uplod_button {
        padding: 0.5rem 3rem;
        margin-top: 1rem;
        background-color: var(--gray-cl);
        color: var(--main-cl);
        border-radius: 10px;
    }
    .know_more_button {
        padding: 0.5rem 2rem;
        background-color: var(--gray-cl);
        color: var(--main-cl);
        border-radius: 10px;
        cursor: pointer;
    }
    .Delete_product {
        background-color: var(--button-cl);
        color: var(--main-cl);
        padding: 0.5rem 3rem;
        margin: 1rem;
        border-radius: 15px;
    }
    .add_to_card {
        margin-top: 1rem;
        padding: 0.5rem 2rem;
        background-color: var(--dark-cl);
        color: var(--main-cl);
        border-radius: 10px;
        cursor: pointer;
    }
    .signIn_button {
        padding: 0.7rem 3rem;
        margin-top: 1rem;
        background-color: var(--dark-cl);
        color: var(--main-cl);
        border-radius: 15px;
    }
`;

export const button = styled.button`
    border: none;
`;
