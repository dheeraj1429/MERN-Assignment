import styled from "styled-components";

export const div = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
