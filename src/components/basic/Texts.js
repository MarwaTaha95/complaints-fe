import React from 'react';
import styled from 'styled-components';

export const Text = (props) => {
    return (
        <DefaultText
            color={props.color}
            size={props.size}
            margin={props.margin}
            weight={props.weight}
        >
            {props.label ? props.label : props.children}
        </DefaultText>
    )
};

const DefaultText = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    color: ${props => props.color ? props.color : 'inherit'};
    font-size: ${props => props.size ? props.size : 'inherit'};
    margin: ${props => props.margin ? props.margin : '0px'};
    font-weight: ${props => props.weight ? props.weight : 'inherit'};
`;

