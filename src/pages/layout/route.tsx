import {Route, Routes} from "react-router-dom";
import React, {useContext} from "react";
import {Context} from "../../context";
import { Logout } from "../login/logout";


export const RouteLayout = () => {
    const context = useContext(Context)

    return (
         <Routes>
             <Route path={'/logout'} element={<Logout/>}/>
         </Routes>
    )
}