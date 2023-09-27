import './Feature1.css';
//  Contains features page which is devided into three section this section includes the mobile phone and images around it.

const Feature1 =() =>{
    return(
        <>
        <div className='container'>
        <div className='row'>
            <div className='row-wrap'>
                <h1>Even more Feature Rich</h1>
                <p>Philanthropy convener livelihoods, initiative end hunger gender rights local.<br/> John Lennon storytelling; advocate, altruism impact catalyst.</p>
                </div>
        </div>
        <div className='row'>
            <div className='col-4'>
            <div className='box1-wrapper'>
                <div className='feature-box'>
                    <div className='f-img'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtd4Z-DxCEzY8WnBVCljXQJVRNALiarJNI8RggToUndv4-GON' alt='Mobilephone'/>
                    </div>
                    <div className='f-cont'>
                        <h4>Boxed & Wide Layout</h4>
                        <p>Stretch your Website to the Full Width or<br></br> make it boxed to surprise your visitors.</p>
                    </div>
                </div>
                <div className='feature-box'>
                    <div className='f-img'>
                    <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmJHWeGr8XUq6vVvWxvVgvRMosF0oRrFbAUlOyGWU4fQ3KemNX' alt='Mobilephone'/>
                    </div>
                    <div className='f-cont'>
                        <h4>Extensive Documentation</h4>
                        <p>We have covered each & everything in our Docs including Videos & Screenshots.</p>
                    </div>
                </div>
                <div className='feature-box'>
                    <div className='f-img'>
                    <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7V4Aha7ihUnao09YvSo35xPQLhEPRjnNWm1uUTrIoI8GmHpx7' alt='Mobilephone'/>
                    </div>
                    <div className='f-cont'>
                        <h4>Parallax Support</h4>
                        <p>Display your Content attractively using Parallax Sections with HTML5 Videos.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='col-4 '>
                <div className='phone-img'>
                <img src='https://canvastemplate.com/images/services/iphone7.png' alt='Mobilephone'/>
                </div>
                
            </div>
            <div className='col-4'>
            <div className='box2-wrapper'>
                <div className='feature1-box'>
                    <div className='f-img1'>
                    <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQARALL7PAtBQy97YH3Y4bOKVWpgvuvt-NUhB9qXUqcatu30B-a' alt='Mobilephone'/>
                    </div>
                    <div className='f-cont1'>
                        <h4>HTML5 Video</h4>
                        <p>Canvas provides support for Native HTML5 Videos that can be added to a Background.</p>
                    </div>
                </div>
                <div className='feature1-box'>
                    <div className='f-img1'>
                    <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPUGQhn1DqCbMxB0QKHWlUdEfqSFh-r3l8Wa0W94Boizi3edQw' alt='Mobilephone'/>
                    </div>
                    <div className='f-cont1'>
                        <h4>Endless Possibilities</h4>
                        <p>Complete control on each & every element that provides endless customization.</p>
                    </div>
                </div>
                <div className='feature1-box'>
                    <div className='f-img1'>
                    <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRquVbGTUPtkUf5JezKo9lV5Bf83X4H17GrB3XSGpnns7lpcUGI' alt='Mobilephone'/>
                    </div>
                    <div className='f-cont1'>
                        <h4>Light & Dark Color Schemes</h4>
                        <p>Change your Website's Primary Scheme instantly by simply adding the dark class.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Feature1;