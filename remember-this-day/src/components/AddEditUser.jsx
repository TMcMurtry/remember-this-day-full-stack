import { useEffect, useState } from 'react'
import './Login.css'

export default function AddEditUser({currentUser, isLoggedIn, setModifyUser}){
    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [submissionFail, setSubmissionFail] = useState(false);
    const [submissionFailMessage, setsubmissionFailMessage] = useState("");
    const handleEmailChange = (ev) => setEmailInput(ev.target.value);
    const handleNameChange = (ev) => setNameInput(ev.target.value);
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value);
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value);
    const handleConfirmPasswordChange = (ev) => setConfirmPasswordInput(ev.target.value);

    useEffect(() => { 
        if(isLoggedIn){
            setEmailInput(currentUser.email);
            setNameInput(currentUser.name);
            setUsernameInput(currentUser.username);
            setPasswordInput(currentUser.password);
            setConfirmPasswordInput(currentUser.password);
        }
    }, []);

    async function createUser(ev){
        ev.preventDefault();
        try {
            if (passwordInput != confirmPasswordInput){
                throw new Error(`Passwords must match`);
            }
            const post = await fetch("http://localhost:8080/users", {method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: emailInput,
                    username: usernameInput,
                    passwordInput: passwordInput,
                    fullName: nameInput,
                    memberSince: new Date().toISOString(),
                    previouslyDisplayed: false
                })
            }) 
            if (!post.ok){
                throw new Error(`Database connection error, entry was unable to be sent`);
            }

        } catch (error) {
            setSubmissionFail(true);
            setsubmissionFailMessage(error.message);
        }
    }

    async function modifyUserInfo(ev) {
         ev.preventDefault();
        try {
            if (passwordInput != confirmPasswordInput){
                throw new Error(`Passwords must match`);
            }
            const post = await fetch("http://localhost:8080/users", {method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: emailInput,
                    username: usernameInput,
                    passwordInput: passwordInput,
                    fullName: nameInput,
                    memberSince: currentUser.memberSince,
                    previouslyDisplayed: false,
                    id: currentUser.id
                })
            }) 
            if (!post.ok){
                throw new Error(`Database connection error, entry was unable to be sent`);
            }
        } catch (error) {
            setSubmissionFail(true);
            setsubmissionFailMessage(error.message);
        }
    }

    function updateUserinfo() {
        isLoggedIn ? modifyUserInfo() : createUser();
        setEmailInput("");
        setNameInput("");
        setUsernameInput("");
        setPasswordInput("");
        setConfirmPasswordInput("");
        setModifyUser(false);
    }

    function goBack() {
        setModifyUser(false);
    }

 return(
        <div className='updateUser'>
            <form className='newUserForm' onSubmit={updateUserinfo}>
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
                {submissionFail && <p>{submissionFailMessage}</p>}
                {isLoggedIn ? <button name="submit" id="submit" type="submit" >Update profile</button> :
                <button name="submit" id="submit" type="submit" >Create profile</button>}
                <button name="goBack" id="goBack" type="button" onClick={goBack}>Back</button>
            </form>
        </div>
    )
}