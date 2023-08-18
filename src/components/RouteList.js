import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ColorFilter from "./ColorFilter";
import { Navigate } from "react-router-dom";
import NewColor from "./NewColor";


const RouteList = ({colors, addColor}) =>{
    return (
        <>
            <Routes>
                <Route
                    path="/colors"
                    element={ <Home colors={colors} /> }
                />
                <Route
                    path="/colors/:color"
                    element={ <ColorFilter colors={colors}/> }
                />
                <Route
                    path="/colors/new"
                    element={ <NewColor addColor={addColor}/> }
                />
                <Route
                    path="*"
                    element={ <Navigate to="/colors" /> }
                />
            </Routes>
        </>
    )
}

export default RouteList;