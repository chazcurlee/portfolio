import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Info from './info/Info';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav';




function App() {
  
  let [classState, setClassState] = useState("hidden");
  let [aniState, setAniState] = useState("")
  let [buttonClassState, setButtClassState] = useState("name-grow btn");
  let [nameState, setNameState] = useState("Software Engineer.");
  let [bgState, setBgState] = useState('')
  
  useEffect(() => {
    if (classState != "hidden") {setBgState('bg')}
    if (classState === "hidden") {setBgState('')}
  }, [classState])


  return (
    <div className="App">
      <div className={bgState}></div>
      <div className={`${bgState} bg2`}></div>
      <div className={`${bgState} bg3`}></div>
		
		

        <Nav aniState={aniState}
          setAniState={setAniState}
          setClassState={setClassState}
          setButtClassState={setButtClassState}
          classState={classState}
          buttonClassState={buttonClassState}
          nameState={nameState}
          setNameState={setNameState}
          className={`topper`}
          />
	

        <Routes>
          {/* <Route path='/' element={<Landing aniState={aniState} setAniState={setAniState} setClassState={setClassState} setButtClassState={setButtClassState} classState={classState} buttonClassState={buttonClassState} nameState={nameState} setNameState={setNameState}/>} /> */}
          <Route path='/about-me' element={<AboutMe Paper={<Paper />} Divider={<Divider />} Info={Info}/>} />
          <Route path='/contact' element={<Contact Info={Info}/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer classState={classState}/>

    </div>

  );
}

export default App;
