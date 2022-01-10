import React, { useState, useEffect } from "react";
import axios from "axios";

import UserInfo from "../components/UserInfo";
import UpdatePasswordForm from "../components/UpdatePasswordForm";
import UpdateUserForm from "../components/UpdateUserForm";

const LOCAL_STORAGE_KEY = "app.user";

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
    //TODO Try cath here so we don't lose the entire page
    if (storedUser && storedUser.user) handleUser(storedUser.user._id);
  }, []);

  function handleUser(key) {
    axios.get(`/user/${key}`).then(response => {
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

  function handleDeleteAccountButton(e) {}

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
      {showChangePasswordForm ? <UpdatePasswordForm /> : null}
    </div>
  );
}
