import React from 'react';

function Signup(props) {
  return (
    <div className="signup">
        <input placeholder="Username" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Submit</button>
    </div>
  );
}

export default Signup;
