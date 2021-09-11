import React, { useContext } from 'react';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const provider = new GoogleAuthProvider();
const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSignIn = () => {
    console.log('clicked');
    const auth = getAuth();

    signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;

        const signedInUser = { name: displayName, email, photoURL }
        console.log(photoURL);
        setLoggedInUser(signedInUser);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (

    <div classNameName="pt-5 mt-5">
      <button classNameName=" bg-danger" onClick={handleSignIn}>Sign In With Google</button>
    </div>
 
    // <form className="text-center border border-light p-5" action="login">
    
    //     <p className="h4 mb-4">Sign in</p>
    
    
    //     <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>
    
   
    //     <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>
    
    //     <div className="d-flex justify-content-around">
    //         <div>
           
    //             <div className="custom-control custom-checkbox">
    //                 <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
    //                 <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
    //             </div>
    //         </div>
    //         <div>
             
    //             <a href="">Forgot password?</a>
    //         </div>
    //     </div>
    
 
    //     <button onClick={handleSignIn} className="btn btn-info btn-block my-4" type="submit">Sign In With Google</button>
    
   
    //     <p>Not a member?
    //         <a href="">Register</a>
    //     </p>
    
   
    //     <p>or sign in with:</p>
    
    //     <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
    //     <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
    //     <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
    //     <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>
    
    // </form>
    


  );
};

export default LogIn;