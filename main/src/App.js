import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState(" ");
  Axios.get("	https://api.adviceslip.com/advice").then((response) =>
    setAdvice(response.data.slip.advice)
  );
  return (
    <div className="grid place-items-center m-0 mt-auto">
      <div className="App text-3xl text-gray-200 bg-[#313A49] flex flex-col py-20   sm:py-25  max-w-[350px] sm:max-w-[600px] rounded-md ">
        <div className="text-3xl text-center max-w-[200px] break-words sm:max-w-[500px] sm:break-words">
          {advice}
        </div>
        <div className="grid place-items-center  m-0">
          <svg
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className=" w-[800] max-sm:hidden relative top-5"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
          <svg
            width="295"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-[800] sm:hidden relative top-5"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-[#5BF9AD] grid place-items-center  m-0 w-10 h-10 rounded-full mt-auto sm:w-12 sm:h-12 relative -top-6 hover:shadow-[0_0_15px_5px_#54FFAC] cursor-pointer">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6  fill-current"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
