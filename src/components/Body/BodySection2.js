import './BodySection2.css';
// Body Section 3 : this contains the welcome and mobile images
const BodySection2 = () => {
    return(
        <>
        <div className='container'>
            <div className='container-wrapper'>
            <div className='row align-items-center'>
                <div className='col-5 '>
                    <div className='welcome-content'>
                        <h1>Welcome to Canvas.<br></br>MultiPurpose <br></br>Template.</h1>
                        <hr></hr>
                        <p className='wel-cont'>Create a website that you are gonna be proud of. Be it Business, Portfolio, Agency, Photography, eCommerce & much more.</p>
                    </div>
                </div>
                <div className='col-7'>
                    <div className='position-relative overflow-hidden '>
                    <div className='welcome-image'>
                        <img src='https://canvastemplate.com/images/services/main-fmobile.png' alt='welcome-img'/>
                        <img src='https://canvastemplate.com/images/services/main-fbrowser.png' alt='welcome-img2' className='position-absolute'/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default BodySection2;