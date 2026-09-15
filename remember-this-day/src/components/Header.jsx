import { Link } from "react-router"
import './Header.css'

export default function Header({isLoggedIn, setIsLoggedIn}){

    const logout = () => setIsLoggedIn(false);

    return(
        <div className="headerDisplay">
            <div className="mainTitle">
                <h1 >Remember This Day</h1>
                <p>Journaling the happy moments</p>
            {isLoggedIn && <button type="button" id="logoutButton" onClick={logout}>Log Out</button>}
            </div>
            {!isLoggedIn ? 
            <nav className="loggedOutNav">
                <Link to="/">Log-In</Link>
                <Link to="/about">About this application</Link>
                <Link to="/Optimizing">How to make the most of your journal</Link>
            </nav> : 
            <nav className="loggedInNav">
                <Link to="/">Entry Page</Link>
                <Link to="/about">About this application</Link>
                <Link to="/Optimizing">How to make the most of your journal</Link>
            </nav>
            }   
        </div>
    )
};