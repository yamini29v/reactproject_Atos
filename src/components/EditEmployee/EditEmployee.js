import React, {useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import {v1 as uuid} from "uuid"; 
import Employee from '../../Employee';
import { Link, useNavigate } from 'react-router-dom';
const EditEmployee = () => {
    
const[name,setName] = useState('');
const[salary,setSalary] = useState('');
const[gender,setGender]=useState('')
const[id,setId] = useState('');
const[dob,setDOB] = useState('');
const[department,setDepartment] = useState('');

useEffect(()=>{
    setName(localStorage.getItem('Name'));
    setGender(localStorage.getItem('Gender'))
    setSalary(localStorage.getItem('Salary'))
    setId(localStorage.getItem('id'))
    setDOB(localStorage.getItem('DOB'))
    setDepartment(localStorage.getItem('Department'))
})
let history = useNavigate();

var index=Employee.map(function(e)
{
    return e.id
}).indexOf(id);

const handleSubmit=(e)=>{
    e.preventDefault();
    let a = Employee[index]
    a.Name = name;
    a.Gender=gender
    a.Salary = salary;
    a.DOB = dob;
    a.Department = department
    history('/employe')
}
const changeName=(e)=>{
    localStorage.setItem("Name",e.target.value)
    setName(localStorage.getItem("Name"))
}
const changeGender=(e)=>{
    localStorage.setItem("Gender",e.target.value)
    setGender(localStorage.getItem("Gender"))
}
const changeSalary=(e)=>{
    localStorage.setItem("Salary",e.target.value)
    setSalary(localStorage.getItem("Salary"))
}
const changeDOB=(e)=>{
    localStorage.setItem("DOB",e.target.value)
    setDOB(localStorage.getItem("DOB"))
}
const changeDepartment=(e)=>{
    localStorage.setItem("Department",e.target.value)
    setDepartment(localStorage.getItem("Department"))
}

const isRadio=(val)=>{
    if(val==gender){
        return true
    }
    return false
}


  return (<>
{/* <Form>
    <Form.Group>
    <Form.Control type='text' placeholder='Enter the name' defaultValue="" value={name} required onChange={(e)=> setName(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the salary' defaultValue="" value={salary} required onChange={(e)=> setSalary(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the Dob' defaultValue="" value={dob} required onChange={(e)=> setDOB(e.target.value)}></Form.Control>
    <Form.Control type='text' placeholder='Enter the Department' defaultValue="" value={department} required onChange={(e)=> setDepartment(e.target.value)}></Form.Control>


    </Form.Group>
    <Button onClick={(e)=>handleSubmit(e)} type='submit' >Update</Button>
</Form> */}

<div>
    <h1 className='edit-heading'>Edit Employee Details</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form-con'>
        <div className='form-div'>
        <label>Name :</label>
        <input defaultValue={name} onChange={changeName} required className='form-control'></input>
        </div>
        <div className='form-div'>
        <label>Gender :</label>
        {/* <input defaultValue={name} onChange={changeGender} required className='form-control'></input> */}
        <input value="Male" required type="radio" className='radio-btn' checked={isRadio("Male")} onChange={changeGender} name="gender" />Male
        <input value="Female" required type="radio" className='radio-btn' checked={isRadio("Female")} onChange={changeGender} name="gender"/>Female
        </div>
        <div className='form-div'>
        <label>Salary :</label>
        <input defaultValue={salary} onChange={changeSalary} required type="number" className='form-control'></input>
        </div>
        <div className='form-div'>
        <label>DOB :</label>
        <input defaultValue={dob} onChange={changeDOB} type="date" required className='form-control'></input>
        </div>
        <div className='form-div'>
        <label for="department">Department :</label>
        <select name="department"  value={department} onChange={changeDepartment} required className='form-select'>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
            <option value="Accounts">Accounts</option>
        </select>
        {/* <input defaultValue={department} onChange={changeDepartment} required className='form-control'></input> */}
        </div>
    <button type="submit" className='btn btn-primary'>Edit</button>
    </div>
    </form>
</div>
    </>
  )
}

export default EditEmployee;
