import React from 'react';
import styled from 'styled-components';

export const Logo = (props) => {
    return (
        <Subcontainer isMobile={props.isMobile} width={props.width}>
            <LogoImg src={props.logo} isMobile={props.isMobile} width={props.width}/>
        </Subcontainer>
    )
};

const LogoImg = styled.img`
    width: ${props => props.width ? props.width : '144px;'}
    margin-bottom: 30px;
    
    ${props => props.isMobile ? `
        width: 120px;
        margin-top: 34px;
        margin-bottom: 75px;
    ` : null}
    
`;

const Subcontainer = styled.div`
    margin: auto;
    width: ${props => props.width ? props.width : '144px;'}
    
    ${props => props.isMobile ? 'width: 120px;' : null}
`;