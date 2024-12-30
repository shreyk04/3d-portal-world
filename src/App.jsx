import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useLocation, useRoute } from "wouter";

function App() {

 

  return (
    <>
      
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }} style={{height:"90vh"}}>
        {/* <color attach="background" args={["#ececec"]} /> */}
        <Experience />
      </Canvas>

      <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '20px' ,textDecoration:"none"}} href="#" onClick={() =>{setLocation('/')
        console.log(params);
        
      } }>Double click to enter and exit portal </a>
    </>
  );
}

export default App;
