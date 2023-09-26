import './App.css';
import FooterComp from './components/Footer/Footer';
import NavbarComp from './components/Navbar/Navbar';
import BodySection1 from './components/Body/BodySection1';
// import FooterEnd from './components/Footer/FooterEnd';

function App() {
   
  return (
    <>
    <NavbarComp/>
        <div className='section-1'>
        <BodySection1/>
        </div>
        <div>
        <FooterComp/>
       {/* <FooterEnd/> */}
       </div>
    </>
     
  );
}

export default App;
