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

    // team Routes
    const links = <>
        <div className=" border rounded-box ">
            {/* different route links */}
            <NavLink to='/designTeam'>
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><span className="flex gap-2 items-center  font-medium "><CiPen className=" text-md" />Design Team</span>
                    <button className="btn btn-sm"><TiPointOfInterest /><h1>+1</h1></button></a></li>

            </NavLink>
            <NavLink to='./marketingTeam'>
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><span className="flex gap-2 items-center  font-medium"><HiOutlineMegaphone className="text-md" />Marketing Team</span>
                    <button className="btn btn-sm"><TiPointOfInterest /><h1>+2</h1></button></a></li>
            </NavLink>
            <NavLink to='./developmentTeam'>
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><span className="flex gap-2 items-center  font-medium"><TbBracketsAngle className="text-md" />Development Team</span>
                    <button className="btn btn-sm"><TiPointOfInterest /><h1>+3</h1></button></a></li>
            </NavLink>
            <NavLink  className="flex gap-2 items-center  font-medium">
                <li className="mx-2"><a className=" flex flex-row items-center justify-between  "><CiSquarePlus className="text-md" />Create Team</a></li>
            </NavLink>
        </div>
    </>
    return (
        <div className="drawer lg:drawer-open  ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side border rounded-lg h-fit m-5 ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu  p-4 w-80  bg-white text-base-content ">
                    {/* Containg logo and user image */}
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
                    {/* Route Links */}
                    {links}
                    {/* folders */}
                    <div className="pt-5 flex flex-col justify-between">
                        <div className="mb-5">
                            <span className="flex flex-row justify-between items-center"><h1>FOLDERS</h1><button className="btn btn-sm">+</button></span>
                            <ul className="menu menu-vertical gap-2  ">
                                <li>
                                    <details className="flex flex-row justify-between">
                                        <summary>
                                            <a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Products</a>
                                        </summary>
                                        <ul className="p-2  rounded-t-none">
                                            <li><a>Roadmap </a></li>
                                            <li><a>Feedback</a></li>
                                            <li><a>Performance</a></li>
                                            <li><a>Team</a></li>
                                            <li><a>Analytics</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details className="flex flex-row justify-between">
                                        <summary>
                                            <a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Sales</a>
                                        </summary>
                                        <ul className="p-2  rounded-t-none">
                                            <li><a>Roadmap </a></li>
                                            <li><a>Link 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details className="flex flex-row justify-between">
                                        <summary>
                                            <a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Design</a>
                                        </summary>
                                        <ul className="p-2  rounded-t-none">
                                            <li><a>Roadmap </a></li>
                                            <li><a>Link 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details className="flex flex-row justify-between">
                                        <summary>
                                            <a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Office</a>
                                        </summary>
                                        <ul className="p-2  rounded-t-none">
                                            <li><a>Roadmap </a></li>
                                            <li><a>Link 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details className="flex flex-row justify-between">
                                        <summary>
                                        <a className="flex flex-row items-center  "><FaRegFolder className="mr-2" />Legal</a>
                                        </summary>
                                        
                                    </details>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <ul className="menu   rounded-box">
                                <li><a className="flex flex-row items-center  "><FiUserPlus className="mr-2" />Invite Teammates</a></li>
                                <li><a className="flex flex-row items-center justify-between "><span className="flex flex-row items-center"><FaRegQuestionCircle className="mr-2" />help and first steps</span><button className="btn btn-sm">0/6</button></a></li>
                                <li><a className="flex flex-row items-center  justify-between"><span className="flex flex-row items-center  ">
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