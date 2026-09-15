import { useState } from "react"

export default function EntrySubmissionForm({currentUser, backgroundSelector, 
    setBackgroundSelector, setPromptDisplay,  setSubmittedJournalEntry}){
    
    const [entryTitle, setEntryTitle] = useState("");
    const [entryTextBody, setEntryTextBody] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const handleTitleChange = (ev) => setEntryTitle(ev.target.value);
    const handleEntryTextChange = (ev) => setEntryTextBody(ev.target.value);
    const handleDateChange = (ev) => setEntryDate(ev.target.value);
    const [submissionFail, setsubmissionFail] = useState(false);
    const [submissionFailMessage, setsubmissionFailMessage] = useState("");
    


    async function postEntry(ev){
        ev.preventDefault();
        try {
            const post = fetch("http://localhost:8080", {method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    id: currentUser.id,
                    title: entryTitle,
                    entryText: entryTextBody,
                    date: entryDate,
                    dateCreated: new Date().toISOString(),
                    previouslyDisplayed: false
                })
            })
            if (!post.ok){
                throw new Error(`Database connection error, entry was unable to be sent`)
            }
            
            setEntryTitle("");
            setEntryTextBody("");
            setEntryDate("");
            setBackgroundSelector(backgroundSelector + 1);
            setPromptDisplay(false);
            setSubmittedJournalEntry(true);
            
        } catch (error) {
            setsubmissionFail(true);
            setsubmissionFailMessage(error);
        }

    }

    return(
        <form className="entrySubmissionForm" onSubmit={postEntry}>
            <h2>Submit a new journal entry!</h2>
            <label htmlFor="title">Title: <br/>
                <input name="title" id="title" type="text" value={entryTitle} onChange={handleTitleChange} placeholder="Enter Title"/>
            </label>
            <label htmlFor="entryText">
                <textarea name="entryText" id="entryText" value={entryTextBody} onChange={handleEntryTextChange} 
                cols={40} rows={6} placeholder="Type your entry here" required/>
            </label>
            <label htmlFor="dateInput">Date: <br/>
                <input name="dateInput" id="dateInput" type="date" value={entryDate} onChange={handleDateChange} required/>
            </label>
            <button id="entrySubmitButton" type="submit" >Submit Entry</button>
            {submissionFail && <p>{submissionFailMessage}</p>}
        </form>
    )
}