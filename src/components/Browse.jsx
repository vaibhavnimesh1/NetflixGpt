import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondMaincontainer from "./SecondMaincontainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className=" ">
      <Header />
      <MainContainer />
      <SecondMaincontainer />
    </div>
  );
};

export default Browse;
