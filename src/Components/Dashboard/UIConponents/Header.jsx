import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { MdOutlineMenu } from "react-icons/md";
const Header = ({onValueChange}) => {
    const [inputValue, setInputValue] = useState('');
    const [searchedText, setSearchedText] = useState('')
    const handleSearch = (e) => {
        setInputValue(e.target.value)

    }
    const handleEnterKeyPress = (e) => {

        if (e.key === "Enter") {
            e.preventDefault()
            setSearchedText(e.target.value)
        }
    }
    onValueChange(searchedText)
    return (
        <div>
            <div className="flex md:flex-row flex-col items-start justify-between py-4">
                <div className="flex-1 flex flex-row gap-2 items-center justify-start pb-5">
                    <label htmlFor="my-drawer-2" className="mx-4 btn  drawer-button lg:hidden "><MdOutlineMenu /></label>
                    {/* Searched Text */}
                    <h1 className="pl-4 text-xl font-medium">{searchedText}</h1>
                </div>
                <div className="pl-4 flex flex-col md:flex-row md:items-center gap-2 md:justify-end ">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        {/* Search Input */}
                        <input value={inputValue} onChange={handleSearch} onKeyPress={handleEnterKeyPress} type="text" className="grow ml-2" placeholder="Search" />

                    </label>
                    <div >
                        <kbd className="kbd kbd-lg bg-white btn mr-2"><TiMessages /></kbd>
                        <kbd className="kbd kbd-lg bg-white btn mr-2"><CiSettings /></kbd>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;