import { BG_IMG } from '../utils/constant'

const BackgroundImage = () => {
  return (
    <div className="absolute object-cover h-screen">
    <img className=" h-screen object-cover" src={BG_IMG} alt="background-img" />
  </div>
  )
}

export default BackgroundImage