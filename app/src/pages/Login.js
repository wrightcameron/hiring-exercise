import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import CredentialWarning from "../components/CredentialWarning";

const LOCAL_STORAGE_KEY = "app.user";

export default function Login() {
  const BASE_URL = "http://localhost:5000"; //todo figure out how to have this just reference path

  //Need a state to store userId
  const [userId, setUserId] = useState([]);
  const [isWrongLogin, setIsWrongLogin] = useState(false);

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
      .post(`${BASE_URL}/authenticate`, {
        username: name,
        password: password
      })
      .then(response => {
        setUserId(response.data);
        window.location = "/profile";
        console.log(response.data);
      })
      .catch(error => {
        setIsWrongLogin(true);
      });
  }

  return (
    <div>
      <form className="login" onClick={handleLoginSubmit}>
        <label>
          Name:
          <input ref={nameRef} type="text" name="name" required />
        </label>
        <br />
        <label>
          Password:
          <input ref={passwordRef} type="text" name="password" required />
        </label>
        <br />
        <input type="submit" />
        {isWrongLogin ? <CredentialWarning /> : null}
      </form>
    </div>
  );
}
