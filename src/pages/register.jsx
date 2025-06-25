import Header from "../components/Header";
import { Link } from "react-router-dom";
import {
IoPersonSharp,
HiOutlineCalendarDateRange,
Phone,
LockKeyhole,
} from "./index";

function Register() {
    return(
        <div className="h-[100vh] w-full sm:w-3/4 shadow-lg m-auto sm:shadow-lg">
            {/* Header */}
            <Header />
            <div className="bg-white rounded-t-4xl mt-[-1rem] md:px-[6rem] md:pt-[2rem] sm:p-[3rem] p-[1rem]">
                { /* button login and register */}
                <div className="flex justify-around text-xl bg-[#e2e8f0] rounded-full shadow-md">
                    <Link to='/login' className="w-full text-center">
                        <button className="py-[10px] m-[6px] rounded-full border-[#a3a3a3] cursor-pointer font-medium text-[15px] text-[#666667]">Login</button>
                    </Link>
                    <button className="border py-[10px] m-[6px] bg-white w-full rounded-full border-[#a3a3a3] cursor-pointer font-medium text-[15px]">Register</button>
                </div>
                {/* Inputs */}
                <form action="" className="flex flex-col gap-[12px] mt-[2rem]">
                    <div className="w-full flex p-4 rounded-xl bg-white border border-[#a3a3a3]">
                        <IoPersonSharp className="text-[#ffcb32] mx-4 text-2xl"/>
                        <input type="text" name="fullName" placeholder="Full Name" className="w-full focus:outline-none"/>
                    </div>
                    <div className="w-full flex p-4 rounded-xl bg-white border border-[#a3a3a3]">
                        <Phone className="text-[#ffcb32] mx-4"/>
                        <input type="phone" name="number" placeholder="Phone Number" className="w-full focus:outline-none"/>
                    </div>
                    <div className="w-full flex p-4 rounded-xl bg-white border border-[#a3a3a3]">
                        <LockKeyhole className="text-[#ffcb32] mx-4"/>
                        <input type="password" name="password" id="" placeholder="Password"
                        className="w-full focus:outline-none"/>
                    </div>
                    <div className="w-full flex p-4 rounded-xl bg-white border border-[#a3a3a3]">
                        <HiOutlineCalendarDateRange className="text-[#ffcb32] mx-4 text-2xl"/>
                        <input type="date" placeholder="Your age" className="w-full focus:outline-none"/>
                    </div>
                </form>
                {/* button Register */}
                <div className="flex grow justify-center w-full mt-5 md:mt-6 cursor-pointer bg-[#ffcb32] text-lg font-medium text-white rounded-xl text-center p-4">
                        <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register;