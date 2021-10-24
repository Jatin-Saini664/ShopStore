import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Home = () => {

    useEffect(async()=>{
        // let data = await axios({
        //     method: 'get',
        //     url: "http://127.0.0.1:5000/shop/",
        //     // withCredentials: false,
        //     headers: {
        //         'X-Requested-With': 'XMLHttpRequest',
        //     //   'Access-Control-Allow-Origin' : '*',
        //       }
        // })
        const response = await fetch("http://127.0.0.1:5000/shop/", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          console.log(response);
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
