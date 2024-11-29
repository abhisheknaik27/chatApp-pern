import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-auto pl-2">
      <TbLogout2
        className="text-2xl text-blue-950 cursor-pointer"
        onClick={logout}
      />
    </div>
  );
};

export default LogoutButton;
