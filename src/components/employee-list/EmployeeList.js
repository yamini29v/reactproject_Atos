import React from 'react';
 import './EmployeeList.css';
 import { Link, useNavigate } from 'react-router-dom';
import Employee from '../../Employee';

function EmployeeList(){

let history = useNavigate();
  
  const handleDelete=(id)=>{
    var index=Employee.map(function(e)
    {
        return e.id
    }).indexOf(id);
    Employee.splice(index,1);
    alert("Removed Successfully")
    history('/employe');
}

const handleEdit=(id,name,gender,salary,dob,department)=>{
    localStorage.setItem('id',id)
    localStorage.setItem('Name',name)
    localStorage.setItem('Salary',salary)
    localStorage.setItem('DOB',dob)
    localStorage.setItem('Gender',gender)
    localStorage.setItem('Department',department)
    history('/employe');
}

  
    return (
      <div>

<table>
  <tr>
    <th>No.</th>
    <th>ID</th>
    <th>NAME</th>
    <th>GENDER</th>
    <th>Salary</th>
    <th>DOB</th>
    <th>Department</th>
    <th>Actions</th>
  </tr>
  
  {Employee
          ? Employee.map((item, i) => (
            <>
              <tr>
                <td>  {i+1} {' '}</td>
                <td>  {item.id} {' '}</td>
                <td>  {item.Name} {' '}</td>
                <td>{item.Gender}{' '}</td>
                <td>  {item.Salary} {' '}</td>
                <td>  {item.DOB} {' '}</td>
                <td>  {item.Department} {' '}</td>
               
                <td>
                    <Link to={'/editEmployee'}>
                 <button  className='btn btn-primary' onClick={()=>handleEdit(item.id,item.Name,item.Gender,item.Salary,item.DOB,item.Department)}>Edit</button>
                 </Link>
                 
                &nbsp;
                 <button  onClick={()=>handleDelete(item.id)} className="btn btn-danger">Delete</button>
                 
                </td>

                </tr>
            </>
           
            ))
          : null}


</table>
<div>
<Link to={'/AddEmployee'}>
                 <button type =" button"  class="btn btn-primary">Add</button >
                 </Link>

                 </div>
      </div>
    );
  
}

export default EmployeeList;
