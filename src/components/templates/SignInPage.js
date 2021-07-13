import React, {useState} from 'react';
import {AuthenticationContainer} from "../containers/AuthenticationContainer";
import {BUTTONS} from "../basic/Types";
import {AuthenticationForm} from "../widgets/authentication/AuthenticationForm";
import {LoginTheme} from "../themes";
import {Link} from "../basic/Links";
import LoginService from "../../services/LoginService";
import ResponseUtils from "../../utils/ResponseUtils";
import RedirectService from "../../services/RedirectService";
import AuthService from "../../services/AuthService";
import {Redirect} from "react-router-dom";

const SignInPage = (props) => {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        AuthService.ensureUpdated().then(() => setIsLoading(false));
    }, []);

    const loginAction = async () => {
        const body = {email: email, password: password};
        const response = await LoginService.login(body);

        if(ResponseUtils.isValid(response)) {
            RedirectService.redirect(response.data.redirect, "/home");
        }
    };

    const inputFields = [
        {
            type: "text",
            label: "Email",
            changeAction: (event) => setEmail(event.target.value)
        },
        {
            type: "password",
            label: "Password",
            changeAction: event => setPassword(event.target.value)
        }
    ];

    if(isLoading) return null;

    if(AuthService.isAnonymous()){
        return (
            <AuthenticationContainer>
                <AuthenticationForm
                    inputs={inputFields}
                    primaryButton={{label: "Sign in", type: BUTTONS.PRIMARY, theme: LoginTheme, onClick: loginAction}}
                    alternative={{
                        linkLabel: 'Sign up',
                        target: '/register',
                        text: "Don't have an account?",
                        margin: '134px 0 0 0'
                    }}
                />
            </AuthenticationContainer>
        )
    } else {
        return (
            <Redirect to="/home"/>
        );
    }
};

export default SignInPage;

