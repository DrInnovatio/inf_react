import React, { useState } from 'react'

function SignUp(props) {
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`NAME: ${name}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        NAME:
        <input type="text" value={ name } onChange={ handleChangeName } />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default SignUp;