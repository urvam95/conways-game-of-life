
import Grid from "./page/Grid";
  
function App() {

  
  return (
    // className="h-screen w-screen flex justify-center p-4 bg-black-500 "
    <div className="h-screen w-screen flex justify-center  p-4 relative">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
       [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#204abc_100%)]">
        
            </div>

      <h1 className="md:text-2xl text-xl">
        Conway's Game of Life
      </h1>
       
      <div className="flex gap-4 justify-self-stretch " >
      <Grid />
      </div>

      
      </div>

      
   
  )
}

export default App;
