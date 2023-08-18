import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NewColor.css"

const NewColor = ({addColor}) =>{
    const [formData, setFormData] = useState({
        colorName: "",
        colorVal: "",   
    });

    const navigate = useNavigate ();

    // Handle modification of form values
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData, 
            [name]: value
        }))
    }

    // Handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault()
        const {colorName, colorVal} = formData;
        let newColor = [colorName.toLocaleLowerCase(), colorVal];
        addColor(newColor);
        navigate("/colors")
    }
    
    return (
        <div className="NewColor">
            <form className="nc-form">
                <div className="form-group">
                    <label htmlFor="colorName" >Color name: </label>
                    <input 
                        type="text"
                        name="colorName"
                        value={formData.colorName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="colorVal" >Color value: </label>
                    <input 
                        type="color"
                        name="colorVal"
                        value={formData.colorVal}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Add this color</button>
            </form>
        </div>
    )
}

export default NewColor;