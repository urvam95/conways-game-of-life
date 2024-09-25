
import { twMerge } from "tailwind-merge";
import Grid from "./page/Grid";

function App() {
  
  return (
    // className="h-screen w-screen flex justify-center p-4 bg-black-500 "
    <div className="h-screen w-screen flex justify-center p-4 bg-black-500 ">
      <h1 className="md:text-2xl text-xl text-center mt-4 ">
        Conway's Game of Life
      </h1>
      <div  className="flex justify-center">

      <Grid/>
      </div>

      
      </div>

      
   
  )
}

export default App;
