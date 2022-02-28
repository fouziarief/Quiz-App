import React, { useRef } from "react";

function User({ setUserName }) {
  const user = useRef();
  const handlePlay = (e) => {
    user.current.value && setUserName(user.current.value);
    e.preventDefault();
  };
  return (
    <div className="user">
      <h3 className="title">Who Want to be a Milliniore</h3>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="name"
        ref={user}
      />
      <button className="play" onClick={handlePlay}>
        Play
      </button>
    </div>
  );
}

export default User;
