import EntrySubmissionForm from './EntrySubmissionForm'
import ViewPastEntries from './ViewPastEntries'
import ViewPrompts from './Prompts/ViewPrompts'
import './EntrySubmission.css'
import { useState } from 'react'

export default function EntrySubmission({currentUser}){
    const [backgroundSelector, setBackgroundSelector] = useState(0);
    const [promptDisplay, setPromptDisplay] = useState(false);
    const [submittedJournalEntry, setSubmittedJournalEntry] = useState(false);

    const backgroundClasses = [
        "entrySubmissionBackground1",
        "entrySubmissionBackground2",
        "entrySubmissionBackground3",
        "entrySubmissionBackground4"
    ];

    const selectedBackgroundClass = backgroundClasses[backgroundSelector] || backgroundClasses[3];
    
    const handleGoBack = () => setSubmittedJournalEntry(false);

    return(
        <div className='entryPage'>
            { submittedJournalEntry ? 
            <div className='submittedJournalBackground'>
                <div className='submittedJournalCelebration'>
                    <h2 id='congratsHeader'>Congratulations!</h2>
                    <p id='congratsLine1'>I'm glad something positive and noteworthy happened to you.</p>
                    <p id='congratsLine2'>Hopefully there's even more good things to write about!</p>
                    <button id='goBackButton' type='button' onClick={handleGoBack}>Go Back</button>
                </div>
            </div> :
            <div className={`entrySubmission ${selectedBackgroundClass}`}> 
                <ViewPastEntries currentUser={currentUser} backgroundSelector={backgroundSelector} setBackgroundSelector={setBackgroundSelector}/>
                <ViewPrompts currentUser={currentUser} promptDisplay={promptDisplay} setPromptDisplay={setPromptDisplay}/>
                <EntrySubmissionForm currentUser={currentUser} backgroundSelector={backgroundSelector} setBackgroundSelector={setBackgroundSelector}
                setPromptDisplay={setPromptDisplay} setSubmittedJournalEntry={setSubmittedJournalEntry}/>
            </div>}
        </div>
    )
}