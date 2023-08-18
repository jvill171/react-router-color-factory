import React from "react";
import { Link } from "react-router-dom";
import '../styles/ColorPage.css'

const ColorPage = ({color}) =>{
    
    return (
        <div className="ColorPage">
            <div className="message">
                <h1>THIS PAGE IS {color.toUpperCase()}, ISN'T IT BEAUTIFUL?</h1>
                <Link to={`/colors`}>
                    <h1>BACK HOME</h1>
                </Link>
            </div>
        </div>
    )
}

export default ColorPage;