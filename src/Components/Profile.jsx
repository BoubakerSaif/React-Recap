import React from "react";

const Profile = ({ user }) => {
  return (
    <div style={{ marginTop: "40px" }}>
      <span style={{ color: "green" }}>This is in Profile Component</span>
      <div>
        <p> Hello my name is {user.name == "" ? "Unknown" : user.name} </p>
      </div>
    </div>
  );
};

export default Profile;
