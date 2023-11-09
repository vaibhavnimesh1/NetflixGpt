import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];

  return (
    <div className="  relative">
      <VideoTitle title={mainMovie.title} des={mainMovie.overview} />
      <VideoBackground Id={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
