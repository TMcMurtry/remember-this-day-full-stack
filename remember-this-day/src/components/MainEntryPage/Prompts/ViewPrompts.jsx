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
        const categoryIndex = random(data);
        const selectedCategory = data[categoryIndex];

        setCategories(data);
        setRandomCategory(categoryIndex);
        await resetPromptList(selectedCategory);
        
        setShownCategory(selectedCategory);
        setPromptDisplay(true);
        } catch (error){
            setErrorDisplay(true);
            setErrorMessage(error.message);
        }
    }   

    async function changeCategory(){
        const categoryIndex = random(categories);
        const selectedCategory = categories[categoryIndex];

        setRandomCategory(categoryIndex);
        setShownCategory(selectedCategory)
        await resetPromptList(selectedCategory);
    }

    async function resetPromptList(shownCategory){
        try {
        const promptsResponse = await fetch(`http://localhost:8080/prompts/category/${shownCategory.id}`);
        const promptsData = await promptsResponse.json();
        if (!promptsResponse.ok){
            throw new Error(`HTTP error: ${promptsResponse.status} - could not connect to the database`)
        }
        const promptIndex = random(promptsData);
        const selectedPrompt = promptsData[promptIndex];

        setPrompts(promptsData);
        setRandomPrompt(promptIndex);
        setShownPrompt(selectedPrompt)
        } catch (error) {
            setErrorDisplay(true);
            setErrorMessage(error.message);
        }
    }

    function newPromptSameCategory(){
        const promptIndex = random(prompts);
        const selectedPrompt = prompts[promptIndex];

        setRandomPrompt(promptIndex);
        setShownPrompt(selectedPrompt)    }

    return(
        <div className='promptDisplayArea'>
            { promptDisplay ? <div className='promptDisplay'><h2>Prompt Category: {shownCategory.categoryName}</h2>
                <p>Prompt: {shownprompt.promptText}</p>
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