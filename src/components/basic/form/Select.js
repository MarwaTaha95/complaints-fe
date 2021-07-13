import React, {useState} from 'react';
import styled from "styled-components";

export const Select = (props) => {
    const [value, setValue] = useState(props.chosen);

    const onValueChange = (event) => {
        setValue(event.target.value);
        props.onChange(event);
    };

    return (
        <SelectDropDown
            onChange={onValueChange}
            value={value}
        >
            <option value="" disabled selected>Select ...</option>
            {props.options && props.options.map(option => (
                <option value={option.value}>{option.label}</option>

            ))}
        </SelectDropDown>
    )
};

const SelectDropDown = styled.select`
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    color: #0D0D31;
    width: 140px;
    height: 30px;
    padding: 0 18px 0 0;
    border: 1px solid #CBD4DB;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 0;
    margin-bottom: 60px;
`;