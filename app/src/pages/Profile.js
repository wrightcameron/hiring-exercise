import React, { useState, useEffect } from "react";
import axios from "axios";

import { LOCAL_STORAGE_KEY, getAuthToken } from "../App";
import UserInfo from "../components/UserInfo";
import UpdatePasswordForm from "../components/UpdatePasswordForm";
import UpdateUserForm from "../components/UpdateUserForm";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "jdoe",
    email: "johndoe@mail.com",
    birthYear: "1999",
    favColor: "Blue"
  });

  const [showChangeInfoForm, setShowChangeInfoForm] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  //Load the page with the users profile
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedUser && storedUser.user) handleUser(storedUser.user._id);
  }, []);

  function handleUser(key) {
    axios
      .get(`/user/${key}`, {
        headers: {
          Authorization: "Bearer " + getAuthToken(LOCAL_STORAGE_KEY)
        }
      })
      .then(response => {
        setUser(response.data);
      });
  }

  function handleChangeInfoButton(e) {
    setShowChangeInfoForm(!showChangeInfoForm);
    setShowChangePasswordForm(false);
  }

  function handleChangePasswordButton(e) {
    setShowChangePasswordForm(!showChangePasswordForm);
    setShowChangeInfoForm(false);
  }

  function handleDeleteAccountButton(e) {
    axios
      .delete(`/user/${user._id}`, {
        headers: {
          Authorization: "Bearer " + getAuthToken(LOCAL_STORAGE_KEY)
        }
      })
      .then(res => {
        window.location = "/login";
      });
  }

  return (
    <div className="container">
      <UserInfo user={user} />
      <button className="btn btn-secondary" onClick={handleChangeInfoButton}>
        Change Info
      </button>
      <button
        className="btn btn-secondary"
        onClick={handleChangePasswordButton}
      >
        Change Password
      </button>
      <button className="btn btn-danger" onClick={handleDeleteAccountButton}>
        Delete Account
      </button>
      {showChangeInfoForm ? <UpdateUserForm user={user} /> : null}
      {showChangePasswordForm ? <UpdatePasswordForm user={user} /> : null}
    </div>
  );
}
