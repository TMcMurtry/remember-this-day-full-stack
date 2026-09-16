import { Routes, Route } from 'react-router';
import { useState } from 'react';
import Login from './Login';
import AboutPage from './AboutPage';
import EntrySubmission from './MainEntryPage/EntrySubmission'
import Optimizing from './Optimizing';
import './MainComponent.css'
import SearchPage from './SearchPage'
import AddEditUser from './AddEditUser';


export default function MainComponent({currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn}){
  const [newUser, setNewUser] = useState(false);


    return(
      <div className='mainComponent'>
        { !isLoggedIn ?
        <Routes>
          { newUser ? <Route path="/" element={<AddEditUser  CurrentUser={currentUser} />}/>
          : <Route path="/" element={<Login  setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} setNewUser={setNewUser}/>}/>}
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/optimizing" element={<Optimizing/>}/>
        </Routes> :
        <Routes>
          <Route path="/" element={<EntrySubmission currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/optimizing" element={<Optimizing/>}/>
          <Route path="/SearchPage" element={<SearchPage currentUser={currentUser}/>}/>
        </Routes>
      }
      </div>
    )
}