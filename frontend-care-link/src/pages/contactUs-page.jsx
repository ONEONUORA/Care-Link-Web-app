import bgImage5 from '../assets/bg-image5.png'
import { Link } from "react-router-dom";

const ContactUs = ()=>{
    return(
        <>
            <div className="contact" >
                <div className="row" style={{marginBottom:'2rem'}}>
                    <h3 style={{textAlign:'center', color:'red', marginBottom:"2rem"}}>Contact Us</h3>
                    <h2 style={{border:"2px solid white",textAlign:"center",fontWeight:"bold", backgroundColor:"blue", color:'white', paddingTop:'2rem', paddingBottom:"2rem"}}>NEED HELP!</h2>
                    <h6 style={{textAlign:'center'}}><i className="bi bi-arrow-right-short" style={{fontSize:"2rem", fontWeight:"bolder", color:"red"}}></i>Healthcare Without Limits: We are Open 24/7<i className="bi bi-arrow-left-short"style={{fontSize:"2rem", fontWeight:"bolder", color:"red"}}></i></h6>
                    <div className="col-12 col-md-6">
                        <img src={bgImage5} alt="Image of a nurse on call" style={{width:'100%', marginTop:"1.5rem"}}/>
                    </div>

                    <div className="col-12 col-md-6">
                            <p style={{textAlign:'center', color:"red", fontWeight:'bold', marginTop:"3.5rem"}}>Reach Our Support Team</p>
                            <div style={{display:'flex', gap:"20px", justifyContent:'center'}}>
                                <div className='mt-1'style={{borderRight:"5px solid white"}}>
                                   <p style={{paddingRight:"3rem", fontWeight:'bolder',color:"blue"}}>SEND A MESSAGE</p>
                                        <a href='mailto:onuorabube44@gmail.com?subject=Inquiry%20about%20your%20services&body=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."'>
                                            <i className="bi bi-envelope" style={{fontSize:'2rem', marginRight:"2rem"}}></i>
                                        </a>
                                       <a href="https://wa.me/2349072611604" target="_blank"><i className="bi bi-whatsapp" style={{fontSize:'2rem'}}></i></a> 
                                </div>

                                <div className='mt-1'>
                                    <p style={{paddingRight:"3rem", fontWeight:'bolder',color:"blue"}}>CALL US</p>
                                    <ul>
                                        <li>09012345care-link</li>
                                        <li>07098756Care-link</li>
                                        <li>08065312Care-link</li>
                                    </ul>
                                </div>
                                
                            </div>
                            
                    </div>
                </div>
                <Link to="/">
                   <button className="btn btn-primary" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Home</button>
                </Link>
            </div>
        </>
    )
}

export default ContactUs;