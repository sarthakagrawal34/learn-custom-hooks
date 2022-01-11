// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from "react";

// CUSTOM HOOK
function useFormInputs(initialValue) {
  const [value, setValue] = useState('');

  function handleChange (e){
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function LoginForm() {
  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  */

  // Initializing using CUSTOM HOOK
  const email = useFormInputs('');
  const password = useFormInputs('');

  /*
  function handleEmailChange(e){
      setEmail(e.target.value);
  }
  function handlePasswordChange(e){
      setPassword(e.target.value);
  }
  */
  return (
      <form>
          <div>Email</div>
          <div>
              {/* <input type="email" value ={email} onChange= {handleEmailChange} /> */}
              <input type="email" value ={email.value} onChange= {email.onChange} />
          </div>
          <br/>
          <div>Password</div>
          <div>
              {/* <input type="password" value ={password} onChange= {handlePasswordChange} /> */}
              <input type="password" value ={password.value} onChange= {password.onChange} />
          </div>
          <p>
              <strong>
                  <em> Email: </em>
              </strong>
              {/* {email} */}
              {email.value}
              <strong>
                  <em> Password: </em>
              </strong>
              {/* {password} */}
              {password.value}
          </p>
      </form>
  );
}

function SignUpForm() {
  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  */

   // Initializing using CUSTOM HOOK
   const email = useFormInputs('');
   const password = useFormInputs('');
   const confirmPassword = useFormInputs('');

  /*
  function handleEmailChange(e){
      setEmail(e.target.value);
  }
  function handlePasswordChange(e){
      setPassword(e.target.value);
  }
  function handleconfirmPasswordChange(e){
      setconfirmPassword(e.target.value);
  }
  */
  return (
      <form>
          <div>Email</div>
          <div>
              {/* <input type="email" value ={email} onChange= {handleEmailChange} /> */}
              <input type="email" value ={email.value} onChange= {email.onChange} />
          </div>
          <br/>
          <div>Password</div>
          <div>
              {/* <input type="password" value ={password} onChange= {handlePasswordChange} /> */}
              <input type="password" value ={password.value} onChange= {password.onChange} />
          </div>
          <br/>
          <div>Confirm Password</div>
          <div>
              {/* <input type="password" value ={confirmPassword} onChange= {handleconfirmPasswordChange} /> */}
              <input type="password" value ={confirmPassword.value} onChange= {confirmPassword.onChange} />
          </div>
          <p>
              <strong>
                  <em> Email: </em>
              </strong>
              {/* {email} | */}
              {email.value} |
              <strong>
                  <em> Password: </em>
              </strong>
              {/* {password} | */}
              {password.value} |
              <strong>
                  <em> Confirm Password: </em>
              </strong>
              {/* {confirmPassword} */}
              {confirmPassword.value}
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
