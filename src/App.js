
import './App.css';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Register from './Register.jsx';
import Section from './Section.jsx';
function App() {
  return (
    <div className='body'>
      <Navbar/>
      <Cards/>
      <Section/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default App;
