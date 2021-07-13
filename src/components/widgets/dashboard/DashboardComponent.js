import React, {useState} from 'react';
import {Navbar} from "./Navbar";
import {Separator} from "../../basic/form/Separator";
import {CONTAINERS} from "../../basic/Types";
import {Container} from "../../containers/Containers";
import {EmptyState} from "../../basic/form/EmptyState";
import styled from "styled-components";
import addButton from "../../../assets/images/addButton.svg";
import AddComplaint from "./AddComplaint";
import {ComplaintsList} from "./ComplaintsList";

export const DashboardComponent = (props) => {
    const [displayCreatePopup, setDisplayCreatePopup] = useState(false);

    const toggleCreatePopup = () => {
        setDisplayCreatePopup(previousState => !previousState)
    };

    const saveNewComplaint = (item) => {
        toggleCreatePopup();
        props.create(item)
    };

    return (
        <>
            <Navbar/>
            <Container
                type={CONTAINERS.FLEX}
                styles={{
                    margin: '0 220px 35px 220px',
                    justifyContent: 'center',
                    width: 'auto',
                    flow: 'column'
                }}
            >
                <Separator text={props.header}/>
                {props.complaints && props.complaints.length === 0 ? <EmptyState/> : <ComplaintsList complains={props.complaints} isAdmin={props.isAdmin} update={props.update}/>}
                {!props.isAdmin ? <Add src={addButton} onClick={toggleCreatePopup}/> : null}
            </Container>
            <AddComplaint show={displayCreatePopup} cancel={toggleCreatePopup} save={saveNewComplaint}/>
        </>
    )
};

const Add = styled.img`
    width: 60px;
    margin-top: 60px;
    
    &:hover{
        width: 65px;
    }
`;