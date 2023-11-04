import './blogcard.css'
import Card1 from '../Card/Card1';
import Contactcard from '../Card/Contactcard';

const Blogcard1 =() => {
    return (
        <>
        <div className='row'>
            <div className='blog-header'>
                <h2>Latest from the Blog</h2>
            </div>
        </div>
        <div className='container'>
            <Card1/>
        </div>
        <div className='row'>
            <div className='card-head'>
                <h2>Meet Our Team</h2>
            </div>
                <div className='container'>
                <Contactcard/>
                </div>
        </div>
        </>
    );
}
export default Blogcard1;