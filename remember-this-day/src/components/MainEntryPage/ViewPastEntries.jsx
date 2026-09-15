import { useState } from "react"

export default function ViewPastEntries({currentUser, backgroundSelector, setBackgroundSelector}){
    const [entryDisplay, setEntryDisplay] = useState(false);
    const [entryButtonText, setEntryButtonText] = useState("View Past Entry!")
    const [entries, setEntries] = useState("");
    const [randomEntryNumber, setRandomEntryNumber] = useState("");
    const [selectedEntry, setSelectedEntry] = useState("");
    const [entryDisplayFailure, setEntryDisplayFailure] = useState(false);
    const [entryFailureMessage, setEntryFailureMessage] = useState("");
    

    function random(input){
        return Math.floor(Math.random() * (input.length))
    }

    async function entryDisplayFunction(){
        try {
        const response = await fetch("http:localhost:8080/entries/user" + currentUser.id);
        const data = await response.json();
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
        }
        setEntries(data);
        setRandomEntryNumber(random(entries));
        setSelectedEntry(entries[randomEntryNumber]);
        setEntryDisplay(true);
        setEntryButtonText("View Another Entry!")
        setBackgroundSelector(backgroundSelector + 1)
        } catch (error){
            setEntryDisplayFailure(true);
            setEntryFailureMessage(error);
        }
    }   

    return(
        <div className="pastEntryDisplay">
            {entryDisplay && 
            <div className="displayedEntry">
                <h2>Date: {selectedEntry.date}</h2>
                {selectedEntry.title && <h3>Title: {selectedEntry.title}</h3>}
                <p>Entry: <br/> {selectedEntry.entryText}</p>
                </div>}
            <label htmlFor="viewPastEntries">
                <button name="viewPastEntries" id="viewPastEntries" type="button" onClick={entryDisplayFunction}>{entryButtonText}</button>
            </label>
            {entryDisplayFailure && <p>{entryFailureMessage}</p>}
        </div>
    )
}