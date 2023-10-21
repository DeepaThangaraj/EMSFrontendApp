import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from 'react-router-dom'
import AuthBar from '../components/AuthBar'


export default function Navbar() {

  
  return (
    <div>
        <nav class="navbar navbar-light" style={{backgroundColor:"#34cbcb" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color:"white"}}>Cerebra Employee Management Portal</a>            
            <AuthBar/> 
          </div>
         
        </nav>
    </div>
  )
}
