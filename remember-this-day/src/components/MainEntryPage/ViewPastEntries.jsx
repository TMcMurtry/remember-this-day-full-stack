import { useState } from "react"

export default function ViewPastEntries({currentUser, backgroundSelector, setBackgroundSelector}){
    const [entryDisplay, setEntryDisplay] = useState(false);
    const [entryButtonText, setEntryButtonText] = useState("View Past Entry!")
    const [entries, setEntries] = useState("");
    const [randomEntryNumber, setRandomEntryNumber] = useState("");
    const [selectedEntry, setSelectedEntry] = useState("");
    const [entryFailureMessage, setEntryFailureMessage] = useState("");
    

    function random(input){
        return Math.floor(Math.random() * (input.length))
    }

    async function entryDisplayFunction(){
        try {
        const response = await fetch(`http://localhost:8080/entries/user/${currentUser.id}`);
        const data = await response.json();
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`);
        }
        if (!Array.isArray(data) || data.length === 0){
            throw new Error(`No entries found, submit an entry to start your journey!`);
        }
        const selectIndex = random(data);
        const selectEntryByIndex = data[selectIndex];

        setEntries(data);
        setRandomEntryNumber(selectIndex);
        setSelectedEntry(selectEntryByIndex);
        setEntryDisplay(true);
        setEntryButtonText("View Another Entry!")
        setBackgroundSelector(backgroundSelector + 1)

        } catch (error){
            setEntryFailureMessage(error.message);
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
            {entryFailureMessage && <p>{entryFailureMessage}</p>}
            <label htmlFor="viewPastEntries">
                <button name="viewPastEntries" id="viewPastEntries" type="button" onClick={entryDisplayFunction}>{entryButtonText}</button>
            </label>
        </div>
    )
}