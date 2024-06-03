/* eslint-disable react/no-unescaped-entities */

import nurse1 from "../assets/nurse1.png"
import bgImage from '../assets/bg-image.png'
import bgImage2 from "../assets/bg-image2.png"
import bgImage3 from "../assets/bg-image3.png"
import bgImage4 from "../assets/bg-image4.png"
import brandlogo from '../assets/logo.png'
import { Link } from "react-router-dom"



const HomePage = () =>{

    return(
        <>
            <div className="home1" >
                <div className="row">
                <button className="btn btn-primary  " style={{cursor:'default'}}>Your Health Doesnt Wait, Neither Do We - Open 24/7</button>
                    <div className="col-12 col-md-6 mt-3 homeWrite" style={{display:'block', justifyContent:'center', textAlign:'center'}}>
                       <img src={bgImage} alt="background image" style={{width:'8rem'}}/>
                        <h1 style={{margin:"2rem", color:'lightskyblue'}}> Connect with the Right Doctor<br/> Right Now!</h1>
                        <button className="btn btn-primary mb-2" style={{cursor:'default'}}>Round-the-Clock Care, Just a Click Away</button>
                        <h5 className="mb-3 text-success">Seamless appointment booking</h5>
                        <Link to='/signin'><button className="btn btn-outline-primary">Book An Appointment</button></Link>
                    </div>
                    <div className="col-12 col-md-6 border1"  >
                            <img src={nurse1} alt="Image of a nurse"/>
                    </div>

                </div>
            </div>

            <div className="home2">
                <div className="row">
                    <div className="col-12 col-md-6">
                         <h2>"Excellence in Healthcare, Compassion in Service"</h2>
                         <h3>"Caring for You, Every Step of the Way"</h3>
                         <h4>"Your Trusted Partner in Health,<br/> Healing Hands, Caring Hearts"</h4>
                    </div>

                    <div className="col-12 col-md-6 ">
                        <img src={bgImage3} alt="Hospital picture" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>


            <div className="home3">
                <button className="btn btn-primary mt-3 mb-5" style={{cursor:'default', paddingTop:'1rem', paddingBottom:'1rem', fontSize:"2rem", color:'black', fontWeight:'600', margin:'0 auto', display:'flex', justifyContent:'center'}}> Testimonials</button>
                    
                <div className="row" style={{}}>
                   <div className="col-12 col-md-4 test">
                            <h6>I was initially skeptical about virtual healthcare, but my experience with care-link was
                               outstanding. The doctors were incredibly professional and thorough during my video consultations.
                               They listened attentively to my concerns, provided an accurate diagnosis, and even arranged for prescriptions 
                               to be sent directly to my pharmacy. The convenience and quality of care I received virtually were just 
                               as good as an in-person visit. Thank you, care-link, for making healthcare accessible and efficient!

                            </h6>
                             <p style={{fontWeight:'bold'}}>Sarah W</p>
                    </div>
                    <div className="col-12 col-md-4 test">
                        <h6>Care-link provided me with exceptional virtual care when I was unable to visit
                            the hospital in person. The technology used for the virtual appointments was seamless, and the
                            medical staff was well-prepared and attentive. I received a comprehensive evaluation and treatment
                            plan without leaving my home. The follow-up care was also top-notch, with regular check-ins to monitor my progress.
                            I am incredibly grateful for the convenience and effectiveness of the virtual care provided.
                        </h6>
                        <p style={{fontWeight:'bold'}}>John D.</p>
                    </div>
                    <div className="col-12 col-md-4 test">
                            <h6>My virtual care experience with care-link was beyond my
                             expectations. I had a video consultation with a specialist who was thorough,
                              knowledgeable, and compassionate. The entire process was smooth, from scheduling the
                               appointment to the follow-up. I felt confident in the care I received, and it was a relief to get the medical attention
                              I needed without the hassle of travel. Care-link has set a new standard for virtual healthcare.
                            </h6>
                            <p style={{fontWeight:'bold'}}> Emily R.</p>
                    </div>
                </div>
            </div>


            <div className="home4 pt-3 pb-3">
                <div className="row">
                     <div className="col-12 col-md-6 ">
                        <img src={bgImage4} alt="Ambulance picture" style={{width:'100%', height:'98%'}}/>
                    </div> 

                    <div className="col-12 col-md-6 ">
                        <img src={bgImage2} alt="zoom meeting picture" style={{width:'100%', height:'98%'}}/>
                    </div> 
                </div>
                   
            </div>

            <div className="footer">
                <div className="row">
                    <div className="col-12 col-md-4" style={{textAlign:'center'}}>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <img src={brandlogo} alt="Brand logo" style={{width:'65px',marginLeft:'2rem'}}/>
                            <h3 style={{marginLeft:'2rem'}}>Care-link</h3>
                        </Link>
                        <ul>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Phone: +23480112Care-link</li>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Email: Info@Care-link.com</li>
                            <li style={{paddingBottom:'0.9rem', color:'white', fontSize:"16px"}}>Address: care-link online Nigeria</li>
                        </ul>
                        <p style={{marginLeft:'rem',marginTop: '2rem', color:'white', fontSize:"18px"}}>Copyright: <br/> &copy;  2024. Care-link. All rights reserved.</p> 
                    </div>

                    <div className="col-12 col-md-4 about1">
                       <Link to="/About-page" style={{textDecoration:"none"}}> <h5>About Us</h5></Link>
                       <Link to="/how-to-use-page" style={{textDecoration:"none"}}><h5>How To Use</h5></Link> 
                    </div>

                    <div className="col-12 col-md-4 about1">
                        <Link to="/terms&conditions-page" style={{textDecoration:"none"}}><h5>Terms & Conditions</h5></Link>
                        <Link to="/contactUs-page" style={{textDecoration:"none"}}> <h5>Contact Us</h5></Link>
                     </div>

                </div>
            </div>
        </>
    )
}

export default HomePage;