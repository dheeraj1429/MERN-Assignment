import styled from "styled-components";

export const div = styled.div`
    width: 95%;
    margin: auto;
    padding: 1rem;
    box-shadow: 0 0 10px 1px #e1e1e1;
    border-radius: 15px;
    margin-top: 1rem;
`;

export const imageDiv = styled.div`
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: cover;
`;

export const content = styled.div`
    text-align: center;
    padding: 1rem;
    h5 {
        color: var(--light-gray);
        font-size: 25px;
    }
    p {
        color: var(--light-gray);
        font-size: 18px;
    }
`;
