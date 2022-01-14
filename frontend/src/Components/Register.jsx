import React, {useState, useEffect, useContext}from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
// import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPass, setConPass] = useState("")
    const history = useHistory();
    const {setUser, csrftoken, setIsSeller} = useContext(AuthContext);

    useEffect(()=>{
        
    }, []);
    
    function onsub(){
        console.log(username+" "+email+"  "+password+"  "+conPass)
        const attribute = {
            method: "POST",
            credentials :"same-origin",
            headers:{
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                'username':username,
                'email':email,
                'password1':password,
                'password2':conPass
            }),
        }
        fetch("http://127.0.0.1:8000/register", attribute)
            .then((response)=>response.json())
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
                        <legend className="border-bottom mb-4">SignUp As a Seller</legend>
                        <div>
                            <div className="mb-3">
                                <label className="form-label">Username*</label>
                                <input className="form-control" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                <small>Required 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email*</label>
                                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password*</label>
                                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            <div className="mb-3">
                                <label className="form-label">Password Confirmation*</label>
                                <input type="password" className="form-control" value={conPass} onChange={(e)=>setConPass(e.target.value)}/>
                                <small>Enter the same password as before, for verification.</small>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <button className="btn btn-outline-info" onClick={onsub}>Sign up</button>
                    </div>
                <div className="border-top pt-3">
                    <small className="text-muted">
                        Already have an account ? <Link className="ml-2" to="/shop/login">Login</Link>
                    </small>
                </div>
            </div>
        </div>
            
    );
}
 
export default Register;