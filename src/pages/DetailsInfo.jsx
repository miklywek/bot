import { useAppContext } from "../context";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function DetailsInfo() {
  const { botInfo } = useAppContext();
  const { stateArray } = useAppContext();
  console.log("what it is", stateArray);
  return (
    <div>
      <h1 className="ml-12 mt-6 text-lg font-semibold leading-6 text-gray-900">
        Details
      </h1>
      <div className="ml-12 mt-3 border-solid border-2 rounded border-slate-100 p-12">
        {Object.values(botInfo).map(() => {
          return (
            <div>
              <p className='pt-2 pb-2'>
                {" "}
                <span className="text-gray-500">Name</span>{" "}
                <span className="text-lg font-semibold leading-6 text-gray-900">
                  {botInfo.name}
                </span>
              </p>
              <p className='pt-2 pb-2'>
                <span className="text-gray-500">Messanger</span>{" "}
                <span className="text-lg font-semibold leading-6 text-gray-900">
                  {botInfo.messanger}
                </span>
              </p>
            </div>
          );
        })}
        <div>
          <p className="text-gray-500 pt-2 pb-2">Catigories</p>
          <button className="pt-2 pb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
            <p>{stateArray[0][0]}</p>
          </button>
          <div className='flex'>
            <p className="text-gray-500 pt-2 pb-2">
              {" "}
              Refund 
            </p>
            <span className='pt-3 pl-3 pr-3'>
            <FaRegArrowAltCircleRight className=''/>
            </span>
            <span className='pt-2 pb-2'>{stateArray[0][1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
