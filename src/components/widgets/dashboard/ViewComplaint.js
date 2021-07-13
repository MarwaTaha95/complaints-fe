import React from "react";
import styled from "styled-components";
import {Container} from "../../containers/Containers";
import {BUTTONS, CONTAINERS, TEXT_COLOR, TEXT_SIZE} from "../../basic/Types";
import {Button} from "../../basic/form/Buttons";
import Backdrop from "../../basic/backdrop/Backdrop";
import {Text} from "../../basic/Texts";


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
    flow: 'column',
    margin: '0 0 20px 0',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%;'
};

const ViewComplaint = (props) => {
    if (!props.show) return null;

    return (
        <>
            <Box show={props.show}>
                <Text size={TEXT_SIZE.HEADER} color={TEXT_COLOR.PRIMARY} label={'View Complaint'}
                      margin={'0 0 20px 0'}/>
                <ViewForm {...props}/>
                <Button
                    item={{
                        type: BUTTONS.SOCIAL,
                        label: 'Cancel',
                        onClick: props.cancel,
                    }}
                    width='135px;'
                />
            </Box>
            <Backdrop show={props.show} cancel={props.cancel}/>
        </>
    );
};

const ViewForm = (props) => {
    return (
        props.item && Object.keys(props.item).map(function (key, index) {
            return (
                <Container type={CONTAINERS.FLEX} styles={styles}>
                    <Text size={TEXT_SIZE.DISPLAY1} color={TEXT_COLOR.SECONDARY} label={key}
                          margin={'0 0 7px 0'}/>

                    <Text size={TEXT_SIZE.DISPLAY3} color={TEXT_COLOR.SECONDARY} label={props.item[key]}
                          margin={'0 0 20px 0'}/>

                </Container>
            )
        }));

};

export default ViewComplaint;