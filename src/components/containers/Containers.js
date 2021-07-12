import React from 'react';
import styled from 'styled-components';
import {CONTAINERS} from "../basic/Types";

const BasicContainer = styled.div`
    box-sizing: border-box;
    padding: ${props => props.styles && props.styles.padding ? props.styles.padding : '0px'};
    width: ${props => props.styles && props.styles.width ? props.styles.width : '100%'};
`;

const DefaultContainer = styled(BasicContainer)`
    background-color: ${props => props.styles && props.styles.background ? props.styles.background : 'transparent'};
    ${props => props.styles && props.styles.height ? 'height:' + props.styles.height : 'min-height: 100vh'};
    margin: ${props => props.styles && props.styles.margin ? props.styles.margin : '0px'};
`;

const DefaultFlexContainer = styled(BasicContainer)`
    display: flex;
    height: ${props => props.styles && props.styles.height ? props.styles.height : '100%'};
    flex-direction: ${props => props.styles && props.styles.flow ? props.styles.flow : 'row'};;
    justify-content: ${props => props.styles && props.styles.justifyContent ? props.styles.justifyContent : 'inherit'};
    align-items: ${props => props.styles && props.styles.alignItems ? props.styles.alignItems : 'center'};
    margin: ${props => props.styles && props.styles.margin ? props.styles.margin : '0px'};
`;

const ModalContainer = styled(BasicContainer)`
    box-shadow: 0px 0px 10px 3px rgba(160, 160, 160, 0.25);
    margin: auto;
    background: white;
    position: relative;
    justify-content: ${props => props.styles && props.styles.justifyContent ? props.styles.justifyContent : 'center'};
    align-items: center; 
    
    ${props => props.styles && props.styles.minHeight ? 'min-height:' + props.styles.minHeight : null};
    
    @media only screen and (max-width: 550px) {
        box-shadow: none;
        margin: auto;
        width: 300px;
        padding: 0;
        height: 100%;
        min-height: 100%;
    }

`;


export const Container = (props) => {
    const {type} = props;

    switch (type) {
        case CONTAINERS.BASIC:
            return (
                <DefaultContainer
                    styles={props.styles}
                >
                    {props.children}
                </DefaultContainer>
            );
        case CONTAINERS.FLEX:
            return (
                <DefaultFlexContainer
                    styles={props.styles}
                >
                    {props.children}
                </DefaultFlexContainer>
            );
        case CONTAINERS.MODAL:
            return (
                <ModalContainer
                    styles={props.styles}
                >
                    {props.children}
                </ModalContainer>
            );
    }
};