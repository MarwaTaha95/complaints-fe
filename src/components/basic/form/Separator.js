import React from 'react';
import styled from 'styled-components';
import {Container} from "../../containers/Containers";
import {CONTAINERS, TEXT_COLOR, TEXT_SIZE} from "../Types";
import {Text} from "../Texts";
import {Icon} from "../images/Icon";
import arrow from "../../../assets/images/arrow.svg"

export const Separator = (props) => {
    return (
        <Container
            type={CONTAINERS.FLEX}
            styles={{margin: '20px 0 30px 0', flow: 'column', justifyContent: 'flex-start'}}
        >
            <Container
                type={CONTAINERS.FLEX}
                styles={{margin: '0 0 10px 0'}}
            >
                <Icon src={arrow} width={'10px'} height={'10px'} marginRight={'13px'}/>
                <Text
                    size={TEXT_SIZE.HEADER}
                    color={TEXT_COLOR.PRIMARY}
                    label={props.text}
                    margin={'0 16px 0 16px'}
                />
            </Container>
            <Line/>
        </Container>
    )
};

const Line = styled.div`
    width: 100%;
    height: 1px;
    
    border-top: 2px solid #E8ECEE;
`;
