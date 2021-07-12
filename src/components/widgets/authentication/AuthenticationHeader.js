import {Text} from "../../basic/Texts";
import {TEXT_COLOR, TEXT_SIZE} from "../../basic/Types";
import React from "react";

export const AuthenticationHeader = (props) => {
    return (
        <>
            <Text
                color={TEXT_COLOR.SECONDARY}
                size={TEXT_SIZE.HEADER}
                label={props.header}
                weight={'700'}
                margin={'10px 0 18px 0'}
            />

            {props.text && <Text
                color={TEXT_COLOR.SECONDARY}
                size={TEXT_SIZE.DISPLAY2}
                label={props.text}
                margin={'0 0 35px 0'}
            />}
        </>
    )
};