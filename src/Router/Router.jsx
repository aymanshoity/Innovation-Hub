import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import InnovationHubUI from "../Components/Dashboard/InnovationHubUI";


const router = createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    children:[
        {path:'/',element:<InnovationHubUI></InnovationHubUI>}
    ]
}
])


export default router;