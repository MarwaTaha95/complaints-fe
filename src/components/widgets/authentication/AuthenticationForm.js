import {Button} from "../../basic/form/Buttons";
import {InputField} from "../../basic/form/Input";
import React from "react";
import {CONTAINERS, TEXT_COLOR, TEXT_SIZE} from "../../basic/Types";
import {Text} from "../../basic/Texts";
import {Container} from "../../containers/Containers";
import {Link} from "../../basic/Links";
import {AuthenticationHeader} from "./AuthenticationHeader";
import IsMobile from "../../Responsive";
import {Margin} from "../../basic/Margin";

const linkStyles = {
    fontcolor: '#317EC6',
};

const renderInputFields = (inputs, isMobile) => {
    return <>
        {inputs ? inputs.map(input => {
            return (
                <InputField
                    type={input.type}
                    label={input.label}
                    link={input.link}
                    extraElement={input.extraElement}
                    isMobile={isMobile}
                    blurAction={input.blurAction}
                    focusAction={input.focusAction}
                    changeAction={input.changeAction}
                    disabled={input.disabled}
                    value={input.value}
                />
            )
        }) : null}
    </>
};

const renderHeader = (header) => {
    return (
        header ? (
            <AuthenticationHeader header={header.header} text={header.text}/>
        ) : null
    )
};

const renderAlternativePath = (alternative) => {
    return (
        alternative ? (
            <Container
                type={CONTAINERS.FLEX}
                styles={{justifyContent: 'center', margin: (alternative.margin || '61px 0 0 0')}}
            >
                <Text size={TEXT_SIZE.DISPLAY2} color={TEXT_COLOR.SECONDARY}>
                    {alternative.text}&nbsp;
                    <Link text={alternative.linkLabel} path={alternative.target} styles={linkStyles}/>
                </Text>
            </Container>
        ) : null
    )
};

const renderBackLink = (backLink) => {
    return (
        backLink && backLink.link ? (
            <Container type={CONTAINERS.FLEX} styles={{justifyContent: 'center', margin: backLink.linkMargin}}>
                <Link text={backLink.link.text} path={backLink.link.path}
                      icon={backLink.link.icon}/>
            </Container>
        ) : null
    )
};
export const AuthenticationForm = (props) => {
    var isMobile = IsMobile();
    return (
        isMobile ? renderMobileViewForm(props) : renderDesktopViewForm(props)
    )
};

const renderMobileViewForm = (props) => {
    return (
        <>
            {renderHeader(props.header)}
            {renderInputFields(props.inputs, true)}
            {props.primaryButton && <Button item={props.primaryButton} isMobile={true}
            />}
            {renderBackLink(props.backLink)}
            <Margin margin={'0 0 50px 0'}>
                {renderAlternativePath(props.alternative)}
            </Margin>
        </>
    )
};

const renderDesktopViewForm = (props) => {
    return (
        <>
            {renderHeader(props.header)}
            {renderInputFields(props.inputs, false)}
            {props.primaryButton && <Button item={props.primaryButton} isMobile={false}
            />}
            {renderBackLink(props.backLink)}
            {renderAlternativePath(props.alternative)}
        </>
    );
};
