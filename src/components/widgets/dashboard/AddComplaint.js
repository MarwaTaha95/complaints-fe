import React, {useState} from "react";
import styled from "styled-components";
import {Container} from "../../containers/Containers";
import {BUTTONS, CONTAINERS, TEXT_COLOR, TEXT_SIZE} from "../../basic/Types";
import {Button} from "../../basic/form/Buttons";
import Backdrop from "../../basic/backdrop/Backdrop";
import {Text} from "../../basic/Texts";
import {InputField} from "../../basic/form/Input";
import TextArea from "../../basic/form/TextArea";
import {Select} from "../../basic/form/Select";
import {PriorityList} from "../../PriorityList";


const Box = styled.div`
    width: 750px;
    z-index: 500;
    position: fixed;
    background-color: white;
    top: 25%;
    left: 50%;
    margin-top: -100px; /* Negative half of height. */
    margin-left: -375px;
    box-shadow: 0px 0px 10px 5px rgba(196, 196, 196, 0.7);
    border-radius: 5px;    padding: 16px;
    padding: 40px 55px 40px 55px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    transform: translateY(${props => !props.show ? '-100vh' : 0});
    opacity: ${props => props.show ? '1' : '0'};
    
`;

const styles = {
    justifyContent: 'space-between',
    height: 'fit-content',
    width: '280px'
};

const AddComplaint = (props) => {
    if (!props.show) return null;

    return (
        <>
            <Box show={props.show}>
                <Text size={TEXT_SIZE.HEADER} color={TEXT_COLOR.PRIMARY} label={'New Complaint'} margin={'0 0 20px 0'}/>
                <AddForm {...props}/>
            </Box>
            <Backdrop show={props.show} cancel={props.cancel}/>
        </>
    );
};

const AddForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [client, setClient] = useState('');

    const onTitleChange = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    const onDescriptionChange = (event) => {
        console.log(event.target.value);
        setDescription(event.target.value);
    };

    const onPriorityChange = (event) => {
        console.log(event.target.value);
        setPriority(event.target.value);
    };

    const onClientChange = (event) => {
        console.log(event.target.value);
        setClient(event.target.value);
    };

    const saveComplaint = () => {
        const body = {
            title: title,
            description: description,
            priority: priority,
            client: client,
        };

        props.save(body);
    };

    return (
        <>
            <InputField
                type={'text'}
                label={'Title'}
                changeAction={onTitleChange}
                width={"100%;"}
            />
            <TextArea onChange={onDescriptionChange}/>
            <InputField
                type={'radio'}
                options={PriorityList}
                label={'Priority'}
                changeAction={onPriorityChange}
            />
            <Text size={TEXT_SIZE.DISPLAY1} color={TEXT_COLOR.SECONDARY} label={'Client'} margin={'25px 0 6px 0'}/>
            <Select onChange={onClientChange}/>
            <Container type={CONTAINERS.FLEX} styles={styles}>
                <Button
                    item={{
                        type: BUTTONS.PRIMARY,
                        label: 'Submit',
                        onClick: saveComplaint,

                    }}
                    width='135px;'
                />
                <Button
                    item={{
                        type: BUTTONS.SOCIAL,
                        label: 'Cancel',
                        onClick: props.cancel,
                    }}
                    width='135px;'
                />
            </Container>
        </>
    )
};

export default AddComplaint;