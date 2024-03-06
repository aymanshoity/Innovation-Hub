import { GoPlus } from "react-icons/go";
import { FaRegSquarePlus } from "react-icons/fa6";
import { TiDownloadOutline } from "react-icons/ti";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsSortNumericDown } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
const Menubar = () => {
    return (
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
            <div>
                <ul className="menu menu-vertical lg:menu-horizontal ">
                    <li className="border rounded-lg mr-2">
                        <details>
                            <summary>
                                <a className="flex items-center gap-1 "><HiOutlineSquares2X2 />All brands</a>
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className="border rounded-lg mr-2">
                        <details>
                            <summary>
                                <a>Desk</a>
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className="border rounded-lg mr-2">
                        <details>
                            <summary>
                                <a>Tags</a>
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className=" border rounded-lg mr-2"><a><BsSortNumericDown />Sort</a></li>
                    <li className=" border rounded-lg"><a><CiFilter />Filter</a></li>
                </ul>
            </div>
            <div>
                <ul className="menu menu-vertical lg:menu-horizontal  ">
                    <li className=" border rounded-lg mr-2"><a><FaRegSquarePlus />Meeting</a></li>
                    <li className=" border rounded-lg"><a><TiDownloadOutline />Import/Export</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Menubar;