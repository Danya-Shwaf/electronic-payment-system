import { Link , Outlet } from "react-router-dom";
import { MoveRight } from "lucide-react";

function Main() {

    return (
    <div className="bg-primary h-[100vh]">
        <div>
            <img src="../../public/Logo.svg" alt="Logo" className="w-[400px] h-[400px] mx-auto "/>
        </div>
        <div className="text-icon cursor-pointer mt-16 px-4 py-2 lg:px-6 lg:py-2 border w-fit mx-auto rounded-md">
            <Link to='/Login'><MoveRight /></Link>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
    );
}
export default Main;