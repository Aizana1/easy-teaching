import React from "react";

import "./Users.css";

const Users = ({ users }) => {
  return users.length > 0 ? (
    <div>
      <h2>Also in this room:</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-box" style={{paddingTop: 50}}>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div style={{paddingTop: 50}}>There is no one else in this room</div>
  );
};

export default Users;
