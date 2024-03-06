import { FiPlus } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { PiNumberTwo } from "react-icons/pi";
const TableData = () => {
    return (
        <div>
            {/* This section will be shown in large screen only */}
            <div className="overflow-x-auto md:block hidden sm:block ">
                <table className="table border    mx-auto">
                    {/* head */}
                    <thead>
                        <tr >
                            <th className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />

                                Brand</span><span><FiPlus /></span></th>
                            <th className='border-r-2 '>Description</th>
                            <th className='border-r-2 '>Members</th>
                            <th className='border-r-2 '>Categories</th>
                            <th className='border-r-2 '>Tags</th>
                            <th className='border-r-2 '>Next meeting</th>
                            <th className='border-r-2 '>+</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/wix.png" alt="wix" />
                                    </div>
                                </div>
                                Wix</span><span className="flex justify-center"><LuMessagesSquare /><PiNumberTwo /></span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/google.png" alt="wix" />
                                    </div>
                                </div>
                                Google</span><span className="flex justify-center"><LuMessagesSquare /><PiNumberTwo /></span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">

                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-red-600 border-red-600   bg-red-200 ">E-commerce</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-blue-700 border-blue-700   bg-blue-200 ">Tomorrow</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/microsoft.png" alt="wix" />
                                    </div>
                                </div>
                                Microsoft</span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar placeholder">
                                        <div className="w-6 bg-yellow-200">
                                            <span>+2</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/wix.png" alt="wix" />
                                    </div>
                                </div>
                                Wix</span><span className="flex justify-center"><LuMessagesSquare /><PiNumberTwo /></span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/paypal.png" alt="wix" />
                                    </div>
                                </div>
                                PayPal</span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar placeholder">
                                        <div className="w-6 bg-pink-200">
                                            <span>+3</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/wix.png" alt="wix" />
                                    </div>
                                </div>
                                Wix</span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 7 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/shopify.png" alt="wix" />
                                    </div>
                                </div>
                                Shopify</span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 8 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/wix.png" alt="wix" />
                                    </div>
                                </div>
                                Wix</span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 9 */}
                        <tr>
                            <td className='flex flex-row items-center justify-between border-r-2 '><span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                                <div className="avatar">
                                    <div className="w-5 rounded">
                                        <img src="../../../../public/wix.png" alt="wix" />
                                    </div>
                                </div>
                                Wix</span></td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs"># Digital Transformation</button>
                            </td>
                            <td className='border-r-2 '>
                                <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 10 */}
                        <tr className='text-right'>
                            <td className='border-r-2 '>10 count</td>
                            <td className='border-r-2 '>Develops user-friendly websites..</td>
                            <td className='border-r-2 '>
                                <h1>+Add Calculation</h1>
                            </td>
                            <td className='border-r-2 '>
                                <h1>+Add Calculation</h1>
                            </td>
                            <td className='border-r-2 '>
                                <h1>+Add Calculation</h1>
                            </td>
                            <td className='border-r-2 '>
                                <h1>+Add Calculation</h1>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {/* mobile view section */}
            <div className=" block lg:hidden">
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
                <div className="m-5 border rounded-box p-2">

                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 > Brand</h1>
                        <span className='flex items-center gap-1'><input type="checkbox" className="checkbox checkbox-sm" />
                            <div className="avatar">
                                <div className="w-5 rounded">
                                    <img src="../../../../public/wix.png" alt="wix" />
                                </div>
                            </div>
                            Wix</span></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <span><h1 >Description</h1></span>
                        <span><h1>Develops user-friendly..</h1></span>
                    </span>
                    <span className=" mx-4 flex flex-row items-center justify-between"><h1>Members</h1>
                        <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-6">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div></span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1>Categories</h1>
                        <button className="btn btn-xs text-purple-700 border-purple-700  bg-purple-300">Automation</button>

                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Tags</h1>
                        <button className="btn btn-xs"># Digital Transformation</button>
                    </span>
                    <span className='mx-4 flex flex-row items-center justify-between pb-2'>
                        <h1 >Next meeting</h1>
                        <button className="btn btn-xs text-green-600 border-green-600  bg-green-200">in 30 minutes</button>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default TableData;