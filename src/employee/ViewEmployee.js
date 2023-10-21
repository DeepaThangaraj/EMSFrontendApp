import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuth } from 'react-oidc-context';
import Home from '../pages/Home';
import Image from "react-bootstrap/Image"; 

export default function ViewEmployee() {
    const [employee,setEmployee]= useState({
        employee_id:'',
        first_name:'',
        last_name:'',
        phone_number:'',
        office_extension :'',
        emailId:'',
        national_id:'',
        passport_number :'',
        address :'',
        dob :'',
        gender :'',
        profession :'',
        roles :'',
        responsiblities :'',
        department :'',
        reporting_manager :'',
        employment_type :'',
        joining_date :'',
        basic_salary :'',
        hra :'',
        over_time_pay :'',
        gross_salary :''
    })
   
    const auth=useAuth()
    const access_token=auth.user.access_token
    const config = {
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${access_token}` }
      };    
       
    const {employee_id} =useParams();
    useEffect(()=>{
        loadEmployee();
    },[])
    
    const loadEmployee=async() => {
       await axios.get(`http://localhost:8081/v1/employee-list/employee-by-id/${employee_id}`,config)
       .then((res)=> {setEmployee(res.data)}         
       )
       .catch(error => {
        // Handle the error
        if (error.response.status === 403) {
          // Redirect the user to the login page
          window.location.href = '/login';
        } else {
          // Show the user an error message
          alert(error.message);
        }
      });
       
    };

  return (
    <div className="container-fluid"  >
        <h2 className="text-center m-4"> Employee Details</h2>
          <div className="container">
    <div className="row">
        <div className="col-md-5">
            <div className="card">
              
                <div className="card-block">
                    <h4 className="card-title" style={{backgroundColor:"#34cbcb" }} >Contact Details</h4>
                               
                    <div style={{ display: "block", width:250, padding: 10 }}> 
     
      <Image 
        src= 
             "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded 
      /> 
      <h5>{employee.first_name} {employee.last_name}</h5>
      </div>
                    <ul class="list-group ">
                      <li class="list-group-item d-flex  align-items-center "><b>Phone Number     :</b> {employee.phone_number}  </li>
                      <li class="list-group-item  d-flex  align-items-center d-flex  align-items-center"><b>Email Id     : </b>{employee.emailId}  </li>                      
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title"  style={{backgroundColor:"#34cbcb" }}>Job Info</h4>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item  d-flex  align-items-center"><b>Office Extensio :</b> {employee.office_extension}  </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Department : </b>{employee.department}  </li>  
                      <li class="list-group-item  d-flex  align-items-center"><b>Profession :</b> {employee.profession}  </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Work Location: </b>Riyadh  </li>  
                      <li class="list-group-item  d-flex  align-items-center"><b>Reporting Manager :</b> {employee.reporting_manager}  </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Employment Type : </b>{employee.employment_type}  </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Roles </b>{employee.roles}  </li>  
                      <li class="list-group-item  d-flex  align-items-center"><b>Responsiblities:</b> {employee.responsiblities}  </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Joining Date : </b>{employee.joining_date}  </li>  
                     
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
               
                <div className="card-block">
                    <h4 className="card-title" style={{backgroundColor:"#34cbcb" }}>Personal Information</h4>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item  d-flex  align-items-center"><b>Date Of Birth :</b> {employee.dob}  </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Age : </b>35  </li> 

                      <li class="list-group-item  d-flex  align-items-center"><b>Address :</b> Abi Musa Al Ashari Street,Al Andulus,Riyadh  </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>National Id:</b> {employee.national_id}  </li>  
                      <li class="list-group-item  d-flex  align-items-center"><b>Passport No:</b> {employee.passport_number}  </li>               
                     
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title" style={{backgroundColor:"#34cbcb" }}>Educational Qualification</h4>
                    <ul class="list-group list-group-flush">
                      
                      <li class="list-group-item  d-flex  align-items-center"><b>Highest Education:</b> Master Degree  </li>                       
                      <li class="list-group-item  d-flex  align-items-center"><b>Skills:</b> Java Backend,Spring boot microservices  </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title" style={{backgroundColor:"#34cbcb" }}>Salary Information</h4>
                    <ul class="list-group list-group-flush">
                      
                      <li class="list-group-item  d-flex  align-items-center"><b>Basic Pay:</b> {employee.basic_salary}  </li>                       
                      <li class="list-group-item  d-flex  align-items-center"><b>HRA</b> {employee.hra} </li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Over Time Pay</b> {employee.over_time_pay}</li>
                      <li class="list-group-item  d-flex  align-items-center"><b>Gross Salary</b> {employee.gross_salary}</li>
                    </ul>
                </div>
            </div>
        </div>
        
        
        
    </div>
</div>
<Link className="btn btn-primary my-2" to={"/"}> Back To Home</Link>
    </div>
  )
}
