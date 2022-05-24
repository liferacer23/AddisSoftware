import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "./redux/ducks/employee";
import Employee from "./components/Employee";
import styled from "styled-components";
import AddEmployeeModal from "./components/AddEmployeeModal";
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 0rem auto;
  width: 90%;
  height: 85%;
  overflow-y: scroll;

`;
const Container = styled.div`
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  width: 100vw;
  height: 95%;
  position: fixed;
  padding: 1rem;
  overflow: auto;
`;
const Search = styled.input`
  width: 30%;
  height: 70%;
  padding-left: 1rem;
  border: none;
  font-size: 1.2rem;
  outline: none;
  border-bottom: 2px solid gray;
  background-color: transparent;
  color: white;
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 10rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border:none;
  background-color: green;
  border-radius:0.5rem;
  cursor: pointer;
  color: white;
`;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee());
  }, []);
  const employees = useSelector((state) => state.employees.employees);
  const [searchItem, setSearchItem] = useState("");
  const [hideAdd, setHideAdd] = useState(false);
  //console.log(employees);
  return (
    <Container>
      <SearchContainer>
        <Search
          placeholder="Search.."
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
      </SearchContainer>
      <Button onClick={()=>{setHideAdd(prev=>!prev)}}>Add New Employee</Button>
      <Wrapper>
        {employees
          ? employees
              .filter((item) => {
                if (searchItem === "") {
                  return item;
                } else if (
                  searchItem !== "" &&
                  item.Name.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return item;
                } else if (
                  searchItem !== "" &&
                  !item.Name.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return null;
                }
              })
              .map((data, index) => {
                if (data.length === 0) {
                  return <h1>No Such Data</h1>;
                } else {
                  return (
                    <div key={index}>
                      <Employee data={data} />
                    </div>
                  );
                }
              })
          : "Loading.."}
      </Wrapper>
      {hideAdd ? <AddEmployeeModal setHideAdd={setHideAdd} /> : ""}
    </Container>
  );
}

export default App;
