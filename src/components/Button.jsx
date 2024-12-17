import React from "react";

const Button = ({ name, label, onClick }) => {
  return (
    <button
      name={name}
      className={`w-full rounded-md bg-[#232742] text-white py-4 font-medium transition-all duration-100 hover:bg-gradient-to-br hover:from-[#FD5C6A] hover:to-[#FA6150] hover:shadow-xl hover:shadow-[#FA6150]`}
    >
      {label}
    </button>
  );
};

export default Button;
