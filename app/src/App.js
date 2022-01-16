import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

//Importing pages
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserList from "./pages/UserList";

export const HOST = process.env.host || "localhost";
export const PORT = process.env.port || 3000;
export const BACKEND = process.env.backend || "http://localhost:5000";
export const LOCAL_STORAGE_KEY = "app.user";

export function getAuthToken(localStorageName) {
  const storedUser = JSON.parse(localStorage.getItem(localStorageName));
  if (storedUser && storedUser.auth_token) return storedUser.auth_token;
  return null;
}

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
  );
}

export default App;
