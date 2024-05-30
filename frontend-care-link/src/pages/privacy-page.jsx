
import { Link } from "react-router-dom";

const Privacy = ()=>{
    return(
        <> 
        <div className="privacy">
            <div className="row">
                <div className="col-12">
                    <h3 style={{textAlign:'center', color:'red', marginBottom:"2rem"}}>Privacy Policy</h3>
                    <h6 style={{paddingLeft:'2rem'}}>Effective Date: May, 2024</h6>
                    <p>At Care-Link, we are committed to protecting your privacy. This Privacy Policy explains
                       how we collect, use, disclose, and safeguard your information when you use our web application and services. By using Care-Link,
                       you agree to the collection and use of information in accordance with this policy.
                    </p>


                    <h4>Information We Collect</h4>
                    <p><strong>Personal Information:</strong> We may collect personal information 
                       that you provide to us when you register for an account, use our Services, or contact us. This may include your name, email address, phone number, date of birth, 
                        health information, and any other information you choose to provide.
                    </p>
                    <p><strong>Usage Data:</strong>We may collect information on how the Services
                      are accessed and used. This data may include your IP address, browser type,
                      browser version, the pages of our Services that you visit, the time and date of your visit, the time spent
                      on those pages, unique device identifiers, and other diagnostic data.
                    </p>
                    <p><strong>Cookies and Tracking Technologies: </strong>  We use cookies and 
                     similar tracking technologies to track the activity on our Services and store 
                     certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do 
                      not accept cookies, you may not be able to use some parts of our Services.
                    </p>


                    <h4>How We Use Your Information</h4>
                    <p>We use the information we collect in the following ways:</p>
                    <p><strong>To provide and maintain our Services: </strong>Ensuring our Services function as
                       intended and providing support to users.
                    </p>
                    <p><strong>To improve our Services: </strong>Analyzing usage data to understand
                       how our Services are used and identifying areas for improvement.
                    </p>
                    <p><strong>To communicate with you: </strong> Sending you updates, promotional materials,
                       and other information related to our Services.
                    </p>
                    <p><strong>To manage your account: </strong>Providing access to features of the Services and managing user accounts.</p>
                    <p><strong>To comply with legal obligations:</strong>Ensuring compliance with applicable laws and regulations.</p>


                    <h4>How We Share Your Information</h4>
                    <p>We do not sell, trade, or otherwise transfer your personal information 
                       to outside parties without your consent, except in the following circumstances:
                    </p>
                    <ul>
                        <li><strong>Service Providers: </strong>We may employ third-party companies 
                          and individuals to facilitate our Services, provide the Services on our behalf, perform
                          Service-related services, or assist us in analyzing how our Services are used. These third parties have access to your personal information only to perform
                         these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </li>
                        <li><strong>Legal Requirements: </strong>We may disclose your personal information if required to do 
                           so by law or in response to valid requests by
                          public authorities (e.g., a court or a government agency).
                        </li>
                        <li><strong>Business Transfers: </strong>In the event of a merger, acquisition, or sale
                          of all or a portion of our assets, your personal information may be transferred. We will provide notice before your 
                          personal information is transferred and becomes subject to a different Privacy Policy.
                        </li>
                    </ul>


                    <h4> Security of Your Information</h4>
                    <p>We take reasonable measures to help protect your personal information from loss,
                       theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or method 
                       of electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h4>Your Data Protection Rights</h4>
                    <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                    <ul>
                        <li><strong>Access: </strong>You have the right to request copies of your personal information.</li>
                        <li><strong>Rectification: </strong>You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                        <li><strong>Erasure: </strong>You have the right to request that we erase your personal information, under certain conditions.</li>
                        <li><strong>Restrict Processing: </strong>You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
                        <li><strong>Data Portability: </strong>You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                    </ul>

                    <h4>Changes to This Privacy Policy</h4>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any 
                       changes by posting the new Privacy Policy on this page and updating the effective date. 
                       You are advised to review this Privacy Policy periodically for any changes. 
                       Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </div>
            </div>
                <Link to="/terms&conditions-page">
                   <button className="btn btn-primary" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Terms & Conditions</button>
                </Link>
        </div>
        </>
    )
}

export default Privacy;