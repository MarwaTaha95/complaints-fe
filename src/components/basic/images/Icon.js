import React from 'react';
import styled from 'styled-components';

export const Icon = styled.img`
    width: ${props => props.width? props.width : '20px'};
    height: ${props => props.height? props.height: '20px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '60px'};
    
    ${props => props.isMobile ? 'margin: 0; width: 15px;   height: 15px;' : null}
`;