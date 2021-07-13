import {Text} from "./basic/Texts";
import {TEXT_COLOR, TEXT_SIZE} from "./basic/Types";
import React from "react";

export const PriorityList = [
    {
        name: 'priority',
        value: 'URGENT',
        extraElement: (<Text size={TEXT_SIZE.DETAIL1} color={TEXT_COLOR.PRIMARY} label={"Urgent"}/>)
    },
    {
        name: 'priority',
        value: 'CRITICAL',
        extraElement: (
            <Text size={TEXT_SIZE.DETAIL1} color={TEXT_COLOR.PRIMARY} label={"Critical"}/>)
    },
    {
        name: 'priority',
        value: 'NORMAL',
        extraElement: (<Text size={TEXT_SIZE.DETAIL1} color={TEXT_COLOR.PRIMARY} label={"Normal"}/>)
    }
];