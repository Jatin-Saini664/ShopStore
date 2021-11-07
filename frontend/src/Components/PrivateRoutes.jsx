import React, {useEffect, useState} from 'react'
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';

const PrivateRoutes = (props) => {
    const [path, setPath] = useState("")
    useEffect(()=>{
        setPath(props.values.history.location.pathname);
    }, )
    return ((path==='/')?(<Home key="1"></Home>):((path==='/about')?(<About key="2"></About>):((path==="/profile")?(<Profile key="3"></Profile>):((path==="/login")?(<Login key="4"></Login>):(<Register key="5"></Register>)))));
}
 
export default PrivateRoutes