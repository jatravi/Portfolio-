import './styles/App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Projects'


function App(){
    return (
        <div className="app">
            <Navbar />
            <Home />
            <About />
            <Project />
            <Footer />
        </div>
    )
}

export default App;