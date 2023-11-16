import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { addSelectlangValue, addgptSearchbrowse } from "../redux/gptSlice";
// import GptSearchBar from "./GptSearchBar";
import { SUPPORTED_LANGUAGES } from "../utils/langConstant";

const Header = () => {
  const user = useSelector((store) => store.user);
  const GptSearchState = useSelector((store) => store.gpt.gptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleGptSearch = () => {
    dispatch(addgptSearchbrowse());
  };
  const handleSelectLang = (e) => {
    dispatch(addSelectlangValue(e.target.value));
  };
  return (
    <>
      <div className=" mb-10 flex  absolute z-10 justify-between w-full bg-gradient-to-b items-center from-black">
        {<img className=" w-60  px-8 py-1  " src={LOGO} alt="logo" />}
        {user && (
          <div className=" mr-16 flex gap-4 cursor-pointer items-center">
            {
              <>
                {GptSearchState && (
                  <select
                    onChange={handleSelectLang}
                    className=" bg-black p-2 text-white font-bold text-xl border-white outline-none cursor-pointer"
                  >
                    {SUPPORTED_LANGUAGES.map((option) => (
                      <option key={option?.identifier} value={option?.identifier}>
                        {option?.name}
                      </option>
                    ))}
                  </select>
                )}

                <button
                  className=" bg-blue-800  w-24 text-white font-bold  p-2 rounded-lg"
                  onClick={handleGptSearch}
                >
                  {!GptSearchState ? "GptSearch" : "HomePage"}
                </button>
              </>
            }
            <img
              className="  w-10 h-10   rounded-lg "
              src={USER_AVATAR}
              alt="user"
            />
            <h1
              onClick={() => handleSignOut()}
              className=" whitespace-nowrap cursor-pointer bg-yellow-500 rounded-lg  p-2 hover:text-black  justify-center text-white font-bold"
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
