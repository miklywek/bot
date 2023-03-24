import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "../context";

export default function Configure() {
  const { addElement } = useAppContext();
  const [category, setCategory] = useState("");
  const [action, setAction] = useState("");
  function handelSelect(event) {
    event.preventDefault();
    setCategory(event.target.value);
    console.log(category);
  }
  function handelChange(event) {
    event.preventDefault();
    setAction(event.target.value);
    console.log(action);
  }
  return (
    <div className="m-auto ">
      <div className="mx-auto max-w-2xl text-center p-5">
        <p className="mt-2 text-lg font-semibold leading-6 text-gray-900">
          Configure your bot
        </p>
      </div>
      <div className="flex  border-solid border-2 rounded border-slate-100 p-4">
        <div className="pr-3 col-span-2 ">
          <label className="w-44  block text-sm font-semibold leading-6 text-gray-900"></label>
          <div className="w-96 relative mt-2.5">
            <div className="absolute w-96 inset-y-0 left flex items-center">
              <label htmlFor="country" className="sr-only"></label>
              <select
                onChange={handelSelect}
                id="caterory"
                name="caterory"
                className="h-full w-full  bg-slate-100 rounded-md border-0 bg-grey-900 bg-grey py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>Refund</option>
                <option>Product Details</option>
                <option>Product Info</option>
                <option>Complaint</option>
              </select>
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="block rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
            />
          </div>
          <div>
            <button className="text-sm font-thin flex pt-5">
              <FaRegPlusSquare className="w-5 h-5 " />{" "}
              <span className="pl-1">Add category</span>
            </button>
          </div>
        </div>

        <div className="pl-3  sm:col-span-2 ">
          <label className=" w-44 block text-sm font-semibold leading-6 text-gray-900"></label>
          <div className="w-96 relative mt-2.5">
            <div className="absolute w-96 inset-y-0 left flex items-center">
              <label htmlFor=" country" className="sr-only"></label>
              <select
                onChange={handelChange}
                id="action"
                name="action"
                className="h-full w-full  bg-slate-100 rounded-md border-0 bg-grey-900 bg-grey py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>Reply with a message</option>
                <option>Reply with a message and prompt user for answer</option>
                <option>Reply with a message and action</option>
              </select>
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="block rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button
          type="submit"
          className="block w-18 rounded-md bg-slate-200 px-3.5 py-2.5 text-center text-sm font-semibold text-grey shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link to="/name">Back</Link>
        </button>
        <button
          onClick={() => {
            console.log("it is categor", category);
            addElement([category, action]);
          }}
          type="submit"
          className=" block w-18 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link to="/done">Next</Link>
        </button>
      </div>
    </div>
  );
}
