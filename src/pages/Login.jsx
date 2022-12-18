import wallpaper from '../asset/wallpaper3.png'
import { Title } from '../components';

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


const Login = () => {
    
    return(
        <div>
            <Title title='login' wallpaper={wallpaper}/>
        </div>
    )

};

export default Login;
