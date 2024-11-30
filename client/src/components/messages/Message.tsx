import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser?.id;

  const chatClass = fromMe ? "chat-end" : "chat-start";
  const bubbleBg = fromMe ? "bg-blue-500" : "";
  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={img} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBg}`}>{message.body}</div>
      <div className="chat-footer text-slate-700 opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
