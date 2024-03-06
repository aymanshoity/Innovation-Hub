import { createBrowserRouter } from "react-router-dom";

import Sidebar from "../Components/Dashboard/Sidebar";
import InnovationHubUI from "../Components/Dashboard/InnovationHubUI";
import ErrorPage from "../Components/ErrorPage";


const router = createBrowserRouter([
    {path:'/',
    element:<Sidebar></Sidebar>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',element:<InnovationHubUI></InnovationHubUI>}
    ]
}
])


export default router;