import React, {useState} from "react";
import './App.css';

const App = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    if(matrix[index] === null){
      const newMatrix = [...matrix]
      newMatrix[index] = "green"
      setMatrix(newMatrix)
      setClickedBoxes([...clickedBoxes,index])

      if(clickedBoxes.length === 8){
        setTimeout(() => {
          const newMatrixOrange = Array(9).fill("orange")
          setMatrix(newMatrixOrange)
        }, 1000)
      }
    }
  };
  return (
    <div className="App">
     {matrix.map((color,index) => (
        <div key={index} className="box" style={{backgroundColor: color}} onClick={() => handleClick(index)}></div>
      ))}
    </div>
  );
};

export default App;
