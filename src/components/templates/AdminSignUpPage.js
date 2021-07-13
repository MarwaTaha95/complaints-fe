import React, {useState} from 'react';
import {Text} from "../basic/Texts";
import {BUTTONS, TEXT_COLOR, TEXT_SIZE} from "../basic/Types";
import {AuthenticationContainer} from "../containers/AuthenticationContainer";
import {AuthenticationForm} from "../widgets/authentication/AuthenticationForm";
import {RegisterTheme} from "../themes";
import LoginService from "../../services/LoginService";
import ResponseUtils from "../../utils/ResponseUtils";
import RedirectService from "../../services/RedirectService";
import AuthService from "../../services/AuthService";
import {Redirect} from "react-router-dom";

export const AdminSignUpPage = (props) => {
    const [password, setPassword] = useState({});
    const [name, setName] = useState({});
    const [email, setEmail] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        AuthService.ensureUpdated().then(() => setIsLoading(false));
    }, []);

    const registerAction = async () => {
        const body = {email: email, password: password, name: name, isAdmin: 'true'};
        const response = await LoginService.register(body);

        if (ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/verify");
        }
    };

    const inputFields = [
        {
            type: "text",
            label: "Email",
            changeAction: (event) => setEmail(event.target.value)
        },
        {
            type: "text",
            label: "Name",
            changeAction: (event) => setName(event.target.value)
        },
        {
            type: "text",
            label: "Password",
            extraElement: (<Text color={TEXT_COLOR.SECONDARY}
                                 label={"Your password must be at least 8 characters long. Avoid common \n" +
                                 "words or patterns."} size={TEXT_SIZE.DISPLAY2} margin={'0 0 35px 0'}/>),
            changeAction: (event) => setPassword(event.target.value)
        }
    ];

    if (isLoading) return null;
    if (AuthService.isAnonymous()) {
        return (
            <AuthenticationContainer>
                <AuthenticationForm
                    inputs={inputFields}
                    primaryButton={{
                        label: "Sign up as admin",
                        type: BUTTONS.PRIMARY,
                        theme: RegisterTheme,
                        onClick: registerAction
                    }}
                    alternative={{
                        linkLabel: 'Sign in',
                        target: '/login',
                        text: "Already have an account?",
                        margin: '57px 0 0 0'
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

