import { useState } from 'react';



export default function ViewPrompts({promptDisplay, setPromptDisplay}){
    const [randomCategory, setRandomCategory] = useState("");
    const [randomPrompt, setRandomPrompt] = useState("");
    const [shownCategory, setShownCategory] = useState("");
    const [shownprompt, setShownPrompt] = useState("");
    const [errorDisplay, setErrorDisplay] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [categories, setCategories] = useState("");
    const [prompts, setPrompts] = useState("");

    function random(input){
        return Math.floor(Math.random() * (input.length))
    }


    async function promptDisplayFunction(){
        try {
        const response = await fetch("http://localhost:8080/categories");
        const data = await response.json();
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
        }
        setCategories(data);
        setRandomCategory(random(data));
        resetPromptList();
        
        setShownCategory(categories[randomCategory].categoryName)
        setPromptDisplay(true);
        } catch (error){
            setErrorDisplay(true);
            setErrorMessage(error);
        }
    }   

    function changeCategory(){
        setRandomCategory(random(categories));
        setShownCategory(categories[randomCategory].categoryName)
        resetPromptList();
    }

    async function resetPromptList(){
        try {
        const promptsResponse = await fetch("http:localhost:8080/prompts/category/" + randomCategory);
        const promptsData = await promptsResponse.json();
        if (!promptsResponse.ok){
            throw new Error(`HTTP error: ${promptsResponse.status} - could not connect to the database`)
        }
        setPrompts(promptsData);
        setRandomPrompt(random(prompts));
        setShownPrompt(prompts[randomPrompt].promptText)
        } catch (error) {
            setErrorDisplay(true);
            setErrorMessage(error);
        }
    }

    function newPromptSameCategory(){
        setRandomPrompt(random(prompts));
        setShownPrompt(prompts[randomPrompt].promptText)    }

    return(
        <div className='promptDisplayArea'>
            { promptDisplay ? <div className='promptDisplay'><h2>Prompt Category: {shownCategory}</h2>
                <p>Prompt: {shownprompt}</p>
                <label htmlFor='viewNewCategory'>
                    <button name="viewNewCategory" id="viewNewCategory" type="button" onClick={changeCategory}>View Another Category</button>
                </label>
                <label htmlFor='viewNewPrompt'>
                    <button name="viewNewPrompt" id="viewNewPrompt" type="button" onClick={newPromptSameCategory}>View Another Prompt In This Category</button>
                </label>
            </div>
            : <div className='promptButtonNoDisplay'>
                <label htmlFor="viewPrompts">
                    <button name="viewPrompts" id="viewPrompts" type="button" onClick={promptDisplayFunction} >View A Writing Prompt</button>
                </label>
            </div>}
            
            {errorDisplay && <p>{errorMessage}</p>}
        </div>
    )
}