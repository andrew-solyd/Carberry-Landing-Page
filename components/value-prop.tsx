import { MdOutlineQuestionAnswer } from "react-icons/md"
import { MdLightbulbOutline } from "react-icons/md"
import { MdChecklistRtl } from "react-icons/md"

const ValueProp = () => {
  return (
    <div className="mx-5 flex flex-col items-center ">
      <div className="max-w-[650px] sm:w-[700px]">
        <h1 className="text-3xl text-center mb-4 font-semibold">
          How it works
        </h1>
        <div className="flex flex-col items-center sm:items-start sm:flex-row">
          <div className="mt-4 text-center mx-2 sm:mx-6 max-w-[220px] mb-3 sm:mb-0">
            <div className="flex justify-center mb-2"><MdOutlineQuestionAnswer size={40} /></div>
            Link your loyalty account and let the magic begin
          </div>
          <div className="mt-4 text-center mx-2 sm:mx-6 max-w-[220px] mb-3 sm:mb-0">
            <div className="flex justify-center mb-2"><MdLightbulbOutline size={40} /></div>
            Our AI scans all prices, sales and coupons available
          </div>
          <div className="mt-4 text-center mx-2 sm:mx-6 max-w-[220px] mb-3 sm:mb-0">
            <div className="flex justify-center mb-2"><MdChecklistRtl size={40} /></div>
            And builds you a shopping list with max store savings
          </div>
        </div>
      </div>
    </div>
  )
}

ValueProp.displayName = 'ValueProp'

export default ValueProp