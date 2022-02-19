import React from 'react';

export default function App() {
  /**
  * Challenge: Connect the form to local state
  * 
  * 1. Create a state object to store the 4 values we need to save.
  * 2. Create a single handleChange function that can
  *    manage the state of all the inputs and set it up
  *    correctly
  * 3. When the user clicks "Sign up", check if the 
  *    password & confirmation match each other. If
  *    so, log "Successfully signed up" to the console.
  *    If not, log "passwords to not match" to the console.
  * 4. Also when submitting the form, if the person checked
  *    the "newsletter" checkbox, log "Thanks for signing
  *    up for our newsletter!" to the console.
  */
  const [inputData, setInputData] = React.useState({
    email: '', password: '', confirmPassword: '', okayToEmail: true
  });

  function handleChange(event) {
    setInputData(prevInputData => {
      const {name, type, checked, value} = event.target;
      return ({
        ...prevInputData,
        [name]: type === 'checkbox' ? checked : value
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputData.password === inputData.confirmPassword) {
      console.log('Successfully signed up');
      if (inputData.okayToEmail) {
        console.log('Thanks for signing up for our newsletter!');
      }
    } else {
      console.log('Passwords do not match');
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email"
          name="email"
          placeholder="Email address"
          className="form--input"
          value={inputData.email}
          onChange={handleChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          className="form--input"
          value={inputData.password}
          onChange={handleChange}
        />
        <input 
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          className="form--input"
          value={inputData.confirmPassword}
          onChange={handleChange}
        />
        
        <div className="form--marketing">
          <input
            id="okayToEmail"
            name="okayToEmail"
            type="checkbox"
            checked={inputData.okayToEmail}
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button 
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};