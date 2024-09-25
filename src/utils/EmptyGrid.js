export const WIDTH = 300;
export const HEIGHT = 500;
export const Grid_Size = 10;
export const NUM_ROWS = WIDTH / Grid_Size;
export const NUM_COLS = HEIGHT / Grid_Size;

   
 export const createEmptyGrid = () => Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(0));
  

