import { 
  MdOutlineAccountTree, MdChecklistRtl } from "react-icons/md"
import { AiOutlineFileSearch } from "react-icons/ai"

interface UTMProps {
  utm?: string | undefined | null
}

const ValueProp: React.FC<UTMProps> = ({ utm }) => {

  let prop_a = `Link your store loyalty account and let the magic begin`
  let prop_b = `Our AI scans all prices, sales and coupons available`
  let prop_c = `You get a personal shopping list with max store savings`

  if (utm === "1") {

    prop_a = `You link your loyalty accounts and we work our magic`
    prop_b = `Get suggested meals for the week, choose and modify`
    prop_c = `We scan prices and sales, building list with max savings`

  }

  return (
    <div className="mx-5 flex flex-col items-center ">
      <div className="max-w-[720px] sm:w-[720px]">
        <h1 className="text-3xl text-center mb-10 font-semibold">
          How it works
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="text-center mx-2 sm:mx-10 max-w-[220px] mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><MdOutlineAccountTree size={50} /></div>
            {prop_a}
          </div>
          <div className="text-center mx-2 sm:mx-10 max-w-[220px] mb-10 sm:mb-0">
            <div className="flex justify-center mb-5"><AiOutlineFileSearch size={50} /></div>
            {prop_b}
          </div>
          <div className="text-center mx-2 sm:mx-10 max-w-[220px] mb-6 sm:mb-0">
            <div className="flex justify-center mb-5"><MdChecklistRtl size={50} /></div>
            {prop_c}
          </div>
        </div>
      </div>
    </div>
  )
}

ValueProp.displayName = 'ValueProp'

export default ValueProp