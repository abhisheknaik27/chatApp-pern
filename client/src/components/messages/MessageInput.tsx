import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block p-2.5 w-full bg-gray-300 border-gray-500 text-black"
          placeholder="Send Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="text-gray-950 absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <span className="loading loading-spinner" /> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
