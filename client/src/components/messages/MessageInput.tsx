import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block p-2.5 w-full bg-gray-300 border-gray-500 text-black"
          placeholder="Send Message"
        />
        <button
          type="submit"
          className="text-gray-950 absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
