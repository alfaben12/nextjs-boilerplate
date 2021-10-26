import type { NextPage } from "next";

const Home: NextPage = () => (
  <div className="h-screen bg-gray-200 flex justify-center items-center">
    <div className="w-2/3 text-gray-300 rounded-t shadow-lg overflow-hidden text-xs">
      <div className="h-8 flex items-center p-2 justify-between bg-gradient-to-b from-gray-700 to-gray-800">
        <div className="flex items-center gap-1">
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-bold select-none">Terminal</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 cursor-pointer hover:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <svg
            className="w-4 h-4 cursor-pointer hover:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <svg
            className="w-4 h-4 cursor-pointer hover:text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="h-72 p-1 bg-gray-900 font-mono">
        <span className="text-green-500">➜</span>
        <span> npx create-next-app@latest</span>
      </div>
    </div>
  </div>
);

export default Home;
