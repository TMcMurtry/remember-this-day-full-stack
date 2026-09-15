import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
 
  

  return (
    <div className='app'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <MainComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
        currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Footer/>
    </div>
  )
}

export default App
