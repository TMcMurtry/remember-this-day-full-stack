import { useState, useEffect } from 'react';
import './SearchPage.css';

export default function EntrySubmission({currentUser}){
    const [entries, setEntries] = useState([]);
    const [searchError, setSearchError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [noMatch, setNoMatch] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [matchingEntries, setMatchingEntries] = useState([]);
    const [chosenEntry, setChosenEntry] = useState("");
    const [dateField, setDateField] = useState("");
    const [titleField, setTitleField] = useState("");
    const [entryField, setEntryField] = useState("");
    const [editSuccess, setEditSuccess] = useState("");
    const [deleteSuccess, setDeleteSuccess] = useState("");
    const handleSearchInput = (ev) => setSearchInput(ev.target.value);
    const handleDateChange = (ev) => setDateField(ev.target.value);
    const handleTitleChange = (ev) => setTitleField(ev.target.value);
    const handleEntryChange = (ev) => setEntryField(ev.target.value);
    
    async function loadEntries() {
        try {
        const response = await fetch(`http://localhost:8080/entries/user/${currentUser.id}`);
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
        const matching = entries.filter( (entry) => entry.entryText.includes(searchInput)); 
        setMatchingEntries(matching);
        matchingEntries.length === 0 ? setNoMatch("No Entries Found") :
        setNoMatch("");

    }, [searchInput, entries]);

    async function editEntry(){
        try{
            const response = await fetch(`http://localhost:8080/entries/${chosenEntry.id}`, {method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title: chosenEntry.title,
                    entryText: chosenEntry.entryText,
                    date: chosenEntry.date,
                    dateCreated: chosenEntry.dateCreated,
                    previouslyDisplayed: false
                })
            }) 
            if (!response.ok){
                throw new Error(`Could not connect to the database`)
            }
            setChosenEntry("");
            setEditSuccess("Entry Successfully Updated")
        } catch (error) {
            setSearchError(true);
            setErrorMessage(error.message);
        }
    }

    async function deleteEntry(){
        try{
            const response = await fetch(`http://localhost:8080/entries/${chosenEntry.id}`, {method: "DELETE" }) 
            if (!response.ok){
                throw new Error(`Could not connect to the database`)
            }
            setChosenEntry("");
            setDeleteSuccess("Entry Successfully Deleted")
        } catch (error) {
            setSearchError(true);
            setErrorMessage(error.message);
        }
    }
    


    return(
        <div className='searchPage'>
            <h2>Search For A Past Entry</h2>
            <label htmlFor='searchField'>
                <input name="searchField" id="searchField" type="text" value={searchInput} onChange={handleSearchInput} placeholder="Search..."/>
            </label>
            {searchError && <p>{errorMessage}</p>}
            {noMatch && <p>{noMatch}</p>}
            <li>
            {matchingEntries.map((entry) => <ul onClick={() => setChosenEntry(entry)}>Date: {entry.date} <br/> Title: {entry.title} <br/> Entry: {entry.entryText.slice(0,50)} </ul> )}
            </li>
            {chosenEntry &&
                <form className='chosenSearchResult' >
                    <h4>Edit or Remove Entry</h4>
                    <label htmlFor='title'>
                        <input name="title" id="title" type="text" value={titleField} onChange={handleTitleChange} placeholder="Enter Title"/>
                    </label>
                    <label htmlFor='entry'>
                        <input name="entry" id="entry" type="text" value={entryField} onChange={handleEntryChange} placeholder="Journal Entry"/>
                    </label>
                    <label htmlFor='date'>
                        <input name="date" id="date" type='date' value={dateField} onChange={handleDateChange} placeholder="Date"/>
                    </label>
                    <button name="edit" id="edit" type='button' onClick={editEntry}>Edit</button> 
                    <button name="delete" id="delete" type='button' onClick={deleteEntry}>Delete</button> 
                    {editSuccess && <p>{editSuccess}</p>}
                    {deleteSuccess && <p>{deleteSuccess}</p>}
                </form>
            }       
        </div>
    )};