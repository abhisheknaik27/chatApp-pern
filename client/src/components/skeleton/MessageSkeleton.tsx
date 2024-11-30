const MessageSkeleton = () => {
  return (
    <div className="">
      <div className="flex gap-3 items-center">
        <div className="skeleton bg-blue-400 opacity-60 w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton bg-blue-200 opacity-40  h-4 w-40"></div>
          <div className="skeleton bg-blue-200 opacity-40 h-4 w-40"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="skeleton bg-blue-200 opacity-40 h-4 w-40"></div>
        </div>
        <div className="skeleton bg-blue-400 opacity-60  w-10 h-10 rounded-full shrink-0"></div>
      </div>
    </div>
  );
};
export default MessageSkeleton;
