import { Routes, Route } from 'react-router';
import Login from './Login';
import EntrySubmission from './MainEntryPage/EntrySubmission'
import './MainComponent.css'
import SearchPage from './SearchPage'
import AddEditUser from './AddEditUser';
import Benefits from './Benefits';
import About from './About';


export default function MainComponent({currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, modifyUser, setModifyUser}){
  

    return(
      <div className='mainComponent'>
        { !isLoggedIn ?
        <Routes>
          { modifyUser ? <Route path="/" element={<AddEditUser  currentUser={currentUser} isLoggedIn={isLoggedIn} setModifyUser={setModifyUser}/>}/>
          : <Route path="/" element={<Login  setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} setModifyUser={setModifyUser}/>}/>}
          <Route path="/Benefits" element={<Benefits/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes> :
        <Routes>
          { modifyUser ? <Route path="/" element={<AddEditUser  currentUser={currentUser} isLoggedIn={isLoggedIn} setModifyUser={setModifyUser}/>}/>
          : <Route path="/" element={<EntrySubmission currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>}
          <Route path="/Benefits" element={<Benefits/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/SearchPage" element={<SearchPage currentUser={currentUser}/>}/>
        </Routes>
      }
      </div>
    )
}