import React from "react";

export default function UserInfo({ user }) {
  return (
    <div className="Profile">
      <h2 className="User-firstName mb-3">
        {user.firstName} {user.lastName}
      </h2>
      <dl>
        <dt>User Name</dt>
        <dd className="User-userName">{user.username}</dd>
        <dt>Email</dt>
        <dd className="User-email">{user.email}</dd>
        <dt>Year of Birth</dt>
        <dd className="User-birthYear">{user.birthYear}</dd>
        <dt>Favorite Color</dt>
        <dd className="User-favColor">{user.favColor}</dd>
      </dl>
    </div>
  );
}
