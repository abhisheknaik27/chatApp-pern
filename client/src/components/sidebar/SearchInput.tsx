import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full text-lg pl-6"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch className="text-lg outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
