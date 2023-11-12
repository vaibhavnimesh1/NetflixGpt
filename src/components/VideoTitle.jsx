const VideoTitle = ({ title, des }) => { 
  return (
    <div className="w-full h-screen  pt-[15%] px-12 md:px-18 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-3xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/4">{des}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-3 px-3 md:px-8 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-3 px-8 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}
export default VideoTitle;