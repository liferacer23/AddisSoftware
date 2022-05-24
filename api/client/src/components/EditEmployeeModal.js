import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getEmployee } from "../redux/ducks/employee";
const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 21rem;
  width: 21rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: none;
  padding-left: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-bottom: 1px solid gray;
  outline: none;
`;
const InputContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
const SubmitButton = styled.button`
  margin-top: 0.5rem;
  width: 4rem;
  height: 2rem;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #4287f5;
  color: white;
  border-radius: 0.5rem;
`;
const CloseButton = styled.button`
  margin-top: 0.5rem;
  width: 4rem;
  height: 2rem;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #f54242;
  color: white;
  border-radius: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export default function EditEmployeeModal({ setHideEdit, data }) {
  const dispatch = useDispatch();
  const [Gender, setGender] = useState(data.Gender);
  const [DateOfBirth, setDateOfBirth] = useState(data.DateOfBirth);
  const [Name, setName] = useState(data.Name);
  const [Salary, setSalary] = useState(data.Salary);

  /*   var d = new Date(DateOfBirth);

  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var newDate = date + "/" + month + "/" + year; */

  const handleEditEmployee = async (e) => {
    e.preventDefault();
    const employee = {
      Name: Name,
      DateOfBirth: DateOfBirth,
      Salary: Salary,
      Gender: Gender,
    };

    try {
      await axios.put(`/employee/${data._id}`, employee);
    } catch (err) {
      console.log(err);
    }
    dispatch(getEmployee());
    setHideEdit((prev) => !prev);
  };

  return (
    <ModalContainer>
      <ModalOverLay
        onClick={(e) => {
          setHideEdit((prev) => !prev);
          e.stopPropagation();
        }}
      ></ModalOverLay>
      <EditContainer>
        <Form
          onSubmit={(e) => {
            handleEditEmployee(e);
          }}
        >
          <Header>
            <h4>Editing {data.Name} </h4>
            <CloseButton
              onClick={() => {
                setHideEdit((prev) => !prev);
              }}
            >
              Close
            </CloseButton>
          </Header>
          <InputContainer>
            <label htmlFor="name">DOB :</label>
            <Input
              required
              onChange={(e) => setDateOfBirth(e.target.value)}
              id="Date"
              type="Date"
              placeholder="MM/DD/YYYY"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="name">Name :</label>
            <Input
              required
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={data.Name}
              id="name"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="salary">Salary :</label>
            <Input
              required
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              type="number"
              placeholder={data.Salary}
              id="salary"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="gender">Gender :</label>
            <Input
              required
              onChange={(e) => {
                setGender(e.target.value);
              }}
              name="gender"
              type="radio"
              value="Male"
              id="male"
            />
            <label htmlFor="male">Male</label>
            <Input
              required
              onChange={(e) => {
                setGender(e.target.value);
              }}
              name="gender"
              type="radio"
              value="Female"
              id="female"
            />
            <label htmlFor="female">Female</label>
          </InputContainer>
          <ButtonContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
          </ButtonContainer>
        </Form>
      </EditContainer>
    </ModalContainer>
  );
}
