import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input h-[2.5rem] input-bordered rounded-full text-lg pl-6 bg-blue-950"
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
