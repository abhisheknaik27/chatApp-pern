import Message from "./Message";
import { DUMMY_CONVERSATIONS } from "../../dummyData/dummy";
const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
      {DUMMY_CONVERSATIONS.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
