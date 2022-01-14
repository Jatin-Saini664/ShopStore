import React, {useState} from 'react'
export const AuthContext = React.createContext()

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState("");
    const [isSeller, setisseller] = useState(0);
    const [searchList, setSearchList] = useState([]);
    const [search, setSearch] = useState('');
    function setUser(user){
        setCurrentUser(user);
    }

    function setIsSeller(value){
        setisseller(value);
    }

    function setList(value){
        setSearchList(value);
    }

    function Search(value){
        setSearch(value);
    }

    // function getCookie(name) {
    //     let cookieValue = null;
    //     console.log(document.cookie==='');
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // const csrftoken = getCookie('csrftoken');

    const value = {
        user:currentUser,
        setUser:setUser,
        isSeller:isSeller,
        setIsSeller:setIsSeller,
        searchList:searchList,
        setList:setList,
        search:search,
        setSearchValue:Search
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}