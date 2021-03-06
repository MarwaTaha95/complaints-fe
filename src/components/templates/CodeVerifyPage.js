import React, {useState} from 'react';
import back from "../../assets/images/back.svg";
import {AuthenticationContainer} from "../containers/AuthenticationContainer";
import {BUTTONS} from "../basic/Types";
import {AuthenticationForm} from "../widgets/authentication/AuthenticationForm";
import {RegisterTheme} from "../themes";
import LoginService from "../../services/LoginService";
import ResponseUtils from "../../utils/ResponseUtils";
import RedirectService from "../../services/RedirectService";
import AuthService from "../../services/AuthService";
import {Redirect} from "react-router-dom";

const CodeVerifyPage = (props) => {
    const [code, setCode] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        AuthService.ensureUpdated().then(() => setIsLoading(false));
    }, []);

    const inputFields = [
        {
            type: "text",
            changeAction: (event) => setCode(event.target.value)
        }
    ];

    const handleCode = async () => {
        const body = {code: code, rememberMe: true};
        const response = await LoginService.verifyCode(body);

        if (ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/home");
        }
    };

    if (isLoading) return null;
    if (AuthService.isAnonymous()) {
        return (
            <AuthenticationContainer>
                <AuthenticationForm
                    header={{
                        header: 'Email verification',
                        text: 'A verification code has been sent to your email. Please enter the code in the box below in order to verify your account'
                    }}
                    inputs={inputFields}
                    primaryButton={{label: "Verify", type: BUTTONS.PRIMARY, theme: RegisterTheme, onClick: handleCode}}
                    backLink={{
                        link: {text: 'Back', type: 'secondary-action', path: '/register', icon: back},
                        linkMargin: '30px 0 0 0'
                    }}
                    alternative={{
                        linkLabel: 'Sign in',
                        target: '/login',
                        text: "Already have an account?",
                        margin: '130px 0 0 0'
                    }}
                />
            </AuthenticationContainer>
        );
    } else {
        return (
            <Redirect to="/home"/>
        );
    }
};

export default CodeVerifyPage;