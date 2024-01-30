
import { PiTiktokLogo } from "react-icons/pi"
import { PiInstagramLogo } from "react-icons/pi"

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row my-10 mx-10 justify-between items-center">
        <div className="text-xs">© 2024, Cartberry (Solydaria, Inc.)</div>
        <div className="w-[200px]"> </div>
        <div className="flex space-x-2 flex-row">
          <PiTiktokLogo size={20} />
          <PiInstagramLogo size={20} />
        </div>
      </div>
    </div>
  )
}

Footer.displayName = 'Footer'

export default Footer