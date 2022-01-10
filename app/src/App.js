import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//Importing pages
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserList from "./pages/UserList";

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
