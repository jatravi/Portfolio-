import './styles/App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Projects'
import TechStack from './pages/TechStack'
import Contact from './pages/Contact'


function App(){
    return (
        <div className="app">
            <Navbar />
            <Home />
            <About />
            <Project />
            <TechStack />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;