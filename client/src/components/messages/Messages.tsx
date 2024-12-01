import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";
import useChatScroll from "../../hooks/useChatScroll";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;
  return (
    <div className="px-4 flex-1 overflow-auto" ref={ref}>
      {!loading &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white font-semibold pt-5">
          Send message to start conversation
        </p>
      )}
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
    </div>
  );
};

export default Messages;
