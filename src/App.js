import { useEffect, useState } from 'react';
import './App.css';
import RouteList from './components/RouteList';
import { useLocation } from 'react-router-dom';

function App() {
  const INITIAL_COLORS = {
      red: "#FF0000",
    green: "#00FF00",
     blue: "#0000FF",
    black: "#000000",
    white: "#FFFFFF",
  }

  const [pageColor, setPageColor] = useState("#FFFFFF")
  const [colors, setColors] = useState(INITIAL_COLORS);

  const location = useLocation();

  const addColor = (newColor) =>{
    const [name, value] = newColor;
    setColors(prevColors => ({
      ...prevColors,
      [name]: value
    }))
  }


  // Update page color every render
  useEffect(()=>{
    // Extract all character after "colors/"
    let currPage = location.pathname.substring(8)

    if(currPage){
      setPageColor(colors[currPage])
    } else{
      setPageColor("#FFFFFF")
    }
  })

  const isNewColorPage = () =>{
    let bg = pageColor; 
    if(location.pathname === "/colors/new"){
      bg = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
    }
    return bg;
  }
  
  return (
    <div className="App" style={{
        minHeight:"100vh",
        background: isNewColorPage()
        }}>
      <RouteList colors={colors} addColor={addColor}/>
    </div>
  );
}

export default App;
