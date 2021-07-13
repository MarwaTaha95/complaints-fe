import React, {useState} from 'react';
import {Container} from "../../containers/Containers";
import {CONTAINERS, TEXT_COLOR, TEXT_SIZE} from "../../basic/Types";
import styled from "styled-components";
import {Icon} from "../../basic/images/Icon";
import {Text} from "../../basic/Texts";
import mail from "../../../assets/images/mail.svg";
import ViewComplaint from "./ViewComplaint";
import AdminViewComplaint from "./AdminViewComplaint";

export const Complaint = (props) => {
    const [item] = useState(props.item);
    const [view, setView] = useState(false);

    const toggleView = () => {
        setView(previousState => !previousState)
    };

    const viewDetails = () => {
        toggleView()
    };

    const update = (item) => {
        toggleView();
        props.save(item);
    };

    return (
        <>
            <Container
                type={CONTAINERS.FLEX}
                styles={{
                    margin: '0 130px 10px 130px',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                    height: '50px;',
                }}
                onClick={viewDetails}>
                <Title>
                    <Icon src={mail} width={'20px'} height={'20px'} marginRight={'13px'}/>
                    <Text size={TEXT_SIZE.DISPLAY1} color={TEXT_COLOR.PRIMARY} label={props.item.title}
                          margin={'0 0 0 0'}/>
                </Title>
                <Info {...props}/>
            </Container>
            {props.isAdmin ? <AdminViewComplaint show={view} cancel={toggleView} item={item} update={update}/> : <ViewComplaint show={view} cancel={toggleView} item={item}/>}

        </>
    )
};

const Info = (props) => {
    if(props.isAdmin) {
        return (
            <Status>
                {props.item.priority && props.item.priority === 'URGENT' ?
                    <PendingState/> : props.item.priority === 'CRITICAL' ? <ResolvedState/> : <DismissedState/>}
                <Text
                    size={TEXT_SIZE.DISPLAY1}
                    color={TEXT_COLOR.PRIMARY}
                    label={props.item.priority}
                    margin={'0 0 0 0'}
                />
            </Status>
        )
    } else {
        return (
            <Status>
                {props.item.status && props.item.status === 'PENDING' ?
                    <PendingState/> : props.item.status === 'RESOLVED' ? <ResolvedState/> : <DismissedState/>}
                <Text
                    size={TEXT_SIZE.DISPLAY1}
                    color={TEXT_COLOR.PRIMARY}
                    label={props.item.status}
                    margin={'0 0 0 0'}
                />
            </Status>
        )
    }
};

const PendingState = styled.div`
    background: #AE17A8;
    width: 10px;
    height: 10px;
    margin: 0 4px 0 16px
`;

const DismissedState = styled.div`
    background: #CBD4DB;
    width: 10px;
    height: 10px;
    margin: 0 4px 0 16px
`;

const ResolvedState = styled.div`
    background: #317EC6;
    width: 10px;
    height: 10px;
    margin: 0 4px 0 16px
`;

const Title = styled.div`
    border-top: 1px solid #E8ECEE;
    border-bottom: 1px solid #E8ECEE;
    height: 100%;
    display: flex;
    align-items: center;
    width: 80%;
`;

const Status = styled.div`
    border-top: 1px solid #E8ECEE;
    border-bottom: 1px solid #E8ECEE;
    border-left: 1px solid #E8ECEE;
    height: 100%;
    display: flex;
    align-items: center;
    width: 20%;
`;