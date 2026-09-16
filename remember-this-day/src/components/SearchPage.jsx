import './EntrySubmission.css';
import { useState } from 'react';
import './SearchPage.css';

export default function EntrySubmission({currentUser}){

    async function findEntries() {
        try {
        const response = await fetch("http:localhost://8080/entries/user" + currentUser.id);
        const data = await response.json();
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status} - could not connect to the database`)
            }
        } catch (error){
            
        }
    }


    return(



    )};