import { AssistantResponseText } from "@/components/mvp/data"

interface AssistantResponseProps {
  onClose: () => void;
}

const AssistantResponse: React.FC<AssistantResponseProps> = ({ onClose }) => (
  <div className="relative w-[320px] h-[330px] flex flex-col bg-white rounded-xl overflow-y-auto px-3 pt-3 border border-slate-300">
    <div className="absolute inset-0 bg-slate-800 bg-opacity-90">
      <div className="flex flex-col items-center justify-between h-full p-10">
        <p className="text-gray-300 text-sm font-light">{AssistantResponseText}</p>
        <div className="flex flex-row w-full justify-end">
          <button className="py-1 px-3 bg-gray-300 rounded-lg border border-gray-300 hover:bg-transparent hover:text-gray-300" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
)

AssistantResponse.displayName = 'AssistantResponse'

export default AssistantResponse

