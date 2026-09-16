import { useState } from 'react'
import './Login.css'

export default function AddEditUser({CurrentUser}){
 
    const [usernameInput, setUsernameInput] = useState("");

 return(
        <div className='loginPage'>
            <form className='loginForm' onSubmit={verifyLogin}>
                <h2>Log In</h2>
                <label htmlFor="username"> <br/>
                    <input id="username" type="text" name="username" 
                    value={usernameInput} onChange={handleUsernameChange} placeholder="Username" required/>
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