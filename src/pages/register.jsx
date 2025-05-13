import { Link } from "react-router-dom";
import {
IoPersonSharp,
HiOutlineCalendarDateRange,
Phone,
LockKeyhole,
MoveLeft
} from "./index";

function Register() {
    return(
        <div className="h-[100vh]">
            {/* Header */}
            <div className="bg-[#ffcb32] h-[250px]">
                <div className="pl-8 pt-10 text-white text-[20px] cursor-pointer">
                    <Link to='/login'><MoveLeft /></Link>
                </div>
                <div className="py-[2rem] sm:px-[6rem] sm:py-[3rem] md:px-[8rem] lg:px-[17rem]">
                    <h1 className="text-white text-2xl lg:text-3xl font-bold px-[2rem] mb-[12px]">Go ahead and set up your account</h1>
                    <p className="text-[#94A3B8] text-sm lg:text-lg px-[2rem]">Sign up-up to enjoy the best experience</p>
                </div>
            </div>
            <div className="bg-white rounded-t-4xl mt-[-1rem] py-[1rem] px-[1.5rem] md:px-[8rem] lg:px-[18rem]">
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