
import { Link } from "react-router-dom";


const About =()=>{
    return(
        <>
            <div className="about">
                <div className="row">
                        <h3 style={{textAlign:'center', color:'red', marginBottom:"2rem"}}>About Us</h3>
                    <div className="col-12">
                        <h4>Welcome to Care-Link!</h4>
                        <p>At Care-Link, we believe in transforming the way healthcare is
                         accessed and delivered. Our mission is to bridge the gap between doctors
                         and patients through innovative technology, ensuring that quality healthcare
                          is just a click away.</p>

                          <h4>Who We Are</h4>
                          <p>Care-Link is a cutting-edge web application designed to connect patients
                              with healthcare professionals seamlessly. Our platform provides a comprehensive solution
                             for managing health appointments, consultations, and communications, all in one place. 
                             We are dedicated to making healthcare more accessible, efficient, and patient-centered.
                          </p>

                        <h4>Our Vision</h4>
                        <p>We envision a world where everyone has easy access to quality healthcare services,
                          regardless of their location. Our goal is to eliminate barriers to healthcare by leveraging technology, 
                           making it easier for patients to find the right doctors, book appointments, and receive the care they need.
                        </p>

                        <h4>Our Commitment</h4>
                        <p>At Care-Link, we are committed to enhancing the healthcare experience for both patients and doctors.
                           We strive to provide a platform that is reliable, user-friendly, and constantly evolving to meet the needs of our users.
                           Your health and well-being are our top priorities, and we are dedicated to supporting you every step of the way.
                        </p>

                        <h4>Join Us on Our Journey</h4>
                        <p>Discover the future of healthcare with Care-Link. Join us in our mission to
                           make healthcare more accessible and efficient.
                           Together, we can create a healthier world, one connection at a time.
                        </p>
                    </div>
                </div>

                <Link to="/">
                   <button className="btn btn-primary" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Home</button>
                </Link>
            </div>
        </>
    )
}

export default About;