import { useCallback, useState,useRef } from "react";
import { NUM_ROWS,NUM_COLS,createEmptyGrid, dirMatrix } from "../utils/EmptyGrid";
import { twMerge } from "tailwind-merge";
import Button from "../components/Button";
import PlayPauseButton from "../components/PlayPauseButton";

   
  
function Grid() {

    const [grid, setGrid] = useState(createEmptyGrid());
    const [isRunning, setIsRunning] = useState(false);
     const [isMouseDown, setIsMouseDown] = useState(false);
    
   const runningRef = useRef(isRunning);
   runningRef.current = isRunning; 

    const playgame = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        setGrid((activeGrid) => {
            const newGrid = activeGrid.map((array) => [...array]);
            for (let row = 0; row < NUM_ROWS; row++) {
                for (let col = 0; col < NUM_COLS; col++) {
                    let activeCell = 0;
                    dirMatrix.forEach(([x, y]) => {
                        const nextRow = row + x;
                        const nextCol = col + y;
                    
                        if (nextRow >= 0 &&
                            nextRow < NUM_ROWS &&
                            nextCol >= 0 &&
                            nextCol < NUM_COLS
                        ) {
                            activeCell += activeGrid[nextRow][nextCol] ? 1 : 0;

                        }
                    }
                    )
                    if (activeCell < 2 || activeCell > 3) {
                        newGrid[row][col] = 0;
                    } else if (activeGrid[row][col] === 0 && activeCell === 3) {
                        newGrid[row][col] = 1;
                    }
                }
            }
            return newGrid;
        })
        setTimeout(playgame, 1000);

    }, [runningRef, setGrid]);
   
    function handleMouseDown() {
        setIsMouseDown(true);
    }

     function handleMouseUp() {
        setIsMouseDown(false);
    }

    function togglegrid(r,c) {
        const newGrid = grid.map((row, rowsIndex) => row.map((cell, colIndex) =>
            rowsIndex === r && colIndex === c
                ? cell
                    ? 0
                    : 1
                : cell
        ));
        setGrid(newGrid);
    }

    function handleClick(r, c) {
        if (isMouseDown) {
            togglegrid(r, c);
        }
    }
    
    return (
        <>
         <div className="flex gap-4 items-center">
          <Button
          onClick={() => {
            const rows = [];
            for (let i = 0; i < NUM_ROWS; i++) {
              rows.push(
                Array.from(Array(NUM_COLS), () => (Math.random() > 0.75 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}
        >
          Seed
                </Button>
                
         <PlayPauseButton playGame={playgame} isRunning={isRunning}
                    setIsRunning={setIsRunning} runningRef={runningRef} />
                
            <Button onClick={() => {
                setGrid(createEmptyGrid()); 
                setIsRunning(false);
            }}>
                Clear
                </Button>
                </div>
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
                                : "bg-black")}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseEnter={() => handleClick(rowsIndex, colIndex)}
                        onClick={()=> togglegrid(rowsIndex,colIndex)}
                    />
            )))
            }
            </div>
          
            </>

    )
        
    
    
}

export default Grid;

