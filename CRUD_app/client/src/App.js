import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Employee from './components/Employee';
import UpdateEmployee from './components/UpdateEmployee';
import CreateEmployee from './components/CreateEmployee';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Employee/>} />
        <Route path='/update/:id' element={<UpdateEmployee/>} />
        <Route path='/create' element={<CreateEmployee/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
