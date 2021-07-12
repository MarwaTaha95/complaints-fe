import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Container} from "../containers/Containers";
import {CONTAINERS} from "./Types";
import {Icon} from "./images/Icon";
import {Text} from "./Texts";

const DefaultLink = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    font-family: Montserrat;
    box-shadow: none;
    border: none;
    display: flex;  
    display: inline-block;
    font-size: ${props => props.styles && props.styles.fontSize ? props.styles.fontSize : '11px'};
    text-decoration-line: ${props => props.styles && props.styles.textDecoration ? props.styles.textDecoration : 'none'};
    color: ${props => props.styles && props.styles.fontcolor ? props.styles.fontcolor : '#6F7782'};
    margin: ${props => props.styles && props.styles.margin ? props.styles.margin : '0px'};

    &:hover {
        color: ${props => props.styles && props.styles.hoverColor ? props.styles.hoverColor : 'inherit'}
    }  
`;

const LinkContent = (props) => {
    return (
        <Container type={CONTAINERS.FLEX}>
            {props.icon ?
                <Icon
                    src={props.icon}
                    marginRight={'13px'}
                    width={props.icon.width || '10px'}
                    height={props.icon.height || '15px'}
                />
                :
                null
            }
            {props.text ? <Text label={props.text}/> : null}
        </Container>
    );
};

const UnStyledLink = (props) => {
    const {text, path, icon} = props;
    return (
        <DefaultLink
            exact to={path}
            {...props}
        >
            <LinkContent text={text} icon={icon}/>
        </DefaultLink>
    );
};


export const Link = (props) => {
    return <UnStyledLink {...props}/>
};