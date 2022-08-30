import styled from "styled-components";

export const div = styled.div``;

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
