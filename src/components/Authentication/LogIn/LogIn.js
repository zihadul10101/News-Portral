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

    <div className="pt-5 mt-5">
      <button className=" bg-danger" onClick={handleSignIn}>Sign In With Google</button>
    </div>


  );
};

export default LogIn;