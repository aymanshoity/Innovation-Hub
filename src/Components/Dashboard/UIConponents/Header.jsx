import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";

const Header = () => {
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
    return (
        <div>
            <div className="flex flex-row items-center justify-between py-4">
                <div className="flex-1">
                    <h1 className="pl-4 text-xl font-medium">{searchedText}</h1>
                </div>
                <div className="flex flex-row items-center gap-2 justify-end">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input value={inputValue} onChange={handleSearch} onKeyPress={handleEnterKeyPress} type="text" className="grow" placeholder="Search" />

                    </label>
                    <div>
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