import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorHandle() {
  return (
    <div className='container'>
        <div className='py-4'>  
             <div>you dont have access to view the detalis !!!!</div>
            <Link className="btn btn-primary my-2" to={"/"}> Back To Home</Link>
    </div>
    </div>
  )
}
