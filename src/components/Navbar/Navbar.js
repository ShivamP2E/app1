
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className='logo-image'>
          <img src='https://canvastemplate.com/images/logo-dark@2x.png' alt='p1'/>
         </div>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">FEATURES</Nav.Link>
            <Nav.Link href="#action2">PAGES</Nav.Link>
            <Nav.Link href="#action2">PORTFOLIO</Nav.Link>
            <Nav.Link href="#action2">BLOG</Nav.Link>
            <Nav.Link href="#action2">SHOP</Nav.Link>
            <Nav.Link href="#action2">SHORTCODES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <div className='navbar-icons'>
          <a   href='#home' id="top-search-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search text-white " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></a> 
           <a   href='#home' id="top-search-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="" fill="currentColor" class="bi bi-bag text-white " viewBox="0 0 16 16">
           <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg></a> 
            
          </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

























// import "./Navbar.css";
// import Navbar from "react-bootstrap/Navbar";
// const NavbarComp = () => {
//   return (
//     <Navbar fluid>
//         <div className="nav-contentwrapper">
//             <div className="nav-logowrapper">
//               <img src="https://canvastemplate.com/images/logo-dark.png" alt="p1"/>
//             </div>
//             <div className="List-wrapper">
//               <ul>
//                 <li>
//                   <b>HOME</b>
//                 </li>
//                 <li>
//                   <b>FEATURES</b>
//                 </li>
//                 <li>
//                   <b>PAGES</b>
//                 </li>
//                 <li>
//                   <b>PORTFOLIO</b>
//                 </li>
//                 <li>
//                   <b>BLOG</b>
//                 </li>
//                 <li>
//                   <b>SHOP</b>
//                 </li>
//                 <li>
//                   <b>SHORTCODES</b>
//                 </li>
//               </ul>
//               </div>
//             <div className="Nav-imagewrapper">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-bag-check"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
//                 />
//                 <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-search"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//               </svg>
//             </div>
//         </div>
//     </Navbar>
//   );
// };
// export default NavbarComp;
