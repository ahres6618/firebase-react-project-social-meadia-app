import {Link} from 'react-router-dom';
import {auth} from "../config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

export const Navbar = () =>{
    const [user]= useAuthState(auth);

    const signuserOut = async() =>{
        await signOut(auth)

    }

    return (
        <div>
        <Link to="/"> Home </Link>
        <Link to="/Login"> Login </Link>
        <Link to="/createpost"> Create post</Link>
        <p> {user?.displayName} </p>

        <button onClick={signuserOut}> Log Out</button>
        </div>
        );

}