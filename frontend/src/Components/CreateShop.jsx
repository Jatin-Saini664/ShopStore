import React, {useState, useContext} from 'react'
import { AuthContext } from '../Context/AuthProvider';

const CreateShop = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {csrftoken} = useContext(AuthContext);

    function onchange(e){
        if(e.target.name === "title"){
            setTitle(e.target.value);
        }else{
            setContent(e.target.value);
        }
    }

    function onsubmit(e){
        console.log(title+" "+content);
        setTitle("");
        setContent("");
        const attribute = {
            method : "POST",
            credentials: 'same-origin',
            headers:{
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({
                'title':title,
                'content':content
            })
        }
        fetch("http://127.0.0.1:8000/shop/create",attribute)
            .then((response)=> response.json())
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err));
    }
    return (
        <div className="create-container">
            <input type="text" name="title" value={title} placeholder="title" onChange={onchange}/>
            <input type="text" name="content" value={content} placeholder="content" onChange={onchange}/>
            <button type="submit" onClick={onsubmit}>Submit</button>
        </div>
    );
}
 
export default CreateShop;