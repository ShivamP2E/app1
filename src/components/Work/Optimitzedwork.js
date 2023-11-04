import Caro1 from '../Carousels/Caro1';
import './Optimizedwork.css';
import Button from 'react-bootstrap/Button';

const Optimizedwork =() => {
    return(
        <div>
            <div className='container'>
                <div className='optimized-wrapper'>
                <div className='row'>
                <div className='col-5'>
                    <div className='opt-image'>
                        <img src='https://canvastemplate.com/images/services/iphone6.png ' alt='phone'/>
                    </div>
                </div>
                <div className='col-7'>
                    <div className='optimize-cont'>
                        <div className='content-heading'>
                        <h2>Optimized for Mobile & Touch Enabled Devices.</h2></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur quibusdam, enim expedita sed quia nesciunt incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic, obcaecati, ullam, laboriosam!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vero, animi suscipit id facere officia. Aspernatur, quo, quos nisi dolorum aperiam fugiat deserunt velit rerum laudantium cum magnam.</p>
                        <div className='Opt-button' >
                        <Button variant="outline-dark"><strong>Learn More</strong></Button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
                <div className='row'>
                    <Caro1/>
                </div>
        </div>
    );
}
export default Optimizedwork;