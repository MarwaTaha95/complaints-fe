import React from "react";
import styled from "styled-components";
import {Text} from "../Texts";
import {CONTAINERS, TEXT_COLOR, TEXT_SIZE} from "../Types";
import {Container} from "../../containers/Containers";

const UnStyledInput = (props) => {
    const {label, onBlur, onChange, onFocus, extraElement, type} = props;
    return (
        <>
            <Text
                size={TEXT_SIZE.DISPLAY1}
                color={TEXT_COLOR.SECONDARY}
                label={label}
                margin={'0 0 6px 0'}
            />
            <DefaultInput
                autocomplete={props.autocomplete || "off"}
                fullSize
                onBlur={(event) => onBlur(event)}
                onChange={(event) => onChange(event)}
                onFocus={(event) => onFocus(event)}
                {...props}
            />
            {extraElement && extraElement}
        </>
    )
};

const DefaultInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #CBD4DB;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    color: #0D0D31;
`;

const Input = styled(UnStyledInput)`
    border-radius: 5px;
    width: ${props => props.width ? props.width : '350px;'}
    height: 48px;
    padding: 20px;

    &:active, &:focus{  
        border: 1px solid #36367F;  
    }
    
    ${props => props.isMobile ? ('width: 300px;') : null}
    
    ${props => props.disabled ? ('background: #ECEDED;') : null}
}
`;

const Checkbox = styled(UnStyledInput)`
    width: 15px;
    height: 15px;
    margin-right: 10px;

    &:active, &:focus{  
        border: 1px solid #36367F;  
    }
}
`;

const RadioButton = styled(UnStyledInput)`
   margin-right: 10px;
}
`;

const Margin = styled.div`
    margin: ${props => props.margin ? props.margin : '0px'};
`;

export const InputField = (props) => {
    const {type} = props;

    const handleBlur = (event) => {
        if (props.blurAction) {
            props.blurAction(event);
        }
    };

    const handleFocus = (event) => {
        if (props.focusAction) {
            props.focusAction(event);
        }
    };

    const handleChange = (event) => {
        if (props.changeAction) {
            props.changeAction(event);
        }
    };

    const renderCheckBox = (props) => (
        <Container
            type={CONTAINERS.FLEX}
            styles={{justifyContent: 'none'}}
        >
            <Checkbox
                autocomplete={props.autocomplete || "on"}
                type={type}
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                {...props}
            />
        </Container>
    );

    const renderDefaultInput = (props) => (
        <Input
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            type={type}
            {...props}
        />
    );

    const renderRadioInput = (props) => {
        return (
            <>
                <Text
                    size={TEXT_SIZE.DISPLAY1}
                    color={TEXT_COLOR.SECONDARY}
                    label={props.label}
                    margin={'0 0 6px 0'}
                />
                <Container
                    type={CONTAINERS.FLEX}
                    styles={{justifyContent: 'flex-start'}}
                >
                    {props.options && props.options.map(op =>
                        (
                            <Container
                                type={CONTAINERS.FLEX}
                                styles={{justifyContent: 'flex-start', margin: '0 55px 0 0;', width: 'auto'}}
                            >
                                <RadioButton
                                    onBlur={handleBlur}
                                    onFocus={handleFocus}
                                    onChange={handleChange}
                                    type={type}
                                    extraElement={op.extraElement}
                                    value={op.value}
                                    name={op.name}
                                />
                            </Container>
                        )
                    )}

                </Container>
            </>
        );
    };


    switch (type) {
        case 'checkbox':
            return (
                <Margin margin={'10px 0 10px 0'}>
                    {renderCheckBox(props)}
                </Margin>
            );
        case 'radio':
            return (
                <Margin margin={'15px 0 15px 0'}>
                    {renderRadioInput(props)}
                </Margin>
            );
        case 'textarea':
            return (
                <Margin margin={'15px 0 15px 0'}>
                    {renderDefaultInput(props)}
                </Margin>
            );
        default:
            return (
                <Margin margin={'15px 0 15px 0'}>
                    {renderDefaultInput(props)}
                </Margin>
            );
    }
};
