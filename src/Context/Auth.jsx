import { useContext } from "react";
import AuthContext from "./Auth-Context";
function Auth() {
    const {status , login} = useContext(AuthContext)
    return ( 
        <div>
            <h1>Giriş Yaptn Mı?</h1>
            {status ? <p>Çoktan Yaptım Bile</p> : <p>Yapmadım</p>}
            <button onClick={login}>Tıkla</button>
        </div>
     );
}

export default Auth;
