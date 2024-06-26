import axios from 'axios'
import React, { useState,useEffect } from 'react'
import {useNavigate, useParams} from 'react-router'

const UpdateEmployee = () => {
    const {id} = useParams() 
    // id is what we are receiving from params i.e; _id
    const [idNum,setId] = useState("")
    const [name,setName] = useState("")
    const [gender,setGender] = useState("")
    const [salary,setSalary] = useState("")
    const navigate = useNavigate()
    // console.log(id);

    useEffect(
        () => {
            axios.get("http://localhost:9000/getEmployee/"+id)
            .then(
                (result) => {
                    setId(result.data.idNum);
                    setName(result.data.name);
                    setGender(result.data.gender);
                    setSalary(result.data.salary);
                    // console.log(result);
                }
            )
            .catch(err => console.log(err))
            
        },
    {})

    const handleSubmit = (e) => {
        e.preventDefault()
    axios.put("http://localhost:9000/updateEmployee/"+id,{idNum,name,gender,salary})
    .then(result => console.log(result),
    navigate("/")
  )
    .catch(err => console.log(err))
    }
  return (
    <>
        <h3 className="d-flex p-3 justify-content-center">Update Employee </h3>
        <div className="d-flex vh-100  px-5 py-1">    
        <form onSubmit = {handleSubmit}>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">Employee Id</label>
                <input type="text" className="form-control" id="id" placeholder="enter your Id"
                value={idNum}
                onChange = {(e) => setId(e.target.value)}/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="employeename" className="form-label">Employee Name</label>
                <input type="text" className="form-control" id="employeename" placeholder="enter your name"
                value={name}
                onChange ={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    id="male"
                    checked = {gender === "M"}
                    onClick = {() => setGender("M")}/>
                <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    id="male"
                    checked = {gender === "F"}
                    onClick = {()=> setGender("F")}/>
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                {/* <label for="gender" class="form-label">Gender</label>
                <input type="text" class="form-control" id="gender" placeholder="enter your gender"></input> */}
            </div>
            <div className="mb-3">
                <label htmlFor="employeename" className="form-label">Salary</label>
                <input type="text" className="form-control" id="salary" placeholder="enter your salary"
                value={salary}
                onChange = {(e)=> setSalary(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-info">Save</button>
        </form>
        </div>
    </>
  )
}

export default UpdateEmployee

