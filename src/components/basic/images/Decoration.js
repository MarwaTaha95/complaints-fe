import React from 'react';
import styled from 'styled-components';


export const BackgroundDecoration = (props) => {

    return (
        <Background isMobile={props.isMobile}>
            {props.children}
        </Background>
    )
};

export const Background = styled.div`
    background: #F0F0F0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    
     ${props => props.isMobile ? 'background: #FFFFFF;' : null}
`;
