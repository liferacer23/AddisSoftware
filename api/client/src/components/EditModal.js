import React from "react";
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

export default function EditModal({ setHideEdit, data }) {
  var d = new Date(data.DateOfBirth);

  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var newDate = date + "/" + month + "/" + year;
  return (
    <ModalContainer>
      <ModalOverLay
        onClick={(e) => {
          setHideEdit((prev) => !prev);
          e.stopPropagation();
        }}
      >
          </ModalOverLay>
        <EditContainer>
            
          <Form action="">
          <h4>Editing: {data.Name} </h4>
            <Input type="Date" placeholder={newDate} />
            <Input type="text" placeholder={data.Name} />
            <Input type="number" placeholder={data.Salary} />
            <Input type="text" placeholder={data.Gender} />
          </Form>
        </EditContainer>
      
    </ModalContainer>
  );
}
