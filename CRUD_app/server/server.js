const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Employee = require('./models/employee')
const PORT = process.env.PORT | 9000
const connectionString = "mongodb://localhost:27017/srmap"

mongoose.connect(connectionString)
// const con = mongoose.connection 

const app = express()
app.use(cors())
app.use(express.json())
// con.on('open',()=>console.log('Connected'))

app.post("/createEmployee",
    (req,res) => {
        Employee.create(req.body)
        .then(result => console.log(result))
        .catch( err => console.log(err))
    }
)

app.get('/',
     (req,res) => {
    Employee.find({})
    .then(employees => res.json(employees))
    .catch( err => res.json(err))
   }
)

// get api call with parameter
app.get('/getEmployee/:id',
    (req,res) => {
    const id = req.params.id
   Employee.findById({_id:id})
   .then(employees => res.json(employees))
   .catch( err => res.json(err))
  }
)

app.put('/updateEmployee/:id',
    (req,res) => {
    const id = req.params.id
   Employee.findByIdAndUpdate({_id:id},
    {idNum:req.body.idNum, name:req.body.name, gender: req.body.gender, salary: req.body.salary})
   .then(employees => res.json(employees))
   .catch( err => res.json(err))
  }
)


app.delete('/deleteEmployee/:id',
    (req,res) => {
    const id = req.params.id
   Employee.findByIdAndDelete({_id:id})
   .then(employees => res.json(employees))
   .catch( err => res.json(err))
  }
)



app.listen(PORT, ()=> console.log(`Server is running at ${PORT}`))