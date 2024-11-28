import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-100 mb-4">
          Login
          <span className="text-blue-500"> Chat App</span>
        </h1>
        <form className="">
          <div>
            <label className="input input-bordered flex items-center gap-2 bg-blue-100 text-black font-semibold">
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

          <a
            href="/signup"
            className="text-sm text-gray-500 hover:underline hover:text-blue-500 mt-4 inline-block "
          >
            Don't have an account?{" "}
            <span className="font-semibold">SIGN UP</span>
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-4 bg-blue-950 hover:bg-blue-900 ">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
