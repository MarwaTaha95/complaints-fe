import React, {useState} from 'react';
import {Text} from "../basic/Texts";
import {BUTTONS, TEXT_COLOR, TEXT_SIZE} from "../basic/Types";
import {Link} from "../basic/Links";
import {InputField} from "../basic/form/Input";
import {AuthenticationContainer} from "../containers/AuthenticationContainer";
import {AuthenticationForm} from "../widgets/authentication/AuthenticationForm";
import {RegisterTheme} from "../themes";

const linkStyles = {
    fontcolor: '#317EC6',
    textDecoration: 'none',
    fontSize: '11px'
};

const checkbox = (
    <InputField
        type={'checkbox'}
        extraElement={
            <>
                <Text size={TEXT_SIZE.DISPLAY2} color={TEXT_COLOR.SECONDARY}>
                    Agree to ABC&nbsp;
                    <Link text={'Terms of Service'} path={'/signup'} styles={linkStyles}/>&nbsp;and&nbsp;
                    <Link text={'Privacy Policy'} path={'/signup'} styles={linkStyles}/>
                </Text>
            </>
        }
    />
);

export const SignUpPage = (props) => {
    const [password, setPassword] = useState({});
    const [name, setName] = useState({});
    const [email, setEmail] = useState({});

    const registerAction = async () => {
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

    return (
        <AuthenticationContainer>
            <AuthenticationForm
                inputs={inputFields}
                primaryButton={{
                    label: "Sign up",
                    extraElement: checkbox,
                    type: BUTTONS.PRIMARY,
                    theme: RegisterTheme,
                    onClick: registerAction
                }}
                alternative={{
                    linkLabel: 'Sign up',
                    target: '/signup',
                    text: "Don't have an account?",
                    margin: '57px 0 0 0'
                }}
            />
        </AuthenticationContainer>
    );
};

