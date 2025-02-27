import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { LOCAL_STORAGE_KEY } from "../App";
import CredentialWarning from "../components/CredentialWarning";

export default function Login() {
  //Need a state to store userId
  const [userId, setUserId] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  //References to Password and Name in form
  const nameRef = useRef();
  const passwordRef = useRef();

  //Add userId to cookie once known, so we can use it in rest of site.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userId));
  }, [userId]);

  function handleLoginSubmit(e) {
    e.preventDefault(); // Prevent html from sending the request itself
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    if (name === "" || password === "") return;

    //Lets try this out, see how clean it is
    axios
      .post(`/authenticate`, {
        username: name,
        password: password
      })
      .then(response => {
        setUserId(response.data);
        window.location = "/profile";
        console.log(response.data);
      })
      .catch(error => {
        setErrorMsg("Invalid Credentials");
      });
  }

  return (
    <div className="row align-items-center g-lg-5 py-5 col-md-10 mx-auto col-lg-5">
      <form className="pform-signin login" onSubmit={handleLoginSubmit}>
        <div className="form-floating">
          <input
            id="UserNameInput"
            className="form-control"
            ref={nameRef}
            type="text"
            name="name"
            required
          />
          <label htmlFor="UserNameInput">User Name</label>
        </div>
        <div className="form-floating">
          <input
            id="passwordInput"
            className="form-control"
            ref={passwordRef}
            type="text"
            name="password"
            required
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log In
        </button>
        {errorMsg.length > 0 ? <CredentialWarning msg={errorMsg} /> : null}
      </form>
    </div>
  );
}
