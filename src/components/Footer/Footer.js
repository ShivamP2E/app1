import "./Footer.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const FooterComp = () => {
return (
   <div>
    <div className="row bg-dark text-white " >
      {/* column one */}
       <div className="col-3 p-10">
        <div className="col1wrapper">
      <img src="https://canvastemplate.com/images/footer-widget-logo.png" alt="p1" />
      <ul>
        <li>
          We believe in Simple, Creative & <br />
          Flexible Design Standards.
        </li>
        <li>
          Headquarters: <br />
          795 Folsom Ave, Suite 600
          <br />
          San Francisco, CA 94107
        </li>
        <li>
          Phone: (1) 8547 632521 <br />
          Fax: (1) 11 4752 1433
          <br />
          Email: info@canvas.com
        </li>
      </ul>
    </div>
       </div>
    {/* Column 2 */}
    <div className="col-2">
    <div className="col2wrapper">
      <h3>BLOGROLL</h3>
      <ul>
        <li>Documentation</li>
        <li>Feedback</li>
        <li>Plugins</li>
        <li>Support Forms</li>
        <li>Themes</li>
        <li>Canvas Blog</li>
        <li>Canvas Planet</li>
      </ul>
    </div>
        </div>
    {/* Column 3 */}
    <div className="col-3">
    <div className="col3Wrapper">
      <h3>RECENT POSTS</h3>
      <ul>
        <li>
          <h5>
            Lorem ipsum dolor sit amet,
            <br /> consectetur
          </h5>
          <p>10th July 2021</p>
        </li>
        <li>
          <h5>
            Lorem ipsum dolor sit amet,
            <br /> consectetur
          </h5>
          <p>10th July 2021</p>
        </li>
        <li>
          <h5>
            Lorem ipsum dolor sit amet,
            <br /> consectetur
          </h5>
          <p>10th July 2021</p>
        </li>
      </ul>
      </div>
      </div>
    {/* column 4 */}
      <div className="col-4">
        <div className="col4wrapper">
        <div className="row">
        <div className="col-6">
          <h2>15,065,421</h2>
          <p>TOTAL DOWNLOAD</p>
        </div>
        <div className="col-6">
          <h2>18,465</h2>
          <hp>CLIENTS</hp>
        </div>
       </div>
    <div className="row">
       <div className="subscribewrapper">
        <p>
          Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:
        </p>
        </div>
    </div>
    <div className="row">
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="E-mail address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Subscribe
        </Button>
      </InputGroup>
    </div>
    <div className="row">
       
        <div className="col-6">
        <div className="socialwrap1">
        <div className="facebook-icon">
         <img src="https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png" alt="p1"/>
        </div>
        <div className="facebook-data">
            <p>Like Us</p>
            <p>on Facebook</p>
        </div>
        </div>
        </div>
        <div className="col-6">
        <div className="socialwrap1">
        <div className="Rss-icon">
        <img src="https://img.icons8.com/?size=48&id=13841&format=png" alt="p1"/>
        </div>
        <div className="Rss-data">
            <p>Subscribe</p>
            <p>to RSS feed</p>
        </div>
        </div>
        </div>
     </div>
     </div>
     </div>
    </div>
  </div>
);
};
export default FooterComp;
