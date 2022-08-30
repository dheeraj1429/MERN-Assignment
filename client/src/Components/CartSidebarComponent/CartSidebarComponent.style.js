import styled from "styled-components";

export const div = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-cl);
    top: 0;
    left: 0;
    z-index: 100;
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    opacity: ${(props) => (props.show ? "1" : "0")};
`;

export const sidebar = styled.div`
    position: fixed;
    right: ${(props) => (props.show ? "0px" : "-400px")};
    top: 0;
    height: 100%;
    width: 350px;
    background: var(--main-cl);
    transition: all 0.2s ease;
    padding: 1rem;
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    opacity: ${(props) => (props.show ? "1" : "0")};

    .close_icon {
        font-size: 20px;
    }
`;
