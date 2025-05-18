import './styles/App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'


function App(){
    return (
        <div className="app">
            <Navbar />
            <Home />
            <About />
            <Footer />
        </div>
    )
}

export default App;