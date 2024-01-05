import { MdOutlineAccountTree, MdChecklistRtl } from "react-icons/md"
import { AiOutlineFileSearch } from "react-icons/ai"

import getVariations from "@/components/landing/variations"

interface UTMProps {
  utm?: string | undefined | null
}

const ValueProp: React.FC<UTMProps> = ({ utm }) => {

  const { props } = getVariations({ utm })

  return (
    <div className="mx-5 flex flex-col items-center ">
      <div className="max-w-[720px] sm:w-[720px]">
        <h1 className="text-3xl text-center mb-10 font-semibold">
          How it works
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="text-center mx-2 sm:mx-10 max-w-[220px] mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><MdOutlineAccountTree size={50} /></div>
            {props[0]}
          </div>
          <div className="text-center mx-2 sm:mx-10 max-w-[220px] mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><AiOutlineFileSearch size={50} /></div>
            {props[1]}
          </div>
          <div className="text-center mx-2 sm:mx-10 max-w-[220px] mb-6 sm:mb-0">
            <div className="flex justify-center mb-5"><MdChecklistRtl size={50} /></div>
            {props[2]}
          </div>
        </div>
      </div>
    </div>
  )
}

ValueProp.displayName = 'ValueProp'

export default ValueProp