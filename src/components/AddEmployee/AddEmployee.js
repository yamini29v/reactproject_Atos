import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import Employee from '../../Employee';
import { Link, useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    
const[name,setName] = useState('');
const[gender,setGender]=useState('')
const[salary,setSalary] = useState('');
const[dob,setDOB] = useState('');
const[department,setDepartment] = useState('Sales');
let history = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    let uuids=Employee.length+1;
    Employee.push({id:uuids,Name:name,Gender:gender,Salary:salary,DOB:dob,Department:department})
    alert("Employee added Successfully!")
    history('/employe')
}

  return (<>

<div>
  <form onSubmit={(e) => handleSubmit(e)}>
    <div className='form-con'>
  
  <div className='form-div'>
  <label>Name :</label>
  <input required placeholder='Enter the name' onChange={(e)=> setName(e.target.value) } className='form-control'></input>
  </div>
    
  <div className='form-div radio-div'>
  <label>Gender :</label>
  <input required  type="radio" onChange={(e)=> setGender(e.target.value) } className='radio-btn' value="Male" name="gender"/>Male
  <input required  type="radio" onChange={(e)=> setGender(e.target.value) } className='radio-btn' value="Female" name="gender"/>Female
  </div>

  <div className='form-div'>
  <label>Salary : </label>
  <input required placeholder='Enter the salary' type="number" onChange={(e)=> setSalary(e.target.value)} className='form-control' ></input>
  </div>

  <div  className='form-div'>
  <label>DOB :</label>
  <input required placeholder='Enter the Date of Birth' onChange={(e)=> setDOB(e.target.value)} type="date" className='form-control'></input>
  </div>
    <div  className='form-div'>
  <label for="department">Department : </label>
    <select name="department" onChange={(e)=> setDepartment(e.target.value)} className='form-select' >
      <option value="Sales">
        Sales
      </option>
      <option value="HR">HR</option>
      <option value="Accounts">Accounts</option>
    </select>
  {/* <input required placeholder='Enter the Department' onChange={(e)=> setDepartment(e.target.value)} className='form-control'></input> */}
  </div>
  <button type="submit" className="btn btn-primary">Submit</button> 
  </div>
  </form>
</div>

    
    </>
  )
}

export default AddEmployee;
