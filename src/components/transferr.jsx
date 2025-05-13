import React from 'react'
import { BiTransfer } from "react-icons/bi";
import { TbArrowBarDown } from "react-icons/tb";
export default function Transferr({active}) {
  const links = [
    { to: "/Transfer", icon: <BiTransfer />, label: "Transfer" },
    { to: "/Incoming", icon: <TbArrowBarDown />, label: "Incoming" },
  ];
  return (
    <div className="bg-white md:w-3/4 w-[80%] h-[74px] shadow-lg flex justify-around mx-auto p-2 text-lg mt-[-34px] md:mt-[-3rem] rounded-lg">
      {links.map((link) => (
        <div key={link.to}>
          <div
            className={`text-3xl w-10 h-10 flex justify-center items-center text-white rounded-full p-[2px] ${
              active == link.to || active == "/Transfer&Incoming"
                ? "bg-[#52005e]"
                : "bg-[#999999]"
            }`}
          >
            {link.icon}
          </div>
          <h3 className="ml-[-1rem] font-medium">{link.label}</h3>
        </div>
      ))}
    </div>
  );
};
