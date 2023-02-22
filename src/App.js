import './App.css';
import './index.css'
import "./styles/Main.css"
import {Route, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Landing from './pages/Landing';
import Main from './pages/Main';


function App() {
  
  const [open, setOpen] = useState("")
  const [scroll, setScroll] = useState("hidden")
  let [scrollVal, setScrollVal] = useState(0)
  
  useEffect(() => {

    const countScroll = () => {
      setScrollVal(window.scrollY)
    }

    window.addEventListener("scroll", countScroll)

    if (scrollVal > 500) {
      setScroll("scroll-fade-in")
    }

    if (scrollVal < 500) {
      setScroll("scroll-fade-out")
    }

    return () => {window.removeEventListener("scroll", countScroll)}
  }, [scrollVal])

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  
  return (
   <div className='App'>
     <Routes>
       <Route path="/" element={<Landing open={open} setOpen={setOpen}/>} />
       <Route path="/portfolio" element={<Main setOpen={setOpen} />} />
     </Routes>
    <span className={`${scroll} scroll-up`}>
      <div className="clickable">
      <lord-icon
        onClick={handleScrollToTop}
        src="https://cdn.lordicon.com/ygydemai.json"
        trigger="hover"
        colors="primary:#dddddd,secondary:#08a88a"
        style={{width:"5rem", height:"5rem"}}>
      </lord-icon>
      </div>
    </span>
   </div>

  )
}

export default App;