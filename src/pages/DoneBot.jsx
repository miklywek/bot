import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function DoneBot() {
  return (
    <div className="m-auto">
      <div className="m-auto border-solid border-2 rounded border-slate-100 p-4">
        <div>
          <div className="  m-auto rounded-full ">
            <FaRobot className="m-auto h-16 w-16 bg-slate-100 rounded-full p-2" />
          </div>
          <h2 className=" text-center text-2xl font-semibold leading-6 text-gray-900 ">
            Congratulations!
          </h2>
          <p className="p-4  items-center text-lg text-gray-300">
            You will receive an email shortly once bot is ready.
          </p>
          <p className=" text-center items-center text-lg text-gray-300">
            Stay tuned!
          </p>
          <div className="m-auto flex flex-col items-center justify-center"></div>
        </div>
      </div>
      <div className='text-center p-4'>
        <button class="m-auto  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
          <Link to="/bots">DONE</Link>
        </button>
      </div>
    </div>
  );
}
