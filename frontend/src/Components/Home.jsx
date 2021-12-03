// import axios from 'axios';
import React, {useState, useEffect} from 'react'
import "./home.css"

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const attribute = {
            method : "GET",
            credentials :"same-origin",
            headers:{
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }
        fetch("http://127.0.0.1:8000/shop",attribute)
            .then((response)=> response.json())
            .then((data)=>{setData(data); console.log(data)})
            .catch((err)=>console.log(err));
    }, [])
    return ( 
        data.map((obj)=>{
            return (
                <article className="media content-section">
                    <div className="media-body" key={obj.date_posted}>
                        <div className="article-metadata">
                            <a className="mr-2" href="#">
                                {/* {{ shop.owner}} */}
                            </a>
                            <small className="text-muted">
                                {/* {{ shop.date_posted | date:"F d , Y"}} */obj.date_posted}
                            </small>
                        </div>
                        <h2>
                            <a className="article-title" href="#">
                                {/* {{ shop.title}} */obj.title}
                            </a>
                        </h2>
                        <p className="article-content">
                            {/* {{ shop.content }} */obj.content}
                        </p>
                    </div>
                </article>
            );
        })
        
     );
}
 
export default Home;
