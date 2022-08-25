import React from "react";

class User extends React.Component {
  componentWillUnmount() {
    alert("Deleted User successfully");
  }
  render() {
    return (
      <div>
        <h3>Username: Rahul</h3>
        <h3>Email: rbbansal558@gmail.com</h3>
      </div>
    );
  }
}
export default User;
