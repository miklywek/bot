import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="m-auto">
      <div>
        <div className="  m-auto rounded-full ">
          <FaRobot className="m-auto h-16 w-16 bg-slate-100 rounded-full p-2" />
        </div>
        <p className=" text-center p-4 m-4 text-2xl font-semibold leading-6 text-gray-900 ">
          You don't have any bots yet
        </p>
        <p className="p-4 m-4 items-center text-lg text-gray-300">
          Please create your first bot to be able to be work with a system
        </p>
        <div className="m-auto flex flex-col items-center justify-center">
          <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
            <FaRobot className="w-6 h-6 pb-1 pr-1.5" />
            <Link to="/name">ADD BOT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
