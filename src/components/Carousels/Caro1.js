import Carousel from "react-bootstrap/Carousel";
import "./caro1.css";

function Caro1() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-110"
          src="https://canvastemplate.com/images/services/home-testi-bg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>What Clients Say?</h3>
          <div className="Car-image">
            <img
              src="https://canvastemplate.com/images/testimonials/3.jpg"
              alt="person1"
            />
          </div>
          <p>
            Incidunt deleniti blanditiis quas aperiam recusandae consequatur
            ullam quibusdam cum libero illo rerum!
          </p>
          <h5>Steve Jobs</h5>
          <p>Apple Inc.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src="https://canvastemplate.com/images/services/home-testi-bg.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>What Clients Say?</h3>
          <div className="Car-image">
            <img
              src="https://canvastemplate.com/images/testimonials/2.jpg"
              alt="person2"
            />
          </div>
          <p>
          Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.
          </p>
          <h5>Collis Ta'eed</h5>
          <p>Envato Inc.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src="https://canvastemplate.com/images/services/home-testi-bg.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>What Clients Say?</h3>
          <div className="Car-image">
            <img
              src="https://canvastemplate.com/images/testimonials/1.jpg"
              alt="person3"
            />
          </div>
          <p>
          Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!
          </p>
          <h5>John Doe</h5>
          <p>XYZ Inc.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro1;
