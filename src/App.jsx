
import './style/body.css'
import './style/form.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/Login';
import Navbar from './component/Navbar';
import AppRoute from './AppRoute';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    isLoggedIn ? (
      <>
        <Navbar />
        <AppRoute />
      </>
    ) : (
      <Login />
    )
  )
}

export default App
