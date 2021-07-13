import React from 'react';
import {Container} from "../../containers/Containers";
import {BUTTONS, CONTAINERS} from "../../basic/Types";
import IsMobile from "../../Responsive";
import {Logo} from "../../basic/images/Logo";
import logo from "../../../assets/images/logo.svg";
import styled from "styled-components";
import {Icon} from "../../basic/images/Icon";
import avatar from "../../../assets/images/avatar.svg"
import {Button} from "../../basic/form/Buttons";


export const Navbar = (props) => {
    const isMobile = IsMobile();

    return (
        <Container type={CONTAINERS.FLEX} styles={{
            margin: '50px 130px 34px 130px',
            justifyContent: 'space-between',
            width: 'auto',
            alignItems: 'center'
        }}>
            <Subcontainer>
                <Logo logo={logo} isMobile={isMobile} width={'144px'}/>
            </Subcontainer>
            <Logout logout={props.logout}/>
        </Container>
    )
};

const Logout = (props) => {
    return (
        <Container type={CONTAINERS.FLEX} styles={{width: '170px', alignItems: 'center'}}>
            <Button
                item={{
                    type: BUTTONS.ACTION,
                    label: 'Logout',
                    onClick: props.logout,
                }}
                width='80px;'
            />
            <Icon src={avatar} width={'40px'} height={'40px'}/>
        </Container>

    )
};

const Subcontainer = styled.div`
    width: 144px;
    
    ${props => props.isMobile ? 'width: 120px;' : null}
`;
