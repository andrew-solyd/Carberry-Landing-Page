interface AssistantResponseProps {
  onClose: () => void;
}

const AssistantResponse: React.FC<AssistantResponseProps> = ({ onClose }) => (
  <div className="flex flex-col items-center justify-between h-full p-10">
    <p className="text-gray-300 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <div className="flex flex-row w-full justify-end">
      <button className="py-1 px-3 bg-gray-300 rounded-lg border border-gray-300 hover:bg-transparent hover:text-gray-300" onClick={onClose}>
        OK
      </button>
    </div>
  </div>
)

AssistantResponse.displayName = 'AssistantResponse'

export default AssistantResponse

