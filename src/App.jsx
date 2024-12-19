import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaCheckCircle } from "react-icons/fa";

function App() {
  const Button = ({ name, label, onClick }) => {
    return (
      <button
        name={name}
        className={`button w-full rounded-md bg-[#232742] text-white py-4 font-medium transition-all duration-100 
        hover:bg-gradient-to-br hover:from-[#FD5C6A] hover:to-[#FA6150] `}
      >
        {label}
      </button>
    );
  };

  const Input = ({ name, label, value, placeholder, onChange }) => {
    return (
      <div className="flex flex-col gap-2">
        <span className="font-medium">{label}</span>
        <input
          type="text"
          name={name}
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={""}
          className="input w-full hover:cursor-pointer p-4 ring-inset ring-1 ring-gray-300 rounded-md"
        />
      </div>
    );
  };

  return (
    <div className="lg:bg-[#36384D] xl:bg-[#36384D] lg:min-h-screen xl:min-h-screen flex items-center justify-center">
      <div
        className=" bg-white lg:rounded-[30px] xl:rounded-[30px] flex items-center lg:mx-6 lg:p-6 xl:p-6 
      sm:flex-col-reverse lg:flex-row xl:flex-row sm:pb-10"
      >
        <div className="mx-12">
          <div className="flex flex-col sm:gap-4 lg:gap-4 xl:gap-4">
            <h1 className="font-bold sm:text-[42px] lg:text-[64px] xl:text-[64px] sm:pt-10">
              Stay updated!
            </h1>
            <p className="text-[18px]">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <div className="text-[18px] flex flex-col gap-3 pb-4 ">
              <div className="flex items-center gap-4 ">
                <FaCheckCircle className="text-[#FA6150]" />
                <p className="flex gap-3 items-center ">
                  Product discovery and building what matters
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-[#FA6150]" />
                <p className="flex gap-3 items-center">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-[#FA6150]" />
                <p className="flex gap-3 items-center">And much more!</p>
              </div>
            </div>

            <div className="w-full">
              <Input
                name="txtEmail"
                label="Email address"
                placeholder="email@company.com"
              />
            </div>
            <div className="w-full">
              <Button
                name="buttonSubscribe"
                label="Subscribe to monthly newsletter"
              />
            </div>
          </div>
        </div>

        <div className="sm:w-full lg:w-6/12 xl:w-6/12">
          <div className="">
            <img
              className=" rounded-bl-xl sm:hidden lg:block xl:block w-full"
              src="./illustration-sign-up-desktop.svg"
              alt="newspaper-banner"
            />
            <img
              className=" sm:block lg:hidden xl:hidden w-full"
              src="./illustration-sign-up-mobile.svg"
              alt="newspaper-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
