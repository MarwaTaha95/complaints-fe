import React from 'react';
import styled from 'styled-components';

export const Logo = (props) => {
    return (
        <Subcontainer isMobile={props.isMobile}>
            <LogoImg src={props.logo} isMobile={props.isMobile}/>
        </Subcontainer>
    )
};

const LogoImg = styled.img`
    width: 220px;
    margin-bottom: 30px;
    
    ${props => props.isMobile ? `
        width: 120px;
        margin-top: 34px;
        margin-bottom: 75px;
    ` : null}
    
`;

const Subcontainer = styled.div`
    margin: auto;
    width: 220px;
    
    ${props => props.isMobile ? 'width: 120px;' : null}
`;