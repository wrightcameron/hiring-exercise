import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function UpdateUserForm({ user }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const birthYearRef = useRef();
  const favColorRef = useRef();

  function handleUpdateUserSubmit(e) {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const birthYear = birthYearRef.current.value;
    const favColor = favColorRef.current.value;
    axios
      .put(`/user/${user._id}`, {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        birthYear: birthYear,
        favColor: favColor
      })
      .then(response => {
        window.location = "/profile";
      });
  }

  return (
    <form className="updateUser" onSubmit={handleUpdateUserSubmit}>
      <div>
        <input
          id="currentFirstNameInput"
          ref={firstNameRef}
          placeholder={user.firstName}
          type="text"
          name="firstName"
        />
        <label htmlFor="currentFirstNameInput">First Name</label>
      </div>
      <div>
        <input
          id="currentLastNameInput"
          ref={lastNameRef}
          placeholder={user.lastName}
          type="text"
          name="lastName"
        />
        <label htmlFor="currentLastNameInput">Last Name</label>
      </div>
      <div>
        <input
          id="currentUserNameInput"
          ref={usernameRef}
          placeholder={user.username}
          type="text"
          name="username"
        />
        <label htmlFor="currentUserNameInput">User Name</label>
      </div>
      <div>
        <input
          id="currentEmailInput"
          ref={emailRef}
          placeholder={user.email}
          type="text"
          name="email"
        />
        <label htmlFor="currentEmailInput">Email</label>
      </div>
      <div>
        <input
          id="currentBirthYearInput"
          ref={birthYearRef}
          placeholder={user.birthYear}
          type="text"
          name="birthYear"
        />
        <label htmlFor="currentBirthYearInput">Year of Birth</label>
      </div>
      <div>
        <input
          id="currentFavColorInput"
          ref={favColorRef}
          placeholder={user.favColor}
          type="text"
          name="favColor"
        />
        <label htmlFor="currentFavColorInput">Favorite Color</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
