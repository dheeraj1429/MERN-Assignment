import styled from "styled-components";

export const div = styled.div`
    width: 500px;
    padding: 1rem;
    background-color: var(--main-cl);
    box-shadow: 0 0 10px 1px #e1e1e1;
`;

export const file = styled.div`
    width: 100%;
    padding: 1rem;
    height: 100px;
    border: 1px dotted #777;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        display: none;
    }

    div {
        text-align: center;

        p {
            font-size: 14px;
            margin-bottom: 0.4rem;
        }
    }
`;
