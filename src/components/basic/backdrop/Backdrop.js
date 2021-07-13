import React from "react";
import styled from "styled-components";

export const BackDropContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background: #BDBDBD;
    opacity: 0.5;
`;

const Backdrop = (props) => {
    return (
        <>
            {props.show ? <BackDropContainer onClick={props.cancel}/> : null}
        </>
    );
};

export default Backdrop;