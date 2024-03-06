import { NavLink, Outlet } from "react-router-dom";
import { CiPen } from "react-icons/ci";
import { TbBracketsAngle } from "react-icons/tb";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { TiPointOfInterest } from "react-icons/ti";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiNumberSquareSeven } from "react-icons/pi";
const Sidebar = () => {

    const links = <>
        <div className=" border rounded-box ">
            <NavLink >
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><span className="flex gap-2 items-center  font-medium "><CiPen className=" text-md" />Design Team</span>
                    <button className="btn btn-sm"><TiPointOfInterest /><h1>+1</h1></button></a></li>

            </NavLink>
            <NavLink >
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><span className="flex gap-2 items-center  font-medium"><HiOutlineMegaphone className="text-md" />Marketing Team</span>
                    <button className="btn btn-sm"><TiPointOfInterest /><h1>+2</h1></button></a></li>
            </NavLink>
            <NavLink >
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><span className="flex gap-2 items-center  font-medium"><TbBracketsAngle className="text-md" />Development Team</span>
                    <button className="btn btn-sm"><TiPointOfInterest /><h1>+3</h1></button></a></li>
            </NavLink>
            <NavLink className="flex gap-2 items-center  font-medium">
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><CiSquarePlus className="text-md" />Create Team</a></li>
            </NavLink>
        </div>
    </>
    return (
        <div className="drawer lg:drawer-open  ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                {/* flex flex-col items-center justify-left */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side border rounded-lg max-h-screen m-5">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu  p-4 w-80  bg-white text-base-content  ">
                    <div className="flex flex-row items-center justify-between p-4 ">
                        <div className="flex gap-4">
                            <img src="../../../public/logo.png" alt="" />
                            <div>
                                <h1>INC</h1>
                                <h1 className="font-medium">InnovateHub</h1>
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    {/* Sidebar content here */}
                    {links}
                    <div className="pt-5">
                        <div >
                            <span className="flex flex-row justify-between items-center"><h1>FOLDERS</h1><button className="btn btn-sm">+</button></span>
                            <div tabIndex={0} className="collapse collapse-arrow">
                                <div className="collapse-title  font-medium">
                                    <li><a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Products</a></li>
                                </div>
                                <div className="collapse-content">

                                    <li className="">Roadmap </li>
                                    <li className="">feedback </li>
                                    <li className="">Performance </li>
                                    <li className="">Team </li>
                                    <li className="">Analytics </li>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow">
                                <div className="collapse-title  font-medium">
                                    <li><a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Sales</a></li>
                                </div>
                                <div className="collapse-content">
                                    <li className="">Roadmap </li>
                                    <li className="">feedback </li>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-arrow">
                                <div className="collapse-title  font-medium">
                                    <li><a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Design</a></li>
                                </div>
                                <div className="collapse-content">
                                    <li className="">Roadmap </li>
                                    <li className="">feedback </li>
                                </div>
                            </div>
                            <div >
                                <div className="collapse-title  font-medium">
                                    <li><a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Office</a></li>
                                </div>

                            </div>
                            <div>
                                <div className="collapse-title  font-medium">
                                    <li><a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Legal</a></li>
                                </div>

                            </div>
                        </div>
                        <div>
                            <ul className="menu   rounded-box">
                                <li><a className="flex flex-row items-center  "><FiUserPlus className="mr-2" />Invite Teammates</a></li> 
                                <li><a className="flex flex-row items-center justify-between "><span className="flex flex-row items-center"><FaRegQuestionCircle className="mr-2" />help and first steps</span><button className="btn btn-sm">0/6</button></a></li> 
                                <li><a className="flex flex-row items-center  justify-between"><span  className="flex flex-row items-center  ">
                                <PiNumberSquareSeven className="mr-2" />days left on trial</span><button className="btn text-white bg-black btn-sm">Add billing</button></a></li> 
                                
                            </ul>
                        </div>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;