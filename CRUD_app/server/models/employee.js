const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    idNum:String,
    name:String,
    gender:String,
    salary:Number
})

const Employee = mongoose.model("employee",employeeSchema)
// employee - collection name
// employeeSchema - collection property

module.exports = Employee