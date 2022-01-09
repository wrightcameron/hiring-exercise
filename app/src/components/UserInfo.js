import React from "react";

export default function UserInfo({ user }) {
  return (
    <div className="Profile">
      <div className="User-firstName" class="mb-3">
        {user.firstName}
      </div>
      <div className="User-lastName">{user.lastName}</div>
      <div className="User-userName">{user.username}</div>
      <div className="User-email">{user.email}</div>
      <div className="User-birthYear">{user.birthYear}</div>
      <div className="User-favColor">{user.favColor}</div>
    </div>
  );
}
