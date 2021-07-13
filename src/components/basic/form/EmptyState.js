import React from 'react';
import styled from 'styled-components';
import emptyState from "../../../assets/images/emptystates.svg"
import {Text} from "../Texts";
import {TEXT_COLOR, TEXT_SIZE} from "../Types";

export const EmptyState = () => {
    return (
        <>
            <Image src={emptyState}/>
            <Text
                size={TEXT_SIZE.HEADER}
                color={TEXT_COLOR.PRIMARY}
                label={'No complaints'}
                margin={'10px 0 0 0'}
            />
            <Text
                size={TEXT_SIZE.DETAIL1}
                color={TEXT_COLOR.SECONDARY}
                label={'There are currently no complaints'}
                margin={'10px 0 0 0'}
            />
        </>
    )
};

const Image = styled.img`
    height: 320px;
`;