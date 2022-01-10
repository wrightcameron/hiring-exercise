import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

//Importing pages
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserList from "./pages/UserList";

export const HOST = process.env.host || "localhost";
export const PORT = process.env.port || 3000;
export const BACKEND = process.env.backend || "http://localhost:5000";

axios.defaults.baseURL = BACKEND; // the prefix of the URL
axios.defaults.headers.get["Accept"] = "application/json"; // default header for all get request
axios.defaults.headers.post["Accept"] = "application/json"; // default header for all POST request

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" exact element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </Router>

    // <>
    //   <Login />
    // </>

    // <>
    //   <form className="login">
    //     <label>
    //       Name:
    //       <input type="text" name="name" />
    //     </label>
    //     <lable>
    //       Password:
    //       <input type="text" name="password" />
    //     </lable>
    //     <input type="submit" />
    //   </form>
    // </>

    //Old Code
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
