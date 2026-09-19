import { useEffect, useState } from 'react'
import './AddEditUser.css'

export default function AddEditUser({currentUser, isLoggedIn, setModifyUser}){
    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [submissionFail, setSubmissionFail] = useState(false);
    const [submissionFailMessage, setsubmissionFailMessage] = useState("");
    const [submissionSuccessMessage, setSubmissionSuccessMessage] = useState("");
    const handleEmailChange = (ev) => setEmailInput(ev.target.value);
    const handleNameChange = (ev) => setNameInput(ev.target.value);
    const handleUsernameChange = (ev) => setUsernameInput(ev.target.value);
    const handlePasswordChange = (ev) => setPasswordInput(ev.target.value);
    const handleConfirmPasswordChange = (ev) => setConfirmPasswordInput(ev.target.value);

    useEffect(() => { 
        if(isLoggedIn){
            setEmailInput(currentUser.email);
            setNameInput(currentUser.fullName);
            setUsernameInput(currentUser.username);
            setPasswordInput(currentUser.password);
            setConfirmPasswordInput(currentUser.password);
        }
    }, []);

    async function createUser(){
        try {
            if (passwordInput != confirmPasswordInput){
                throw new Error(`Passwords must match`);
            }
            const response = await fetch("http://localhost:8080/users");
            const data = await response.json;
            if (!response.ok){
                throw new Error(`Database connection error, entry was unable to be sent`);
            }
            const userMatch = data.filter((user) => {user.username === usernameInput});
            if (userMatch.length != 0){
                throw new Error(`Chosen username already taken`)
            }
            const post = await fetch("http://localhost:8080/users", {method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: emailInput,
                    username: usernameInput,
                    memberSince: new Date().toISOString(),
                    password: passwordInput,
                    fullName: nameInput,
                })
            }) 
            if (!post.ok){
                throw new Error(`Database connection error, entry was unable to be sent`);
            } else {
                setSubmissionFail(false);
                setsubmissionFailMessage("");
                setSubmissionSuccessMessage('Profile created! Press "Back" to proceed to log in page');
            }

        } catch (error) {
            setSubmissionFail(true);
            setsubmissionFailMessage(error.message);
        }
    }

    async function modifyUserInfo() {
        try {
            if (passwordInput != confirmPasswordInput){
                throw new Error(`Passwords must match`);
            }
            const put = await fetch(`http://localhost:8080/users/${currentUser.id}`, {method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    id: currentUser.id,
                    email: emailInput,
                    username: usernameInput,
                    memberSince: currentUser.memberSince,
                    password: passwordInput,
                    fullName: nameInput,
                })
            }) 
            if (!put.ok){
                throw new Error(`Database connection error, entry was unable to be sent`);
            } else {
                setSubmissionFail(false);
                setsubmissionFailMessage("");
                setSubmissionSuccessMessage("Profile Updated!")
            }
        } catch (error) {
            setSubmissionFail(true);
            setsubmissionFailMessage(error.message);
        }
    }

    async function updateUserinfo(ev) {
        ev.preventDefault();
        if (isLoggedIn){
            modifyUserInfo();
        } else {
            createUser();
        }  
    }

    function goBack() {
        setEmailInput("");
        setNameInput("");
        setUsernameInput("");
        setPasswordInput("");
        setConfirmPasswordInput("");
        setModifyUser(false);
    }

 return(
        <div className='updateUser'>
            <form className='newUserForm' onSubmit={updateUserinfo}>
                {isLoggedIn ? <h2>Edit Profile</h2> : <h2>Create Account</h2>}
                <label htmlFor="email"> Email:<br/>
                    <input id="email" type="email" name="email" 
                    value={emailInput} onChange={handleEmailChange} placeholder="Email address" required/>
                </label> <br/>
                <label htmlFor="name">Full Name: <br/>
                    <input id="name" type="text" name="name" 
                    value={nameInput} onChange={handleNameChange} placeholder="Full Name" required/>
                </label> <br/>
                  <label htmlFor="username">Username: <br/>
                    <input id="username" type="text" name="username" 
                    value={usernameInput} onChange={handleUsernameChange} placeholder="Username" required/>
                </label> <br/>
                <label htmlFor="password">Password: <br/>
                    <input id="password" name="password" type="password" 
                    value={passwordInput} onChange={handlePasswordChange} placeholder="Password" required/>
                </label> <br/>
                <label htmlFor="confirmPassword"> Confirm Password:<br/>
                    <input id="confirmPassword" name="confirmPassword" type="password" 
                    value={confirmPasswordInput} onChange={handleConfirmPasswordChange} placeholder="Re-Enter Password" required/>
                </label> <br/>
                {submissionFail && <p>{submissionFailMessage}</p>}
                {submissionSuccessMessage && <p>{submissionSuccessMessage}</p>}
                {isLoggedIn ? <button name="submit" id="submit" type="submit" >Update profile</button> :
                <button name="submit" id="submit" type="submit" >Create profile</button>}
                <button name="goBack" id="goBack" type="button" onClick={goBack}>Back</button>
            </form>
        </div>
    )
}