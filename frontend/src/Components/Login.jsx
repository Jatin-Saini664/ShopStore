import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser, setIsSeller} = useContext(AuthContext);
    const history = useHistory();

    function onsubmit(){
        const attribute = {
            method: "POST",
            credentials :"same-origin",
            headers:{
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({
                'username':username,
                'password':password
            }),
        }
        fetch("http://127.0.0.1:8000/login",attribute)
            .then((response)=> response.json())
            .then((data)=>{
                console.log(data);
                if(data['isValid']){
                    setUser(data['username']);
                    setIsSeller(2);
                    history.push("/shop");
                }
            })
            .catch((err)=>console.log(err));
    }
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"5vh"}}>
            <div style={{width:"65%"}} className= "content-section">
            <fieldset className="form-group">
                <legend className="border-bottom mb-4">Login As a Seller</legend>
                <div className="mb-3">
                    <label className="form-label">Username*</label>
                    <input className="form-control" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <small>Required 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password*</label>
                    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            </fieldset>
            <div className="form-group">
                <button className="btn btn-outline-info" onClick={onsubmit} type="submit">Login</button>
            </div>
        <div className="border-top pt-3">
            <small className="text-muted">
                Need an account ? <Link to="/shop/register" className="ml-2">Sign up Now</Link>
            </small>
        </div>
    </div>
        </div>
        
     );
}
 
export default Login;