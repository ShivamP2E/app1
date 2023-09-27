import './App.css';
import FooterComp from './components/Footer/Footer';
import NavbarComp from './components/Navbar/Navbar';
import BodySection1 from './components/Body/BodySection1';
// import FooterEnd from './components/Footer/FooterEnd';
import BodySection2 from './components/Body/BodySection2';
import BodySection3 from './components/Body/BodySection3';
import Feature1 from './components/Feature/Feature1';
import Feature2 from './components/Feature/Feature2';
import Feature3 from './components/Feature/Feature3';

function App() {
  return (
    <>
    <NavbarComp/>
        <div className='section-1'>
        <BodySection1/>
        </div>
        <div className="section-2">
          <BodySection2/>
          <BodySection3/>
          <Feature1/>
          <Feature2/>
          <Feature3/>
        </div>
        <FooterComp/>
       {/* <FooterEnd/> */}
    </>
  );
}

export default App;
