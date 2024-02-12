import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Teacher from './component/Teacher';
import Student from './component/Student';

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/teacher" element={<Teacher />}  />
        <Route path="/student" element={<Student />}  />
    </Routes>
  )
}

export default AppRoute
