import {React,useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

const CreateEmployee = () => {
  const [idNum,setId] = useState("")
  const [name,setName] = useState("")
  const [gender,setGender] = useState("")
  const [salary,setSalary] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:9000/createEmployee",{idNum,name,gender,salary})
    .then(result => console.log(result),
      navigate('/')
  )
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 p-3">
        {/* <h1>Enter Employee Details</h1> */}
      <form onSubmit = {handleSubmit}>
      <div className="mb-3">
            <label htmlFor="id" className="form-label">Employee Id</label>
            <input type="text" className="form-control" id="id" onChange={(e) => setId(e.target.value)} placeholder="enter your Id"/>
        </div>
        <div className="mb-3">
            <label htmlFor="employeename" className="form-label">Employee Name</label>
            <input type="text" className="form-control" id="employeename" onChange={(e) => setName(e.target.value)} placeholder="enter your name"/>
        </div>
        <div className="mb-3">
            <div className="form-check">
                <input className="form-check-input" 
                type="radio" 
                name="gender" 
                id="male"
                onClick = {()=>setGender("M")}/>
            <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" 
                type="radio" 
                name="gender" 
                id="male"
                onClick = {()=>setGender("F")}/>
                <label className="form-check-label" htmlFor="female">Female</label>
            </div>
            {/* <label for="gender" class="form-label">Gender</label>
            <input type="text" class="form-control" id="gender" placeholder="enter your gender"></input> */}
        </div>
        <div className="mb-3">
            <label htmlFor="employeename" className="form-label">Salary</label>
            <input type="text" className="form-control" id="salary" placeholder="enter your salary"
            onChange = {(e)=>setSalary(e.target.value)}/>
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  )
}

export default CreateEmployee
