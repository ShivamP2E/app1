import './Contactcard.css';
import Card from 'react-bootstrap/Card';

function Contactcard() {
return (
    <>
    <div className='Card-wrap'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/team/3.jpg" />
    <Card.Body>
        <div className='Card-Content'>
        <h4>John Doe</h4>
        <h5>CEO</h5>
        </div>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/team/2.jpg" />
    <Card.Body>
        <div className='Card-Content'>
        <h4>JOSH CLARK</h4>
        <h5>Co-Founder</h5>
        </div>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/team/8.jpg" />
    <Card.Body>
        <div className='Card-Content'>
        <h4>MARY JANE</h4>
        <h5>Sales</h5>
        </div>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/team/4.jpg" />
    <Card.Body>
        <div className='Card-Content'>
        <h4>NIX MAXWELL</h4>
        <h5>Support</h5>
        </div>
    </Card.Body>
    </Card>
    </div>
    </>
);
}

export default Contactcard;