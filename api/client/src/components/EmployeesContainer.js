import React from "react";
import Employee from "./Employee";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 0rem auto;
  width: 95%;
  height: 85%;
`;
export default function EmployeesContainer({ employees, filter, searchItem }) {
  return (
    <Wrapper>
      {employees
        ? employees
            .filter((item) => {
              if (searchItem === "") {
                if (filter === "") {
                  return item;
                } else if (filter === item.Gender.toLowerCase()) {
                  return item;
                }
              } else if (searchItem !== "" && filter === "") {
                if (
                  item.Name.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return item;
                }
              } else if (searchItem !== "" && filter !== "") {
                if (
                  item.Name.toLowerCase().includes(searchItem.toLowerCase()) &&
                  filter == item.Gender.toLowerCase()
                ) {
                  return item;
                }
              }
            })
            .map((data, index) => {
              return (
               
                  <Employee key={index} data={data} />
              
              );
            })
        : "Loading.."}
    </Wrapper>
  );
}
