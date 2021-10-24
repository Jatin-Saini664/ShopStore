import React, {useState, useEffect}from 'react';
// import axios from "axios";

const Register = () => {
    // const [form, setForm] = useState({});

    // useEffect(async()=>{
        // let data = await axios.get("http://127.0.0.1:5000/register/");
        // let data = await axios.create({
        //     baseURL: "http://127.0.0.1:5000/register/",
        //     withCredentials: false,
        //     headers: {
        //       'Access-Control-Allow-Origin' : '*',
        //       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //       }
        //   });
        // console.log(data());
        // console.log(data);  
        // setForm(data);
    // }, []);
    return (
        // {% extends 'shop/base.html' %}
        // {% load crispy_forms_tags %}
        // {% block content %}
            <div className= "content-section">
                <form method="post"  >
                    {/* {%csrf_token %} */}
                    <fieldset className="form-group">
                        <legend className="border-bottom mb-4">Join Today</legend>
                        {/* {{form |crispy}} */}
                        <div></div>
                    </fieldset>
                    <div className="form-group">
                        <button className="btn btn-outline-info" type="submit">Sign up</button>
                    </div>
                </form>
                <div className="border-top pt-3">
                    <small className="text-muted">
                        Already have an account ? <a className="ml-2" href="#">Sign up</a>
                    </small>
                </div>
            </div>
        // {% endblock content %}
    );
}
 
export default Register;