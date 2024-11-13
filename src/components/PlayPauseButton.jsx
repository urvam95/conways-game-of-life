// import { useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci"
import { twMerge } from "tailwind-merge"


function PlayPauseButton({playGame,isRunning,setIsRunning,runningRef}) {
    
    function handlePlayPause(e) {
        e.preventDefault();
        setIsRunning(!isRunning);
        if (!isRunning) {
            runningRef.current = true;
        }
        playGame();
        
  }
    return (
        <button
            className={twMerge(
        "transition ease-in flex items-center justify-center h-8 w-8 rounded-full shadow-md",
        isRunning
          ? "bg-gray-700 hover:bg-gray-800"
          : "bg-green-500 hover:bg-green-700"
      )}
      onClick={handlePlayPause}
        >
            {
                isRunning ? <CiPause1 className=" h-6 w-6" />
                    : <CiPlay1 className=" h-6 w-6" /> 
            }

        </button>
        
    )
}

export default PlayPauseButton
