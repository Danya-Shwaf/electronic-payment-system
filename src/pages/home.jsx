import{Transferr,Footer,BiTransfer,IoIosArrowRoundForward,
AiOutlinePlus,RiFolderSettingsFill,FaWifi,VscBellDot,} from './index';
import { Link } from "react-router-dom";
import {arabic} from '../language/Arabic';
import './index';
function Home() {
  console.log(arabic[0])
    return (
      <div className="container mx-auto h-[100vh] w-[100%] flex flex-col">
        {/* header */}
        <div className="bg-[#ffcb32] p-4 h-[187px] rounded-b-[35px] shadow-lg">
          <div className="text-4xl flex justify-end">
            <Link to="/Notification">
              <VscBellDot className="border-2 rounded-full p-[2px] text-[#52005e] inline cursor-pointer" />
            </Link>
          </div>
          <div className="text-center text-white md:mt-[-1rem] mt-[-2rem]">
            <h2 className="text-xl font-medium text-[#ffffffde]">
              "Your Balance"
            </h2>
            <p className="text-[2rem] font-bold">$ 0</p>
          </div>
        </div>
        {/*Transfer and Incoming */}
        <Transferr active="/Transfer&Incoming" />
        {/* Send Section */}
        <div className="mt-4 md:mx-8 m-3 h-[151px]">
          <div className="flex justify-between text-lg">
            <h3 className="text-2xl font-medium">Send Again</h3>
            <div className="flex justify-between text-[#52005e] cursor-pointer">
              <p className="text-lg">See all</p>
              <IoIosArrowRoundForward className="text-2xl mt-[2px]" />
            </div>
          </div>
          <div className="md:mt-8 mt-4 flex gap-[2rem] text-center mx-3">
            <div className="text-[#52005e] text-lg">
              <p className="border-[#52005e] border-2 border-dashed rounded-full w-[3rem] h-[3rem] flex justify-center items-center mb-4">
                <AiOutlinePlus className="text-3xl" />
              </p>
              <h2>Add New</h2>
            </div>
            <div className="text-lg">
              <img
                src=""
                alt=""
                className="rounded-full w-[3rem] h-[3rem] mb-4"
              />
              <h2>Ahmed</h2>
            </div>
          </div>
        </div>
        {/* Last Transaction */}
        <div className="m-3 mt-4 md:mx-8 grow">
          <div className="flex justify-between text-lg">
            <h3 className="text-2xl font-medium">Last Transaction</h3>
            <div className="flex justify-between text-[#52005e] cursor-pointer">
              <p className="text-lg">See all</p>
              <IoIosArrowRoundForward className="text-2xl mt-[2px]" />
            </div>
          </div>
          <div className="m-4 mt-4 overflow-y-scroll max-h-[260px] custom-scrollbar">
            <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
              <div className="flex md:gap-[4rem] gap-[2rem]">
                <BiTransfer className="text-4xl text-white bg-[#52005e] rounded-full p-[3px] text-center" />
                <div>
                  <h1 className="font-medium text-xl">Transfer</h1>
                  <p className="text-gray-500">date</p>
                </div>
              </div>
              <p> - $500000 </p>
            </div>
            <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
              <div className="flex md:gap-[4rem] gap-[2rem]">
                <RiFolderSettingsFill className="text-4xl text-white bg-[#52005e] rounded-full p-[3px] text-center" />
                <div>
                  <h1 className="font-medium text-xl">Top Up</h1>
                  <p className="text-gray-500">date</p>
                </div>
              </div>
              <p> - $500000 </p>
            </div>
            <div className="flex justify-between">
              <div className="flex md:gap-[4rem] gap-[2rem]">
                <FaWifi className="text-4xl text-white bg-[#52005e] rounded-full p-[3px] text-center" />
                <div>
                  <h1 className="font-medium text-xl">Internet</h1>
                  <p className="text-gray-500">date</p>
                </div>
              </div>
              <p> - $500000 </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer active="/Home" />
      </div>
    );
}

export default Home;
