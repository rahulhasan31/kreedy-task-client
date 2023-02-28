import Home from "../Home/Home";
import Main from "../Main/Main";
import Login from "../shared/Login";
import Register from "../shared/Register";



const { createBrowserRouter } = require("react-router-dom");



const route=createBrowserRouter([
   {
    path:'/',
    element:<Main/>,
    children:[
        {
            path:"/home",
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
    ]
   }
    
])


export default route