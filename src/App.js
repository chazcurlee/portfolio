import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Grid from '@mui/material/Grid';
import Info from './info/Info';
import Nav from './components/Nav';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'




function App() {
  
  let [classState, setClassState] = useState("hidden");
  let [buttonClassState, setButtClassState] = useState("name-grow btn");
  let [bgState, setBgState] = useState('')
  
  useEffect(() => {
    if (classState != "hidden") {setBgState('bg')}
  }, [classState])


  return (
    <div className="App">
      <div className={bgState}></div>
      <div className={`${bgState} bg2`}></div>
      <div className={`${bgState} bg3`}></div>
      
      {/* <div className="d-flex flex-column justify-content-center w-100 h-100">

	    <div className="d-flex flex-column justify-content-center align-items-center"> */}
		
		
			<Nav />
		
	
      {/* <Grid container 
        direction="column"
        justifyContent="center"
        alignItems="center">
          
        <Grid item sx={{marginTop: '5vh'}}> */}
          <Routes>
            <Route path='/' element={<Landing setClassState={setClassState} setButtClassState={setButtClassState} classState={classState} buttonClassState={buttonClassState}/>} />
            <Route path='/about-me' element={<AboutMe Paper={<Paper />} Divider={<Divider />} Info={Info}/>} />
            <Route path='/contact' element={<Contact Info={Info}/>} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        {/* </Grid>
      </Grid> */}
      </div>
    //   </div>
    // </div>
  );
}

export default App;
