// Login.js
import { GoogleAuthProvider,  getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();

export const LoginForm = () => {
  const auth = getAuth(app);
  const signInGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
  }
  return <button onClick={signInGoogle}>Logar com o Google</button>
};



   