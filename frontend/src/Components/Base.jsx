import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import "./home.css" 
import PrivateRoutes from './PrivateRoutes';
import { useHistory } from 'react-router';

const Base = (props) => {
    const {user, setUser} = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
        // console.log(props.history.location)
        console.log(history)
        
    }, [])
    function onclick(){
        setUser("");
        console.log(history);
        // history.push("/");
    }
    return ( <div className="base-container">
        <header className="site-header">
    <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
        <div className="container">
            <Link to="/" className="navbar-brand mr-4" >Shopping Page</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
            <div className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
            </div>
            {/* <!-- Navbar Right Side --> */}
            {(user === "")? (<div className="navbar-nav">
                <Link className="nav-item nav-link" to="/login">Login</Link>
                <Link className="nav-item nav-link" to="/register">Register</Link>
            </div>):
            (<div className="navbar-nav">
                <Link className="nav-item nav-link" to="/profile">Profile</Link>
                <Link className="nav-item nav-link" to="/" onClick={onclick}>Logout</Link>
            </div>)}
        </div>
        </div>
    </nav>
    </header>
    
    <main role="main" className="container"> 
    <div className="row">
        <div className="col-md-8">
            <div className="alert alert-{{message.tags}}">
                <PrivateRoutes values={props}></PrivateRoutes>
            </div>
        </div>
        <div className="col-md-4">
        <div className="content-section">
            <h3>Our Sidebar</h3>
            <p className='text-muted'>You can put any information here you'd like.</p>
            <ul className="list-group">
                <li className="list-group-item list-group-item-light">Latest Posts</li>
                <li className="list-group-item list-group-item-light">Announcements</li>
                <li className="list-group-item list-group-item-light">Calendars</li>
                <li className="list-group-item list-group-item-light">etc</li>
            </ul>
            
        </div>
        </div>
    </div>
    </main>
    </div> );
}
 
export default Base;