import { useEffect, useRef, useState } from "react";
import { NUM_ROWS,NUM_COLS,createEmptyGrid } from "../utils/EmptyGrid";
import { twMerge } from "tailwind-merge";
   
  
function Grid() {

    const [grid, setGrid] = useState(createEmptyGrid());
    console.log(grid);
    const [isRunning, setIsRunning] = useState(false);
    const runningRef = useRef(isRunning);
    runningRef.current = isRunning;
    
  


    
    return (
        <div
            style= {{
                display: "grid",
                gridTemplateColumns: `repeat( ${NUM_COLS},20px)`,
                gridTemplateRows: `repeat (${NUM_ROWS},20px)`,
            }
            }
        >
            {grid.map((rows, rowsIndex) =>
                grid.map((cols, colIndex) => (
                    <button key={`${rowsIndex}-${colIndex}`}
                        className={twMerge("border border-cyan-900",
                            grid[rowsIndex][colIndex] ? "bg-cyan-300"
                            : "bg-black")} />
            )))
            }
        </div>

    )
        
        // <canvas
        // width={800}
        // height={800}
        // className="bg-purple-950 "
        // ref={canvasRef}
        // >

        //     </canvas>
        
   
    
    
}

export default Grid;

// useEffect(() => {
//     if (canvasRef.current) {
//         const ctx = canvasRef.current.getContext("2d");
//         if (!ctx) return;

//         ctx.clearRect(0, 0, WIDTH, HEIGHT);
//         ctx.strokeStyle = "gray";

//         for (let row=0; row < NUM_ROWS; row++){
//             for (let col = 0; col < NUM_COLS; col++){
               
                
//             }
//         }


//     }
// },[])






 // const toggleCell = (rows, cols) => {
    //     const newGrid = [...grid];
    //     newGrid[rows][cols] = grid[rows][cols] ? 0 : 1;
    //     setGrid(newGrid);
    // };
    // return (
    //      <div className="grid grid-cols-20 gap-1">
    //   {grid.map((row, rowIndex) => (
    //     <div key={rowIndex} className="flex">
    //       {row.map((cell, colIndex) => (
    //         <div
    //           key={colIndex}
    //           onClick={() => toggleCell(rowIndex, colIndex)}
    //           className={`w-5 h-5 ${
    //             cell ? 'bg-black' : 'bg-white'
    //           }`}
    //         />
    //       ))}
    //     </div>
    //   ))}
    //     </div>
    // )