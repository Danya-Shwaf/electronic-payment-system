import Header from "../components/Header";
import { FcGoogle, Phone, LockKeyhole } from "./index";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="h-[100vh]  w-full sm:w-3/4 m-auto sm:shadow-lg">
            {/* Header */}
            <Header />
            <div className="bg-white rounded-t-4xl mt-[-1rem] md:px-[6rem] md:pt-[2rem] sm:p-[3rem] p-[1rem] ">
                {/*  button login and register */}
                <div className="flex justify-around text-xl bg-[#e2e8f0] rounded-full shadow-md">
                <button className="border py-[10px] m-[6px] bg-white w-full rounded-full border-[#a3a3a3] cursor-pointer font-medium text-[15px]">
                    Login
                </button>
                <Link to="/register" className="w-full text-center">
                    <button className="py-[10px] m-[6px] rounded-full opacity-100 hover:opacity-75  w-full border-[#7e7e7e] cursor-pointer font-medium text-[15px] text-[#666667]">
                    Register
                    </button>
                </Link>
                </div>
                {/* Email and password */}
                <form action="" className="flex flex-col mt-[2rem] gap-[0.5rem]">
                <div className="w-full flex p-4 rounded-xl bg-white border border-[#a3a3a3]">
                    <Phone className="text-[#ffcb32] mx-4" />
                    <input
                    type="phone"
                    name="number"
                    id=""
                    placeholder="Phone Number"
                    className="w-full  focus:outline-none"
                    />
                </div>
                <div className="w-full flex p-4 rounded-xl bg-white border border-[#a3a3a3]">
                    <LockKeyhole className="text-[#ffcb32] mx-4" />
                    <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    className="w-full focus:outline-none"
                    />
                </div>
                <div className="flex justify-between w-full">
                    <div>
                    <input
                        type="checkbox"
                        value=""
                        className="mr-1 border-[#ffcb32] border"
                    />
                    <label htmlFor="">Remember me</label>
                    </div>
                    <div className="text-[#ffcb32] font-medium">
                    <a href="">Forget Password?</a>
                    </div>
                </div>
                <div className="w-full mt-3 cursor-pointer bg-[#ffcb32] text-lg font-medium text-white rounded-xl text-center p-4">
                    <Link to="/Home">Login</Link>
                </div>
                </form>
                {/* or login & google */}
                <div>
                <div className="flex justify-center my-3 gap-2">
                    <p className="tracking-[-2px] text-[#d4d7d9]">
                    -------------------
                    </p>
                    <p>Or login with</p>
                    <p className="tracking-[-2px] text-[#d4d7d9]">
                    -------------------
                    </p>
                </div>
                <div className="w-full cursor-pointer flex justify-center text-lg text-center md:mt-[3.4rem] rounded-4xl p-4 border-[#e5eaee] border-2">
                    <FcGoogle className="text-3xl mr-1" />
                    <button className="text-[#2d2d2d] font-medium">Google</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
