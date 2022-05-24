import { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addEmployee, getEmployee } from "../redux/ducks/employee";
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
const AddContainer = styled.div`
  background-color: white;
  position: absolute;
  height: 20rem;
  width: 20rem;
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
const ButtonContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
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

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export default function AddEmployeeModal({ setHideAdd }) {
  const dispatch = useDispatch();
  const Name = useRef();
  const DateOfBirth = useRef();
  const Salary = useRef();
  const [gender, setGender] = useState();

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    const employee = {
      Name: Name.current.value,
      DateOfBirth: DateOfBirth.current.value,
      Salary: Salary.current.value,
      Gender: gender,
    };

    try {
      await axios.post("/employee", employee);
    } catch (err) {
      console.log(err);
    } 
    //dispatch(addEmployee(employee));
    dispatch(getEmployee());
    setHideAdd((prev) => !prev);
  };

  return (
    <ModalContainer>
      <ModalOverLay
        onClick={(e) => {
          setHideAdd((prev) => !prev);
          e.stopPropagation();
        }}
      ></ModalOverLay>
      <AddContainer>
        <Form
          onSubmit={(e) => {
            handleAddEmployee(e);
          }}
        >
          <Header>
            <h4>Add Employee </h4>
            <CloseButton
              onClick={() => {
                setHideAdd((prev) => !prev);
              }}
            >
              Close
            </CloseButton>
          </Header>
          <InputContainer>
            <label htmlFor="name">DOB :</label>
            <Input
              required
              ref={DateOfBirth}
              id="Date"
              type="Date"
              placeholder="Date"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="name">Name :</label>
            <Input
              required
              ref={Name}
              type="text"
              placeholder="Name"
              id="name"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="salary">Salary :</label>
            <Input
              required
              ref={Salary}
              type="number"
              placeholder="Salary"
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
            <SubmitButton>Submit</SubmitButton>
          </ButtonContainer>
        </Form>
      </AddContainer>
    </ModalContainer>
  );
}
