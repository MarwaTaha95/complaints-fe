import React from 'react';
import styled from "styled-components";
import {Complaint} from "./Complaint";

export const ComplaintsList = (props) => {
  return (
      props.complains && props.complains.map(c => (
          <Complaint key={c.id} item={c} isAdmin={props.isAdmin} save={props.update}/>
      ))
  )
};