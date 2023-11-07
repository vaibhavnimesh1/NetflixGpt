import { auth } from "../utils/firebase";
import { checkValidateUser } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const email = useRef("");
  const password = useRef("");
  const fullName = useRef("");

  const handleToggle = () => {
    setIsSignin(!isSignin);
  };

  const handleSubmitForm = () => {
    const message = checkValidateUser(
      email.current.value,
      password.current.value,
      fullName.current ? fullName.current.value : "",
      isSignin
    );
    setErrorMessage(message);
    if(message) return;
    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setErrorMessage("dsds")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
        
        
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // Navigate("/login")
          setMessage("aagya")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute bg-contain">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => {e.preventDefault()
        handleSubmitForm()}}
        className="absolute rounded-lg w-3/12 p-8 z-40 my-20 mx-auto left-0 right-0 bg-opacity-80 bg-black text-white"
      >
        <h1 className="text-2xl mb-7">{isSignin ? "Sign In" : "Sign Up"}</h1>
        {!isSignin && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="outline-none bg-gray-300 text-black w-full px-3 py-2 mb-6 rounded-md"
          />
        )}
        <input
          type="text"
          ref={email}
          autoComplete="email"
          placeholder="Email"
          className="outline-none bg-gray-300 text-black w-full px-3 py-2 mb-6 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="outline-none bg-gray-300 text-black w-full px-3 py-2 rounded-md"
        />
        <p className="text-md font-bold text-red-600 py-3 pl-14">
          {errorMessage}
        </p>
        <button
          // onClick={handleSubmitForm}
          className="w-full px-3 py-2 mb-6 rounded-md bg-red-600 text-white"
        >
          {isSignin ? "Sign In" : "Sign Up"}  {message}
        </button>
        <p className="text-sm text-gray-600">
          {isSignin ? "New to Netflix?" : "Already a user "}
          <span
            onClick={handleToggle}
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            {isSignin ? " Sign up now." : " Sign in here"}
          </span>
        </p>
        
      </form>
    </>
  );
};

export default Login;
