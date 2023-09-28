import './Latestwork.css'

const Latestwork =() => {
    return(
        <div>
            <div className='row'>
                <div className='Latest-heading'>
                    <h1>Our Latest Work</h1>
                </div>
            </div>
            <div className='latest-wrapper'>
            <div className='row align-items-stretch'>
                <div className='col-3'>
                    <div className='latest-images'>
                    <img src='https://canvastemplate.com/images/portfolio/full/1.jpg' alt='pic1'/>
                    <img src='https://canvastemplate.com/images/portfolio/full/5.jpg'alt='pic1'/>
                    </div>
                </div>
                <div className='col-3'>
                <div className='latest-images'>
                <img src='https://canvastemplate.com/images/portfolio/full/2.jpg' alt='pic1'/>
                <img src='https://canvastemplate.com/images/portfolio/full/6.jpg' alt='pic1'/>
                </div>
                </div>
                <div className='col-3'>
                <div className='latest-images'>
                <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7P9Yua7LGzr9da5LgWQzmT-bw4CljlIsdeG8oa5xOEcIx_ffb'alt='pic1'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5RvLj9RNlCYSYNbb7iVcxtdcF3hHvdkZWFdhsOgtRjxWbfhe' alt='pic1'/>
                </div>
                </div>
                <div className='col-3'>
                <div className='latest-images'>
                <img src='https://canvastemplate.com/images/portfolio/full/4.jpg'alt='pic1'/>
                <img src='https://canvastemplate.com/images/portfolio/full/8.jpg'alt='pic1'/>
                </div>
                </div>
            </div>
            </div>
            <div className='row'>
                <div className='latest-footer'>
                    <h1> More than 100+ Predefined Portfolio Grid Layouts. <strong>See More</strong></h1>
                </div>
            </div>
        </div>
    );
}
export default Latestwork;