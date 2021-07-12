import React, {useState} from 'react';
import {AuthenticationContainer} from "../containers/AuthenticationContainer";
import {BUTTONS} from "../basic/Types";
import {AuthenticationForm} from "../widgets/authentication/AuthenticationForm";
import {LoginTheme} from "../themes";
import {Link} from "../basic/Links";

const SignInPage = (props) => {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});

    const linkStyle = {
        hoverColor: '#36367F',
        textDecoration: 'underline',
        margin: '0 0 25px 0'
    };

    const loginAction = async () => {
        // TODO
    };

    const inputFields = [
        {
            type: "text",
            label: "Email",
            changeAction: (event) => setEmail(event.target.value)
        },
        {
            type: "text",
            label: "Password",
            extraElement: (<Link styles={linkStyle} text={"Forgot your password?"} path={'/test2'}/>),
            changeAction: event => setPassword(event.target.value)
        }
    ];

    return (
        <AuthenticationContainer>
            <AuthenticationForm
                inputs={inputFields}
                primaryButton={{label: "Sign in", type: BUTTONS.PRIMARY, theme: LoginTheme, onClick: loginAction}}
                alternative={{
                    linkLabel: 'Sign up',
                    target: '/signup',
                    text: "Don't have an account?",
                    margin: '134px 0 0 0'
                }}
            />
        </AuthenticationContainer>
    )
};

export default SignInPage;

