import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "./redux/ducks/employee";
import styled from "styled-components";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EmployeesContainer from "./components/EmployeesContainer";

const Container = styled.div`
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  width: 100vw;
  height: 95vh;
  padding: 1rem;
  inset: 0;
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
  border: none;
  background-color: green;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
`;
const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  @media screen and (max-width: 988px) {
    
    flex-direction: column;
  }
`;
const FilterContainer = styled.div`
  width: 20%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;

    
`;
const SortContainer = styled.div`
  width: 18%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
`;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee());
  }, []);
  const employees = useSelector((state) => state.employees.employees);
  const [searchItem, setSearchItem] = useState("");
  const [hideAdd, setHideAdd] = useState(false);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
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
      <HeaderContainer>
        <Button
          onClick={() => {
            setHideAdd((prev) => !prev);
          }}
        >
          Add New Employee
        </Button>
        <FilterContainer>
          <h4>Filter:</h4>
          <input
            onChange={(e) => {
              setFilter("");
            }}
            value="female"
            type="radio"
            name="gender"
            id="female"
          />
          <label htmlFor="female">All</label>
          <input
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            value="male"
            type="radio"
            name="gender"
            id="male"
          />
          <label htmlFor="male">Males</label>
          <input
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            value="female"
            type="radio"
            name="gender"
            id="female"
          />
          <label htmlFor="female">Females</label>
    
        </FilterContainer>
        <SortContainer>
          <h4>Sort:</h4>
          <input onChange={(e)=>{setSort(e.target.value)}} value="Salary" type="radio" name="gender" id="male" />
          <label htmlFor="male">Salary</label>
          <input onChange={(e)=>{setSort(e.target.value)}} value ="Name" type="radio" name="gender" id="female" />
          <label htmlFor="female">Name</label>
        </SortContainer>
      </HeaderContainer>
    
       <EmployeesContainer searchItem={searchItem} filter={filter} employees={sort ==="Salary"?employees.sort((a,b)=>(a.Salary> b.Salary ? 1: -1)):sort ==="Name"?employees.sort((a,b)=>(a.Name> b.Name ? 1: -1)):employees}/>
     
      {hideAdd ? <AddEmployeeModal setHideAdd={setHideAdd} /> : ""}
    </Container>
  );
}

export default App;
