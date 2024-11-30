import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-900 opacity-60 px-4 py-4 mb-2 flex align-middle items-center gap-2">
            <span className="label-text">To:</span>
            <span className="text-white font-bold ">
              {selectedConversation.fullname}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-blue-600 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser?.fullname}</p>
        <p className="text-white">Select Chat to Start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center hover:text-blue-700" />
      </div>
    </div>
  );
};
