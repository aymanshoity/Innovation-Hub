import { useState } from "react";
import Header from "./UIConponents/Header";
import Menubar from "./UIConponents/Menubar";
import TableData from "./UIConponents/TableData";


const InnovationHubUI = () => {
    // for capturing the value from the header section
   const [valueFromHeader,setValueFromHeader]=useState('')
   
    const handleValueChange=(input)=>{
        console.log(input)
        if(input ==="Products"){
            setValueFromHeader(input)
        }else{
            setValueFromHeader('')
        }
        
    }

    return (
        <div className="border rounded-lg m-5">
            {/* contains the Search bar  */}
            <Header onValueChange={handleValueChange}></Header>
            {/* menubar */}
            <Menubar></Menubar>
            {/* for showing the desired UI only for Specific Searched Text */}
            {valueFromHeader? <TableData></TableData>:<h1 className=" text-center py-20 text-3xl">Welcome</h1>}
        </div>
    );
};

export default InnovationHubUI;