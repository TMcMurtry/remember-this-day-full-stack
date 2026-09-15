import { Routes, Route } from 'react-router';
import Login from './Login';
import AboutPage from './AboutPage';
import EntrySubmission from './MainEntryPage/EntrySubmission'
import Optimizing from './Optimizing';
import './MainComponent.css'


export default function MainComponent({currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn}){

    return(
      <div className='mainComponent'>
        { !isLoggedIn ?
        <Routes>
          <Route path="/" element={<Login  setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/optimizing" element={<Optimizing/>}/>
        </Routes> :
        <Routes>
          <Route path="/" element={<EntrySubmission currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/optimizing" element={<Optimizing/>}/>
        </Routes>
      }
      </div>
    )
}