import "./Footer.css";
import React from "react";
const FooterComp = () => {
return (
   <div className="FooterWrapper">
    <div className="col1wrapper">
      <img src="https://canvastemplate.com/images/footer-widget-logo.png" />
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
    <div className="col3Wrapper">
      <h3>RECENT POSTS</h3>
      <ul>
        <li>
          <h4>
            Lorem ipsum dolor sit amet,
            <br /> consectetur
          </h4>
        </li>
        <li>
          {" "}
          <p>10th July 2021</p>{" "}
        </li>
        <li>
          <h4>
            Lorem ipsum dolor sit amet,
            <br /> consectetur
          </h4>
        </li>
        <li>
          <p>10th July 2021</p>
        </li>
        <li>
          <h4>
            Lorem ipsum dolor sit amet,
            <br /> consectetur
          </h4>
        </li>
        <li>
          <p>10th July 2021</p>
        </li>
      </ul>
    </div>
    <div className="col4wrapper">
    <div className="widgets">
        <div className="widget-1">
          <h1>15,065,421</h1>
          <h5>TOTAL DOWNLOAD</h5>
        </div>
        <div className="widget-1">
          <h1>18,465</h1>
          <h5>CLIENTS</h5>
        </div>
    </div>
    <div className="subscribewrapper">
        <p>
          Subscribe to Our Newsletter to get Important News, Amazing Offers{" "}
          <br></br> & Inside Scoops:
        </p>
    </div>
    <div className="subscribe-button">
        <div className="mail-icon">
            <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" />
        </div>
        <div className="inputbox">
            <input type="text"  ></input>
        </div>
        <div className="Sub-button">
            <p>Subscribe</p>
        </div>
    </div>
    <div className="Socialmedia">
        <div className="facebook">
        <div className="facebook-icon">
         <img src="https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png"/>
        </div>
        <div className="facebook-data">
            <h3>Like Us</h3>
             <p>on Facebook</p>
        </div>
        </div>
        <div className="Rss">
        <div className="Rss-icon">
        <img src="https://img.icons8.com/?size=48&id=13841&format=png" />
        </div>
        <div className="Rss-data">
            <h3>Subscribe</h3>
                <p>on RSS feed</p>
        </div>
        </div>
        
    </div>
    </div>
</div>
);
};
export default FooterComp;
