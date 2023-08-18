import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css"

const Home = ({colors}) =>{
    return (
        <>
            <div className="Home-top">
                <h2>Welcome to the color factory</h2>
                <h1>
                    <Link to="/colors/new">Add a color</Link>
                </h1>
            </div>
            <div className="Home-bottom">
                <p>Please select a color</p>
                {Object.keys(colors).map((c, idx)=>
                    <Link key={idx} to={`/colors/${c.toLowerCase()}`}>
                        <li>{c.toUpperCase()}</li>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Home;