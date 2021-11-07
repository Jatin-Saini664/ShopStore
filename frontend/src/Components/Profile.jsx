import React, {useContext} from 'react'
import { AuthContext } from '../Context/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);

    return ( <div>{user}</div> );
}
 
export default Profile;