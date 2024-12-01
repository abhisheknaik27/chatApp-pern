import { useAuthContext } from "../../context/AuthContext";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col ">
      <div className="flex justify-between align-middle items-center">
        <h1 className="pt-0 pb-2 pl-2 font-bold text-sky-900 uppercase text-sm">
          <span className="text-black">PERN</span> CHAT APP
        </h1>
        <h1 className="pt-0 pb-2 pr-2 font-bold text-blue-900 uppercase text-[0.7rem]">
          Welcome {authUser?.fullname}
        </h1>
      </div>
      <SearchInput />

      <Conversations />

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
