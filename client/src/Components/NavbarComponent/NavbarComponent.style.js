import styled from "styled-components";

export const nav = styled.div`
    padding: 1rem;
    width: 100%;
    .inner_nav_div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ul {
        display: flex;
    }
    ul li {
        list-style: none;
        margin: 0 1rem;
    }
    ul li p {
        text-decoration: none;
        color: var(--dark-cl);
    }
    .active {
        color: var(--button-cl);
    }
`;
