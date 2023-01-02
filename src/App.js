import logo from './logo.svg';
import './App.css';

function Grid ({gridWidth, gridHeight, children}){
  return(
    <div style = {{
      display: "grid",
      gridGap: "10px",
      gridTemplateColumns: `repeat(${gridWidth}, 100px)`,
      gridTemplateRows: `repeat(${gridHeight}, 100px)`,
      backgroundColor: "#afb",
      color: "#444",
      }}>
       {children}
    </div>
  )
}

function coordinates(x,y){
  return{
    gridColumn: x,
    gridRow: y,
  }

}

function Box({x,y,T,D,R,L}){
  return(
      <div style = {{
          ...coordinates(x,y),
          backgroundColor: "#bff",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",     
          gridTemplateRows: "1fr 1fr",      
          borderRadius: "5px"    
        }}>
          <div style = {{
          ...coordinates(1,1),          
          borderBottom: L? "#aaa 3px solid": undefined, 
          borderRight: T? "#aaa 3px solid": undefined, 
          //borderRadius: "5px"
          // backgroundColor: "#fff",          
        }}></div>
          <div style = {{
          ...coordinates(2,2),
          borderTop: R? "#aaa 3px solid": undefined, 
          borderLeft: D? "#aaa 3px solid": undefined,           
          //borderRadius: "5px"
          // backgroundColor: "#fff",          
        }}></div>

      </div>
  )
}

function App() {
  return (
    <Grid gridWidth={6} gridHeight={4}>
      <Box x={3} y={2} T R/>
      <Box x={3} y={3} T R/>

    </Grid>
  );
}

export default App;
