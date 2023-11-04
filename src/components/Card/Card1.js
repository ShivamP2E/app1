import Card from 'react-bootstrap/Card';
import './Card1.css'

function Card1() {
return (
    <>
    <div className='card-wrapper'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/magazine/thumb/1.jpg" />
    <Card.Body>
        <Card.Text><b>Bloomberg smart cities; change-makers economic security</b>
        </Card.Text>
        <p> 13th Jun 2021</p>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/magazine/thumb/2.jpg" />
    <Card.Body>
        <Card.Text><b>Medicine new approaches communities, outcomes partnership</b>
        </Card.Text>
        <p> 13th Jun 2021</p>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/magazine/thumb/3.jpg" />
    <Card.Body>
        <Card.Text>
        <b>Significant altruism planned giving insurmountable challenges liberal</b>
        </Card.Text>
        <p> 13th Jun 2021</p>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://canvastemplate.com/images/magazine/thumb/4.jpg" />
    <Card.Body>
        <Card.Text>
        <b>Compassion conflict resolution, progressive; tackle</b>
        </Card.Text>
        <p> 13th Jun 2021</p>
    </Card.Body>
    </Card>
    </div>
    </>
);
}

export default Card1;