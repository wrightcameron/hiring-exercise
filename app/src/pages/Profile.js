import React, { useState, useEffect } from "react";
import axios from "axios";

import UserInfo from "../components/UserInfo";

const LOCAL_STORAGE_KEY = "app.user";
const BASE_URL = "http://localhost:5000";

export default function Profile() {
  const [user, setUser] = useState([]);

  //Load the page with the users profile
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //TODO Try cath here so we don't lose the entire page
    if (storedUser && storedUser.user) handleUser(storedUser.user._id);
  }, []);

  function handleUser(key) {
    axios.get(`${BASE_URL}/user/${key}`).then(response => {
      setUser(response.data);
    });
  }

  return (
    <>
      <UserInfo user={user} />
    </>
  );
}
