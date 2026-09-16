import './EntrySubmission.css';
import { useState useEffect } from 'react';
import './SearchPage.css';

export default function EntrySubmission({currentUser}){
    const [entries, setEntries] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    async function findEntries() {
        try {
        const response = await fetch("http:localhost://8080/entries/user" + currentUser.id);
        const data = await response.json();
        setEntries(data);
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
            }
        
        } catch (error){
            setErrorMessage(error.message);
        }
    }


    return(



    )};