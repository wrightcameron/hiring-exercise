import React, { useState, useEffect } from "react";
import axios from "axios";

import UserInfo from "../components/UserInfo";

const BASE_URL = "http://localhost:5000";

export default function UserList() {
  const [users, setUsers] = useState([]);

  //Load the page with the user profiles
  useEffect(() => {
    handleUsers();
  }, []);

  function handleUsers() {
    axios.get(`${BASE_URL}/user`).then(response => {
      setUsers(response.data);
    });
  }

  return users.map(user => {
    return <UserInfo user={user} />;
  });
}
