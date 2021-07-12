import IsMobile from "../Responsive";
import {BackgroundDecoration} from "../basic/images/Decoration";
import {Logo} from "../basic/images/Logo";
import logo from "../../assets/images/logo.svg";
import {Footer} from "../basic/footer/Footer";
import {CONTAINERS} from "../basic/Types";
import {Container} from "./Containers";
import React from "react";

const styles = {
    padding: '50px 75px 47px 75px',
    justifyContent: 'center',
    width: '500px',
    minHeight: '655px',

};

export const AuthenticationContainer = (props) => {
    const isMobile = IsMobile();
    return (
        <BackgroundDecoration isMobile={isMobile}>
            <Container
                type={CONTAINERS.MODAL}
                styles={styles}
            >
                <Logo logo={logo} isMobile={isMobile}/>
                {props.children}
            </Container>
            <Footer/>
        </BackgroundDecoration>
    )
};