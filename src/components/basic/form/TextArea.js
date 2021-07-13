import React from "react";
import styled from "styled-components";
import {TEXT_COLOR, TEXT_SIZE} from "../Types";
import {Text} from "../Texts";

const TextBox = styled.textarea`
    width: 100%;
    overflow: auto;
    padding: 10px;
    height: 110px;
    border: 1px solid #CBD4DB;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    color: #0D0D31;
    border-radius: 5px;

    &:active, &:focus{  
        border: 1px solid #36367F;  
    }
`;

const TextArea = (props) => {
    return (
        <>
            <Text
                size={TEXT_SIZE.DISPLAY1}
                color={TEXT_COLOR.SECONDARY}
                label={'Description'}
                margin={'0 0 6px 0'}
            />
            <TextBox
                placeholder={props.placeholder}
                defaultValue={props.text}
                onChange={props.onChange}
            />
        </>
    )
};

export default TextArea;