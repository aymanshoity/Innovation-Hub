import { createBrowserRouter } from "react-router-dom";

import Sidebar from "../Components/Dashboard/Sidebar";
import InnovationHubUI from "../Components/Dashboard/InnovationHubUI";


const router = createBrowserRouter([
    {path:'/',
    element:<Sidebar></Sidebar>,
    children:[
        {path:'/',element:<InnovationHubUI></InnovationHubUI>}
    ]
}
])


export default router;