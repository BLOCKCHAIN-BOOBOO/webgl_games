import React from "react";
import { Outlet } from 'react-router-dom';
import Sidebar from "./sidebar";

const SidebarLayout = () => {
return (

<div className="">
<Sidebar />
<Outlet />

</div>

);
};
    
export default SidebarLayout;