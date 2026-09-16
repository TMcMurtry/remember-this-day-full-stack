import { useState } from 'react'
import './Login.css'

export default function AddEditUser({CurrentUser}){
    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const handleEmailChange = (ev) => setEmailInput(ev.target.value);


 return(
        <div className='updateUser'>
            <form className='loginForm' onSubmit={verifyLogin}>
                <h2>Log In</h2>
                <label htmlFor="email"> <br/>
                    <input id="email" type="email" name="email" 
                    value={emailInput} onChange={handleEmailChange} placeholder="Email address" required/>
                </label> <br/>
                
                <label htmlFor="password"> <br/>
                    <input id="password" name="password" type="password" 
                    value={passwordInput} onChange={handlePasswordChange} placeholder="Password" required/>
                </label>
                {loginFail && <p>{loginErrorMessage}</p>}
                <button name="login" id="login" type="submit" >Log In</button>
            </form>
        </div>
    )
}