import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import { useAuth } from 'react-oidc-context';

export default function Home() {

    const [employees,setEmployee]=useState([]);
    const auth=useAuth()
    const access_token=auth.user.access_token   
      
    
    
    useEffect(()=>{
        loadEmployees();
    },[]);  
    const config = {
      headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${access_token}` }
    };
  
    const loadEmployees=async()=>{    
       
      
        const result=await axios.get("http://localhost:8081/v1/employee-list"       
         ,config ) ;
        setEmployee(result.data);
    };

  return (

    <div className='container'>
        <div className='py-4'>        
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Position</th>
      <th scope="col">Department</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee,index)=>(
        <tr>
           <th scope="row" key={index}>{index+1}</th>
           <td>{employee.employee_id}</td>
           <td>{employee.first_name}</td>
           <td>{employee.last_name}</td>
           <td>{employee.profession}</td>
           <td>{employee.department}</td>
           <td>
            <Link className="btn btn-info" style={{backgroundColor:"#34cbcb" }} to={`/viewemployee/${employee.employee_id}`}>view</Link>
           </td>
        </tr>

        ))
    }
    </tbody>
</table>
        </div>

    </div>
  );
}
