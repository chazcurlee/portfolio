import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { Grid } from '@mui/material';
import Info from './info/Info';
import Nav from './components/Nav';



function App() {
  

  

  return (
    <div className="App">
      
      <div className="d-flex flex-column justify-content-center w-100 h-100">

	    <div className="d-flex flex-column justify-content-center align-items-center">
		
		
			<Nav />
		
	
      <Grid container 
        direction="column"
        justifyContent="center"
        alignItems="center">
          
        <Grid item sx={{marginTop: '5vh'}}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about-me' element={<AboutMe Info={Info}/>} />
            <Route path='/contact' element={<Contact Info={Info}/>} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Grid>
      </Grid>
      </div>
      </div>
    </div>
  );
}

export default App;
