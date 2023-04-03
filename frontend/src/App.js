import React, { useEffect, useState, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "./components/NavigationBar.jsx";
import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Account from "./components/Account.jsx";
import Search from "./components/Search.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";

export const MyContext = createContext();

function App() {
  const [technicians, setTechnicians] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [updated, setUpdated] = useState(false)
  const [userId, setUserId] = useState(0)
  const [username, setUsername] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()
  
  const getUserId = (userName) => {
    let index = technicians.findIndex(technician => technician.userName === userName)
    if (index) {
      setUserId(technicians[index].id)
    }
  }

  const getUserName = (userName) => {
    let index = technicians.findIndex(technician => technician.userName === userName)
    if (index) {
      setUsername(technicians[index].userName)
    }
  }

  function handleLogin() {
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setIsLoggedIn(false)
    navigate("/login")
  }

  const addTechnician = (userName, password, city, service, phone) => {
    axios.post(`http://127.0.0.1:3000/api/technicians/register`, { userName: userName, password: password, city: city, service: service, phone: phone })
      .then(() => setUpdated(!updated))
  }

  const logIn = (name, password) => {
    axios.get(`http://127.0.0.1:3000/api/technicians/login/${name}/${password}`)
      .then(response => {
        if (response.data === "success") {
          navigate("/account")
        }
      })
      .catch(() => console.log("invalid user"))
  }

  const searchedTechnicians = (city, service) => {
    axios.get(`http://localhost:3000/api/technicians/${city}/${service}`).then(response => setSearchResult(response.data))
  }

  const changePhone = (id, newPhone) => {
    axios.put(`http://localhost:3000/api/technicians/updatephone/${id}`, { phone: newPhone })
      .then(() => {
        if (newPhone !== "") {
          let temp = technicians.map(technician => technician.id === id ? { ...technician, phone: newPhone } : technician)
          setTechnicians(temp)
        }
      })
  }

  const changePassword = (id, newPassword, confirmPassword) => {
    axios.put(`http://localhost:3000/api/technicians/updatepass/${id}`, { password: newPassword, confirmPassword: confirmPassword })
      .then(response => {
        console.log(response.data)
        if (response.data === 'password changed') {
          let temp = technicians.map(technician => technician.id === id ? { ...technician, password: newPassword } : technician)
          setTechnicians(temp)
        }
      })
  }

  const deleteAccount = (id) => {
    axios.delete(`http://localhost:3000/api/technicians/delete/${id}`)
      .then(response => {
        if (response) {
          navigate("/")
        }
      })
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/technicians').then(response => setTechnicians(response.data))
  }, [updated])
  return (
    <div className="App">
      <MyContext.Provider value={username}>
      <NavigationBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/register' element={<SignUp addTechnician={addTechnician} technicians={technicians} />}></Route>
        <Route path='/login' element={<LogIn handleLogin={handleLogin} logIn={logIn} getUserId={getUserId} getUserName={getUserName} />}></Route>
        <Route path='/account' element={<Account changePhone={changePhone} changePassword={changePassword} userId={userId} deleteAccount={deleteAccount} />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/search' element={<Search searchResult={searchResult} searchedTechnicians={searchedTechnicians} />}></Route>
      </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;