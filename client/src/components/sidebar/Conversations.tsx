import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation key={conversation.id} conversation={conversation} />
      ))}
      {loading && (
        <span className="loading loading-spinner mx-auto text-black" />
      )}
    </div>
  );
};

export default Conversations;
