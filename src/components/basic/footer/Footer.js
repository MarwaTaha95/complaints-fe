import React from 'react';
import styled from 'styled-components';
import {Link} from "../Links";
import {Container} from "../../containers/Containers";
import {CONTAINERS, TEXT_COLOR, TEXT_SIZE} from "../Types";
import {Text} from "../Texts";
import IsMobile from "../../Responsive";

const styles = {
    margin: '0 18px 0 0'
};

export const Footer = (props) => {
    var isMobile = IsMobile();
    return (
        isMobile ? renderMobileViewFooter() : renderDesktopViewFooter()
    )
};

const renderMobileViewFooter = () => {
    return (
        <Container type={CONTAINERS.FLEX} styles={{margin: 'auto 0 0 0', justifyContent: 'center'}}>
            <Container type={CONTAINERS.BASIC} styles={{height: '200px', background: '#F0F0F0'}}>
                <Container type={CONTAINERS.FLEX}
                           styles={{justifyContent: 'center', height: 'auto', margin: '130px 0 18px 0'}}>
                    {renderFooterLinks()}
                </Container>
                <Container type={CONTAINERS.FLEX}
                           styles={{flow: 'column', margin: 'auto 0 10px 0', justifyContent: 'center', height: 'auto'}}>
                    <HorizontalLine/>
                    <FooterRights/>
                </Container>
            </Container>
        </Container>
    )
};

const renderDesktopViewFooter = () => {
    return (
        <Container type={CONTAINERS.FLEX} styles={{margin: 'auto 0 15px 0', justifyContent: 'center'}}>
            <FooterRights/>
            <VerticalLine/>
            {renderFooterLinks()}
        </Container>
    )
};

const FooterRights = () => (
    <Text size={TEXT_SIZE.DISPLAY2} color={TEXT_COLOR.SECONDARY}
          label={'2021 © ABC Inc , All rights reserved'}/>
);

const VerticalLine = styled.div`
    border-left: 1px solid #646F79;
    height: 23px;
    width: 0px;
    margin-left: 27px;
    margin-right: 27px;
`;

const HorizontalLine = styled.div`
    width: 300px;
    height: 0px;
    margin-bottom: 13px;

    border-top: 1px solid #CECECE;
`;

const renderFooterLinks = () => {
    return (
        <>
            <Link text={'Privacy Policy'} path={'/privacy'}
                  styles={{fontcolor: '#AE17A8', ...styles}}/>
            <Link text={'About'} path={'/about'}
                  styles={{fontcolor: '#3B5AB4', ...styles}}/>
            <Link text={'Support'} path={'/support'}
                  styles={{fontcolor: '#982ECA', ...styles}}/>
        </>
    )
};