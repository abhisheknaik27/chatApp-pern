import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import { useState } from "react";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be min 3 characters long");
    }
    const conversation = conversations.find((c: ConversationType) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No User Found");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Search"
        className="input h-[2.5rem] input-bordered rounded-full text-lg pl-6 bg-blue-950"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn h-[2.5rem] min-h-[2.5rem] w-[2.5rem] min-w-[2.5rem] btn-circle bg-sky-500 text-white"
      >
        <IoSearch className="text-lg outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
