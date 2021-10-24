import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Home = () => {

    useEffect(async()=>{
        let data = await axios.get("http://127.0.0.1:8000/shop", {
            header:{
                'Access-Control-Allow-Origin':'*',
                'x-access-token': 'token-value'
            }
        });
        console.log(data);
    })
    return ( 
        <article className="media content-section">
            <div className="media-body">
                <div className="article-metadata">
                    <a className="mr-2" href="#">
                        {/* {{ shop.owner}} */}
                    </a>
                    <small className="text-muted">
                        {/* {{ shop.date_posted | date:"F d , Y"}} */}
                        </small>
                </div>
                <h2>
                <a className="article-title" href="#">
                    {/* {{ shop.title}} */}
                    </a></h2>
                <p className="article-content">
                    {/* {{ shop.content }} */}
                    </p>
            </div>
        </article>
     );
}
 
export default Home;
