import { MdOutlineEmojiNature } from "react-icons/md"
import { TbShoppingBagSearch } from "react-icons/tb"
import { RiFileList3Line } from "react-icons/ri"

interface ValuePropProps {
  props: string[]
}

const ValueProp: React.FC<ValuePropProps> =  ({ props }) => {

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className="max-w-[720px] sm:w-[720px]">
        <h1 className="text-3xl text-center mb-10 mx-5 font-semibold">
          Stress-free savings for busy moms
        </h1>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="text-center mx-2 sm:mx-10 max-w-[240px] mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><MdOutlineEmojiNature size={70} /></div>
            {props[0]}
          </div>
          <div className="text-center mx-2 sm:mx-10 max-w-[240px] mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><TbShoppingBagSearch size={70} /></div>
            {props[1]}
          </div>
          <div className="text-center mx-2 sm:mx-10 max-w-[240px] mb-6 sm:mb-0">
            <div className="flex justify-center mb-5"><RiFileList3Line size={70} /></div>
            {props[2]}
          </div>
        </div>
      </div>
    </div>
  )
}

ValueProp.displayName = 'ValueProp'

export default ValueProp