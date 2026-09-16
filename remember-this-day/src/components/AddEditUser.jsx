import { useEffect, useState } from 'react'
import './Login.css'

export default function AddEditUser({CurrentUser}){
    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const handleEmailChange = (ev) => setEmailInput(ev.target.value);
    const handleNameChange = (ev) => setNameInput(ev.target.value);
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value);
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value);
    const handleConfirmPasswordChange = (ev) => setConfirmPasswordInput(ev.target.value);



    async function createUser() {
        
    }

 return(
        <div className='updateUser'>
            <form className='newUserForm' onSubmit={createUser}>
                <h2>Log In</h2>
                <label htmlFor="email"> <br/>
                    <input id="email" type="email" name="email" 
                    value={emailInput} onChange={handleEmailChange} placeholder="Email address" required/>
                </label> <br/>
                <label htmlFor="name"> <br/>
                    <input id="name" type="text" name="name" 
                    value={nameInput} onChange={handleNameChange} placeholder="Full Name" required/>
                </label> <br/>
                  <label htmlFor="username"> <br/>
                    <input id="username" type="text" name="username" 
                    value={usernameInput} onChange={handleUsernameChange} placeholder="Username" required/>
                </label> <br/>
                <label htmlFor="password"> <br/>
                    <input id="password" name="password" type="password" 
                    value={passwordInput} onChange={handlePasswordChange} placeholder="Password" required/>
                </label>
                <label htmlFor="confirmPassword"> <br/>
                    <input id="confirmPassword" name="confirmPassword" type="password" 
                    value={confirmPasswordInput} onChange={handleConfirmPasswordChange} placeholder="Re-Enter Password" required/>
                </label>
                {loginFail && <p>{loginErrorMessage}</p>}
                <button name="submit" id="submit" type="submit" >Submit</button>
            </form>
        </div>
    )
}