import { useState } from 'react'
import './Login.css'

export default function Login({setIsLoggedIn, setCurrentUser}){
 
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [loginFail, setLoginFail] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value);
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value);
    const trimmedUsernameInput = usernameInput.trim();
    const trimmedPasswordInput = passwordInput.trim();

    
    async function verifyLogin(ev){
        ev.preventDefault();
        try {
            let foundUser;
            const response = await fetch("http://localhost:8080/users");
            const data = await response.json();
            if(!response.ok){
                throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
            }
            const findUser = data.filter((user) => 
                (user.username === trimmedUsernameInput ))
            if (findUser.length != 1) {
                throw new Error(`Username or Password invalid`);
            } else {
                foundUser = findUser[0];
            }
            if (foundUser.password === trimmedPasswordInput){
                setIsLoggedIn(true);
                setCurrentUser(foundUser);
            }
           
        } catch (error){
            setLoginFail(true);
            setLoginErrorMessage(error.message);
        }
    }

  

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