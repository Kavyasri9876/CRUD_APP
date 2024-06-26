import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Employee = () => {
    // const employee = {
    //     name: "Kavya",
    //     gender: "female",
    //     salary: "2000000"
    // }

    const [employees,setEmployee] = useState([]);

   useEffect (
    () => {
      axios.get("http://localhost:9000")
      .then(result => {
        // console.log(result.data)
        setEmployee(result.data)
      }
      )
    }
   )

   const handleDelete = (id) => {
    axios.delete("http://localhost:9000/deleteEmployee/"+id)
    .then (result => {console.log(result)
      window.location.reload()
    })
    .catch(err => console.log(err));
   }

  return (
    <div className="d-flex-vh-100 p-3">
      {/* <h1>Employees List</h1> */}
      <div>
      <Link to ={'/create'}className="btn btn-success">Add +</Link>
      <table className="table">
        <thead>
            <tr>
               <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {employees.length > 0 ? (
              employees.map(employee => (
            <tr>
              <td>{employee.idNum}</td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.salary}</td>
                <td><Link to ={`/update/${employee._id}`} className="btn btn-info mx-1">Update</Link>
                {/* <Link to ={'/'} className="btn btn-info">Delete</Link> */}
                <button className="btn btn-danger mx-1" onClick= {() => handleDelete(employee._id)}>Delete</button>
                </td>
            </tr> 
             )))
              : (
                <tr>
                  <td colSpan="5">No employees found</td>
                </tr>
             ) }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Employee
