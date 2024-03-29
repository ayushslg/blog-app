import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css'

export default function TopBar() {

    const {user,dispatch} = useContext(Context);

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    }
    const PF = "http://localhost:5000/images/"
    return (
        <div className="top">
            <div className="topLeft">
            <a href="https://www.facebook.com/chris323dude1/" target="_blank" rel="noopener noreferrer">
                <i className="topIcon fab fa-facebook-square"></i>
            </a>
            <a href="https://www.twitter.com/yourtwitterprofile" target="_blank" rel="noopener noreferrer">
                <i className="topIcon fab fa-twitter-square"></i>
            </a>
            <a href="https://github.com/ayushslg" target="_blank" rel="noopener noreferrer">
                <i className="topIcon fab fa-github-square"></i>
            </a>
            <a href="https://www.instagram.com/chris323dude/" target="_blank" rel="noopener noreferrer">
                <i className="topIcon fab fa-instagram-square"></i>
            </a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to ="/settings">
                            <img
                            className="topImg"
                            src={PF+user.profilePic} alt="" />
                        </Link>
                        
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>         
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
