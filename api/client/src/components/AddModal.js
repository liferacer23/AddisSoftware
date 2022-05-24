import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  
  position: fixed;
  inset: 0;
  display:flex;
  justify-content:center;
  align-items:center;
  
`;
const ModalOverLay = styled.div`
  position: fixed;
  background-color: gray;
  opacity: 0.9;
  height: 100%;
  width: 100%;
  inset: 0;
`;
const EditContainer = styled.div`
  background-color: white;
  position: absolute;
  height: 18rem;
  width: 18rem;
  border-radius:1rem
`;
const Form = styled.form`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Input = styled.input`
border:none;
padding-left:1rem;
padding:0.5rem 0.5rem 0.5rem 0;
border-bottom: 1px solid gray;
`;

export default function EditModal({setHideAdd}) {
    

  return (
    <ModalContainer>
      <ModalOverLay
        onClick={(e) => {
          setHideAdd((prev) => !prev);
          e.stopPropagation();
        }}
      >
          </ModalOverLay>
        <EditContainer>
            
          <Form action="">
          <h4>Add a new Emloyee </h4>
            <Input type="Date" placeholder="Date" />
            <Input type="text" placeholder="Name" />
            <Input type="number" placeholder="Salary" />
            <Input type="text" placeholder="Gender"/>
          </Form>
        </EditContainer>
      
    </ModalContainer>
  );
}
