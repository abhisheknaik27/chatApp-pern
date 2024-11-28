import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import GenderCheckbox from "../components/GenderCheckbox";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-100 mb-4">
          Signup
          <span className="text-blue-500"> Chat App</span>
        </h1>
        <form className="">
          <div>
            <label className="input input-bordered flex items-center gap-2 bg-blue-100 text-black font-semibold">
              <FaCircleUser />
              <input type="text" className="grow " placeholder="Full Name" />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2 bg-blue-100 text-black font-semibold mt-4">
              <FaUser />
              <input type="text" className="grow " placeholder="Username" />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2 bg-blue-100 text-black font-semibold mt-4">
              <FaKey />
              <input type="password" className="grow " placeholder="Password" />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2 bg-blue-100 text-black font-semibold mt-4">
              <FaKey />
              <input
                type="password"
                className="grow "
                placeholder="Confirm Password"
              />
            </label>
          </div>
          <GenderCheckbox />
          <a
            href="/login"
            className="text-sm text-gray-500 hover:underline hover:text-blue-500 mt-2 inline-block "
          >
            Account Exits? <span className="font-semibold">LOGIN</span>
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-4 bg-blue-950 hover:bg-blue-900 ">
              SIGNUP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
