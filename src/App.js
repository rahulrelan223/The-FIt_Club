import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reason from './components/Reasons/Reason';
import Testmonials from './components/Testomonials/Testmonials';
function App() {
  return (
    <>
    <div className="App">
      <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>  
      <Testmonials/> 
      <Join/>
      <Footer/>
       </div>
    </>
  );
}

export default App;
