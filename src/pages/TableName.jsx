import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../context";

export default function Example() {
  const { addBotInfo } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    messanger: "Telegram",
  });
  const [messanger, seMessanger] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    console.log(name);
    console.log(value);
  };

  return (
    <div className="m-auto isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg font-semibold leading-6 text-gray-900">
          Configure your bot
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl w-96 sm:mt-20"
      >
        <div className="m-auto lg:w-96 sm:col-span-2 ">
          <label className="  block text-sm font-semibold leading-6 text-gray-900"></label>
          <div className="w-96 relative mt-2.5">
            <div className="absolute w-96 inset-y-0 left flex items-center">
              <label htmlFor="country" className="sr-only"></label>
              <select
                id="country"
                name="country"
                className="h-full w-full  bg-slate-100 rounded-md border-0 bg-grey-900 bg-grey py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>Telegram</option>
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

        <div className="mt-2.5 grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleInputChange}
                type="name"
                name="name"
                id="name"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <Switch.Group as="div" className=" gap-x-4 sm:col-span-2">
            <p className="text-gray-700 pt-1 pb-1">Powered by AI</p>
            <div className="flex h-12 pl-3 rounded items-center bg-slate-100 w-96 text-gray-500">
              ChatGPT
            </div>
          </Switch.Group>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="submit"
            className="block p-3 w-18 rounded-md bg-slate-200 px-3.5 py-2.5 text-center text-sm font-semibold text-grey shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link to="/">Back</Link>
          </button>
          <button
            onClick={() => {
              console.log(addBotInfo);
              addBotInfo(formData.name, formData.messanger);
            }}
            type="submit"
            className="block w-18 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link to="/configure">Next</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
