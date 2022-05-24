import { useState } from "react";
import styled from "styled-components";
import female from "../assets/female.png";
import male from "../assets/male.png";
import EditEmployeeModal from "./EditEmployeeModal";
const Card = styled.div`
  background: linear-gradient(
    rgba(256, 256, 256, 0.6),
    rgba(256, 256, 256, 0.2)
  );
  border-radius: 1rem;
  height: 20rem;
  width: 20rem;
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
const Button = styled.button`
  margin-top: 0.5rem;
  width: 3rem;
  height: 1.5rem;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
`;
export default function Employee({ data }) {
  const [hideEdit, setHideEdit] = useState(false);
  var d = new Date(data.DateOfBirth);

  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  var year = d.getFullYear();
  var newDate = date + "/" + month + "/" + year;

  return (
    <>
      <Card>
        <Wrapper>
          <Image src={data.Gender === "Female" ? female : male} alt="" />
          <InfoContainer>
            <span>Name: {data.Name}</span>
            <span>Date of Birth: {newDate}</span>
            <span>Salary: ${data.Salary}</span>
            <span>Gender: {data.Gender}</span>
          </InfoContainer>
          <ButtonContainer>
            <Button
              onClick={() => {
                setHideEdit((prev) => !prev);
              }}
            >
              Edit
            </Button>
            <Button>Delete</Button>
          </ButtonContainer>
        </Wrapper>
      </Card>
      {hideEdit ? <EditEmployeeModal data={data} setHideEdit={setHideEdit} /> : ""}
    </>
  );
}
