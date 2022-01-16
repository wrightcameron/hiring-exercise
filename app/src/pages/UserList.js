import React, { useState, useEffect } from "react";
import axios from "axios";

import { LOCAL_STORAGE_KEY, getAuthToken } from "../App";
import UserInfo from "../components/UserInfo";

export default function UserList() {
  const [users, setUsers] = useState([]);

  //Load the page with the user profiles
  useEffect(() => {
    handleUsers();
  }, []);

  function handleUsers() {
    axios
      .get(`/user`, {
        headers: {
          Authorization: "Bearer " + getAuthToken(LOCAL_STORAGE_KEY)
        }
      })
      .then(response => {
        setUsers(response.data);
      });
  }

  return users.map(user => {
    return <UserInfo user={user} />;
  });
}
