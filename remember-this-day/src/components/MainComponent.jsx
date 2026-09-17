import { Routes, Route } from 'react-router';
import Login from './Login';
import AboutPage from './AboutPage';
import EntrySubmission from './MainEntryPage/EntrySubmission'
import Optimizing from './Optimizing';
import './MainComponent.css'
import SearchPage from './SearchPage'
import AddEditUser from './AddEditUser';


export default function MainComponent({currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, modifyUser, setModifyUser}){
  

    return(
      <div className='mainComponent'>
        { !isLoggedIn ?
        <Routes>
          { modifyUser ? <Route path="/" element={<AddEditUser  CurrentUser={currentUser} isLoggedIn={isLoggedIn} setModifyUser={setModifyUser}/>}/>
          : <Route path="/" element={<Login  setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} setModifyUser={setModifyUser}/>}/>}
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/optimizing" element={<Optimizing/>}/>
        </Routes> :
        <Routes>
          { modifyUser ? <Route path="/" element={<AddEditUser  CurrentUser={currentUser} isLoggedIn={isLoggedIn} setModifyUser={setModifyUser}/>}/>
          : <Route path="/" element={<EntrySubmission currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>}
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/optimizing" element={<Optimizing/>}/>
          <Route path="/SearchPage" element={<SearchPage currentUser={currentUser}/>}/>
        </Routes>
      }
      </div>
    )
}