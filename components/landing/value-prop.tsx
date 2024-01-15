import { MdOutlineEmojiNature } from "react-icons/md"
import { TbShoppingBagSearch } from "react-icons/tb"
import { RiFileList3Line } from "react-icons/ri"

interface ValuePropProps {
  props: string[]
  propsHeader: string
}

const ValueProp: React.FC<ValuePropProps> =  ({ props, propsHeader }) => {

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className="sm:w-[700px]">
        <h1 className="mx-10 sm:mx-20 text-balance text-3xl text-center mb-10 mx-5 font-semibold">
          { propsHeader }
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <div className="w-[200px] sm:w-[240px] sm:w-full mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><MdOutlineEmojiNature size={70} /></div>
            <div className="text-center text-pretty">{props[0]}</div>
          </div>
          <div className="w-[200px] sm:w-[240px] mx-20 sm:w-full mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><TbShoppingBagSearch size={70} /></div>
            <div className="text-center text-pretty">{props[1]}</div>
          </div>
          <div className="w-[200px] sm:w-[240px] sm:w-full mb-6 sm:mb-0">
            <div className="flex justify-center mb-5"><RiFileList3Line size={70} /></div>
            <div className="text-center  text-pretty">{props[2]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

ValueProp.displayName = 'ValueProp'

export default ValueProp