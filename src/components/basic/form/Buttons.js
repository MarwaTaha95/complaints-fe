import React from "react";
import styled from "styled-components";
import {Icon} from "../images/Icon";
import {Text} from "../Texts";
import {Container} from "../../containers/Containers";
import {BUTTONS, CONTAINERS} from "../Types";

const DefaultButton = styled.button`
    cursor: pointer;
    box-shadow: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
    text-align: center;
`;

export const ButtonContent = (props) => {
    return (
        <Container type={CONTAINERS.FLEX}>
            {props.isMobile ? (
                <>
                    {props.icon ? <Icon src={props.icon} isMobile={props.isMobile}/> : props.text ?
                        <Text weight={'600'} label={props.text}/> : null}
                </>
            ) : (
                <>
                    {props.icon ? <Icon src={props.icon}/> : null}
                    {props.text ? <Text label={props.text}/> : null}
                </>
            )}
        </Container>
    );
};

const UnStyledButton = (props) => {
    /*
    * Main Button implementation
    * */
    const {label, onClick, fullSize, icon, extraElement} = props.item;

    return (
        <>
            <DefaultButton
                onClick={(event) => onClick(event)}
                fullSize
                {...props}
            >
                <ButtonContent text={label} icon={icon} isMobile={props.isMobile}/>
            </DefaultButton>
            {extraElement && extraElement}
        </>
    )
};

export const SocialButton = styled(UnStyledButton)`
    background: #FFFFFF;
    border: 1px solid #CBD4DB;
    font-size: 12px;
    width: ${props => props.width ? props.width : '350px;'}
    height: 48px;
    padding-left: 55px;
    padding-right: 55px;
    margin-bottom: 8px;
    color: #0D0D31;
    font-weight: 400;
    text-align: center;
    justify-content: center;
    
    &:hover, &:active {  
        background-color: #f0f0f0;
        color: #0D0D31;
    }
    
    ${props => props.isMobile ?
    (
        'width: 40px; ' +
        'height: 40px; ' +
        'padding: 0; ' +
        'border-radius: 20px; ' +
        'box-shadow: 0px 0px 5px 2px rgba(194, 194, 194, 0.5); ' +
        'justify-content: center; ' +
        'margin: auto;'
    ) : null}
`;

const PrimaryButton = styled(UnStyledButton)`
    background: ${props => props.theme && props.theme.background ? props.theme.background : '#36367F'};
    width: ${props => props.width ? props.width : '350px;'}
    height: 48px;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
    color: white;
    justify-content: center;
    
    &:hover, &:active {  
        background: ${props => props.theme && props.theme.hover ? props.theme.hover : '#292968'};
    }
    
    ${props => props.isMobile ? ('width: 300px;') : null}
`;

const Margin = styled.div`
    margin-bottom: ${props => props.bottom ? props.bottom : '0px'};
`;

export const Button = (props) => {
    const {type} = props.item;
    switch (type) {
        case BUTTONS.PRIMARY:
            return (
                <Margin bottom={'10px'}>
                    <PrimaryButton
                        theme={props.item.theme}
                        {...props}
                    />
                </Margin>
            );
        case BUTTONS.SOCIAL:
            return (
                <Margin bottom={'10px'}>
                    <SocialButton
                        theme={props.item.theme}
                        {...props}
                    />
                </Margin>
            );
        default:
            return (
                <UnStyledButton
                    {...props}
                />
            );
    }
};