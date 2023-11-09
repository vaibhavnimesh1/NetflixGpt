import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);
  // console.log(user.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeUser())
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // navigate("/browse");
      } else {
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className=" mb-10 flex  absolute z-10 justify-between w-full bg-gradient-to-b items-center from-black">
        {<img className=" w-60  px-8 py-1  " src={LOGO} alt="logo" />}

        {user && (
          <div className=" mr-16 flex cursor-pointer">
            <img
              className=" w-10 h-10 rounded-lg "
              src={USER_AVATAR}
              alt="user"
            />  
            <h1
              onClick={() => handleSignOut()}
              className=" whitespace-nowrap cursor-pointer hover:text-black ml-4 items-center mt-2 justify-center text-white font-bold"
            >
              (Sign Out)
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
