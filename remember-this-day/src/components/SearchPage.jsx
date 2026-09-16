import './EntrySubmission.css';
import { useState, useEffect } from 'react';
import './SearchPage.css';

export default function EntrySubmission({currentUser}){
    const [entries, setEntries] = useState("");
    const [searchError, setSearchError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const handleSearchInput = (ev) => setSearchInput(ev.target.value);
    
    async function findEntries() {
        try {
        const response = await fetch("http:localhost://8080/entries/user" + currentUser.id);
        const data = await response.json();
        setEntries(data);
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
            }   
        } catch (error){
            setSearchError(true);
            setErrorMessage(error.message);
        }
    }
    
    useEffect(() => { 
        findEntries();
    }, []);

    //  useEffect(() => { 
    //     findEntries();
    // }, [searchInput]);


    return(
        <div className='searchPage'>
            <h2>Search for a past entry</h2>
            <label htmlFor='searchField'>
                <input name="searchField" id="searchField" type="text" value={searchInput} onChange={handleSearchInput} placeholder="Enter Title"/>
            </label>
        </div>
    )};