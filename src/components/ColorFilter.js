import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ColorPage from "./ColorPage";

const ColorFilter = ({colors}) =>{
    const { color } = useParams();
    const colorName = color.toLocaleLowerCase()

    if(colors[colorName]){
        return (
            <ColorPage
                color={colorName}
            />
        )
    }
    return <Navigate to="/colors" />
}

export default ColorFilter;