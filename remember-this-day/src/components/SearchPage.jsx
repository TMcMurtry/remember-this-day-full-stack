import { useState, useEffect } from 'react';
import './SearchPage.css';

export default function EntrySubmission({currentUser}){
    const [entries, setEntries] = useState("");
    const [searchError, setSearchError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [noMatch, setNoMatch] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [matchingEntries, setMatchingEntries] = useState("");
    const [chosenEntry, setChosenEntry] = useState("");
    const handleSearchInput = (ev) => setSearchInput(ev.target.value);
    
    async function loadEntries() {
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
        loadEntries();
    }, []);

     useEffect(() => { 
        setMatchingEntries(entries.filter( (entry) => {if (entry.entryText.contains(searchInput)) {
            return entry;
     }}))
        matchingEntries.length === 0 ? setNoMatch("No Entries Found") :
        setNoMatch("");

    }, [searchInput]);

    async function editEntry(){
        
    }


    return(
        <div className='searchPage'>
            <h2>Search for a past entry</h2>
            <label htmlFor='searchField'>
                <input name="searchField" id="searchField" type="text" value={searchInput} onChange={handleSearchInput} placeholder="Enter Title"/>
            </label>
            {noMatch && <p>{noMatch}</p>}
            <li>
            {matchingEntries.map((entry) => <ul onClick={selectEntry}>Date: {entry.date} <br/> Title: {entry.title} <br/> Entry: {entry.entryText.slice(0,50)} </ul> )}
            </li>
            <div className='chosenSearchResult'>
                <h4>Edit or Remove Entry</h4>
                <P>Date: {chosenEntry.date}</P>
                <p>Title: {chosenEntry.title}</p>
                <p>Entry: {chosenEntry.entryText}</p>
                <button name="edit" id="edit" type='button' onClick={editEntry}>Edit</button> 
                <button name="delete" id="delete" type='button' onClick={deleteEntry}>Delete</button> 

            </div>
        </div>
    )};