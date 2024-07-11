import React from 'react';

const Popup = ({ showPopup, closePopup, isLoginForm, switchToLogin, switchToSignup }) => {
  return (
    <>
      {showPopup && (
        <div id="popup" className="popup" onClick={closePopup}>
          <div id="sign-up-form" style={{ display: isLoginForm ? 'none' : 'block' }}>
            <h3>Sign Up</h3>
            <form>
              <input type="text" id="username" placeholder="Username" /><br />
              <input type="password" id="password" placeholder="Password" /><br />
              <input type="password" id="reenter-password" placeholder="Re-enter Password" /><br />
              <button type="button" id="signup-button">Sign Up</button>
            </form>
            <p>Already have an account? <span className="switch-link" onClick={switchToLogin}>Login</span></p>
          </div>
          <div id="login-form" style={{ display: isLoginForm ? 'block' : 'none' }}>
            <h3>Login</h3>
            <form>
              <input type="text" id="login-username" placeholder="Username" /><br />
              <input type="password" id="login-password" placeholder="Password" /><br />
              <button type="button" id="login-button">Login</button>
            </form>
            <p>Not registered? <span className="switch-link" onClick={switchToSignup}>Sign Up</span></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;