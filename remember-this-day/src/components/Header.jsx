import { Link, useNavigate } from "react-router"
import './Header.css'

export default function Header({isLoggedIn, setIsLoggedIn, setModifyUser}){
    const navigate = useNavigate();
    
    const logout = () => {
        setIsLoggedIn(false);
        setModifyUser(false);
        navigate("/");
    };


    function handleModifyUser(){
        setModifyUser(true);
        navigate("/");
    }

    return(
        <div className="headerDisplay">
            <div className="mainTitle">
                <h1 >Remember This Day</h1>
                <p>Journaling the happy moments</p>
            {isLoggedIn && <button type="button" id="logoutButton" onClick={logout}>Log Out</button>}
            {isLoggedIn && <button onClick={handleModifyUser} id="profileButton">Profile</button>}
            </div>
            {!isLoggedIn ? 
            <nav className="loggedOutNav">
                <Link to="/">Main</Link>
                <Link to="/Benefits">Journaling Benefits</Link>
                <Link to="/About">About</Link>
            </nav> : 
            <nav className="loggedInNav">
                <Link to="/">Main</Link>
                <Link to="/Benefits">Journaling Benefits</Link>
                <Link to="/About">About</Link>
                <Link to="/Search">Search</Link>
            </nav>
            }   
        </div>
    )
};