import { MdOutlineQuestionAnswer } from "react-icons/md"
import { MdLightbulbOutline } from "react-icons/md"
import { MdChecklistRtl } from "react-icons/md"

const ValueProp = () => {
  return (
    <div className="mx-5 flex flex-col items-center ">
      <div className="max-w-[650px]">
        <h1 className="text-3xl text-center mb-2">
          How it works
        </h1>
        <div className="flex flex-col items-center sm:items-start sm:flex-row">
          <div className="mt-4 text-center mx-2 sm:mx-10 max-w-[210px] mb-3 sm:mb-0">
            <div className="flex justify-center mb-2"><MdOutlineQuestionAnswer size={40} /></div>
            Share a recent receipt and start the conversation
          </div>
          <div className="mt-4 text-center mx-2 sm:mx-10 max-w-[220px] mb-3 sm:mb-0">
            <div className="flex justify-center mb-2"><MdLightbulbOutline size={40} /></div>
            Quckly plan out what you're eating for the week
          </div>
          <div className="mt-4 text-center mx-2 sm:mx-10 max-w-[210px] mb-3 sm:mb-0">
            <div className="flex justify-center mb-2"><MdChecklistRtl size={40} /></div>
            Get full shopping list with actual store prices
          </div>
        </div>
      </div>
    </div>
  )
}

ValueProp.displayName = 'ValueProp'

export default ValueProp