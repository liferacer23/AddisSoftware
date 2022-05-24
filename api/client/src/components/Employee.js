import { useState } from "react";
import styled from "styled-components";
import female from "../assets/female.png";
import male from "../assets/male.png";
import EditEmployeeModal from "./EditEmployeeModal";
import { useDispatch } from "react-redux";
import { getEmployee } from "../redux/ducks/employee";
import axios from "axios";
const Card = styled.div`
  background: linear-gradient(
    rgba(256, 256, 256, 0.6),
    rgba(256, 256, 256, 0.2)
  );
  border-radius: 1rem;
  height: 22rem;
  width: 22rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
`;
const Image = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 1rem auto;
  border-radius: 50%;
`;
const InfoContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: black;
`;
const EditButton = styled.button`
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
const DeleteButton = styled.button`
  margin-top: 0.5rem;
  width: 4rem;
  height: 2rem;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: #f54242;
  color: white;
  border-radius: 0.5rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-around;
`;
export default function Employee({ data }) {
  const dispatch = useDispatch();
  const [hideEdit, setHideEdit] = useState(false);
  var d = new Date(data.DateOfBirth);

  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var newDate = date + "/" + month + "/" + year;
  const handleDeleteEmployee = async () => {
    try {
      await axios.delete(`/employee/${data._id}`);
    } catch (err) {
      console.log(err);
    }
    dispatch(getEmployee());
  };
  return (
    <>
      <Card
      >
        <Wrapper>
          <Image src={data.Gender === "Female" ? female : male} alt="" />
          <InfoContainer>
            <span>Name: {data.Name}</span>
            <span>Date of Birth: {newDate}</span>
            <span>Salary: ${data.Salary}</span>
            <span>Gender: {data.Gender}</span>
          </InfoContainer>
          <ButtonContainer>
            <EditButton
              onClick={() => {
                setHideEdit((prev) => !prev);
              }}
            >
              Edit
            </EditButton>
            <DeleteButton
              onClick={() => {
                handleDeleteEmployee();
              }}
            >
              Delete
            </DeleteButton>
          </ButtonContainer>
        </Wrapper>
      </Card>
      {hideEdit ? (
        <EditEmployeeModal data={data} setHideEdit={setHideEdit} />
      ) : (
        ""
      )}
    </>
  );
}
