import React, { useRef, useState } from "react";
import axios from "axios";

import CredentialWarning from "./CredentialWarning";
import { LOCAL_STORAGE_KEY, getAuthToken } from "../App";

export default function UpdatePasswordForm({ user }) {
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const retypePasswordRef = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  function handlePasswordSubmit(e) {
    e.preventDefault();
    const currentPassword = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const retypePassword = retypePasswordRef.current.value;

    if (newPassword !== retypePassword) {
      setErrorMsg("Passwords don't match");
      return;
    }
    axios
      .put(
        `/password/${user._id}`,
        {
          password: currentPassword,
          newPassword: newPassword
        },
        {
          headers: {
            Authorization: "Bearer " + getAuthToken(LOCAL_STORAGE_KEY)
          }
        }
      )
      .then(res => {
        window.location = "/profile";
      })
      .catch(error => {
        setErrorMsg("Invalid Credentials");
      });
  }

  return (
    <form className="updatePassword" onSubmit={handlePasswordSubmit}>
      <div>
        <input
          id="currentPasswordInput"
          ref={currentPasswordRef}
          type="text"
          name="currentPassword"
          required
        />
        <label htmlFor="currentPasswordInput">Current Password</label>
      </div>
      <div>
        <input
          id="newPasswordInput"
          ref={newPasswordRef}
          type="text"
          name="newPassword"
          required
        />
        <label htmlFor="newPasswordInput">New Password</label>
      </div>
      <div>
        <input
          id="newPasswordInput"
          ref={retypePasswordRef}
          type="text"
          name="retypePassword"
          required
        />
        <label htmlFor="newPasswordInput">Retype New Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
      {errorMsg.length > 0 ? <CredentialWarning msg={errorMsg} /> : null}
    </form>
  );
}
