// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from "react";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e){
      setEmail(e.target.value);
  }
  function handlePasswordChange(e){
      setPassword(e.target.value);
  }
  
  return (
      <form>
          <div>Email</div>
          <div>
              <input type="email" value ={email} onChange= {handleEmailChange} />
          </div>
          <br/>
          <div>Password</div>
          <div>
              <input type="password" value ={password} onChange= {handlePasswordChange} />
          </div>
          <p>
              <strong>
                  <em> Email: </em>
              </strong>
              {email}
              <strong>
                  <em> Password: </em>
              </strong>
              {password}
          </p>
      </form>
  );
}

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  function handleEmailChange(e){
      setEmail(e.target.value);
  }
  function handlePasswordChange(e){
      setPassword(e.target.value);
  }
  function handleconfirmPasswordChange(e){
      setconfirmPassword(e.target.value);
  }
  
  return (
      <form>
          <div>Email</div>
          <div>
              <input type="email" value ={email} onChange= {handleEmailChange} />
          </div>
          <br/>
          <div>Password</div>
          <div>
              <input type="password" value ={password} onChange= {handlePasswordChange} />
          </div>
          <br/>
          <div>Confirm Password</div>
          <div>
              <input type="password" value ={confirmPassword} onChange= {handleconfirmPasswordChange} />
          </div>
          <p>
              <strong>
                  <em> Email: </em>
              </strong>
              {email} |
              <strong>
                  <em> Password: </em>
              </strong>
              {password} |
              <strong>
                  <em> Confirm Password: </em>
              </strong>
              {confirmPassword}
          </p>
      </form>
  );
}
function App(props) {
  return (
    <div className="App" style={{padding: 20}}>
      <h2> Login </h2>
      <LoginForm />
      <h3> Sign Up</h3>
      <SignUpForm/>
      
    </div>
  );
}

export default App;
