import { useAppContext } from "../context";
import { FaDiceThree } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Mybots() {
  const { botInfo } = useAppContext();
  console.log("i look", botInfo);
  console.log(Object.values(botInfo));

  return (
    <div className=" flex justify-between w-96 h-24 rounded items-center bg-slate-100  text-gray-500 m-auto">
      {Object.values(botInfo).map(() => {
        return (
          <div>
            <p className="name text-center"> {botInfo.name}</p>
            <p className="text-center">{botInfo.messanger}</p>
          </div>
        );
      })}
      <button className='p-4 '>
        <Link to="/info">
            more details
            <span className='m-auto'>
          <FaDiceThree  className='m-auto'/>
          </span>
        </Link>
      </button>
    </div>
  );
}
