
import { Link } from "react-router-dom";

const TermsConditions = ()=>{
    return(
        <>
            <div className="terms">
                <div className="row">
                    <div className="col-12">
                    <h3 style={{textAlign:'center', color:'red', marginBottom:"2rem"}}>Terms & Conditions</h3>
                        <h6 style={{paddingLeft:'2rem'}}>Last Updated: May, 2024</h6>

                        <p>Welcome to Care-Link! These terms and conditions  govern your use of our 
                           website and services . By accessing or using Care-Link,
                           you agree to comply with and be bound by these Terms. Please read them carefully.
                        </p>

                        <h4>Acceptance of Terms</h4>
                        <p>By accessing or using our Services, you acknowledge that you have read, 
                          understood, and agree to be bound by
                          these Terms. If you do not agree to these Terms, please do not use our Services.
                        </p>

                        <h4>Description of Services</h4>
                        <p>Care-Link provides a platform that connects patients with healthcare providers
                          for appointments, virtual consultations, messaging, and more. Our Services include, but are not limited to, 
                          appointment booking, secure messaging, virtual consultations, and storage of medical documents.</p>

                        <h4>Eligibility</h4>
                        <p>To use Care-Link, you must be at least 18 years old or have the consent of a parent or legal guardian. 
                          By using our Services, you represent and warrant that you meet these eligibility requirements.
                        </p>

                        <h4>Account Registration</h4>
                        <p>To access certain features of Care-Link, you must create an account. You agree to:</p>

                        <ul>
                            <li>Provide accurate, current, and complete information during the registration process.</li>
                            <li>Maintain and promptly update your account information.</li>
                            <li>Keep your password secure and confidential.</li>
                            <li>Notify us immediately of any unauthorized use of your account.</li>
                        </ul>

                        <h4>Use of Services</h4>
                        <p>You agree to use Care-Link in accordance with these Terms and all applicable
                         laws and regulations. You agree not to:
                        </p>

                        <ul>
                            <li>Use the Services for any unlawful purpose.</li>
                            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
                            <li>Interfere with or disrupt the operation of the Services.</li>
                        </ul>

                        <h4>Privacy</h4>
                        <p>Your privacy is important to us. Please review our 
                            <Link to='/privacy-page'> Privacy Policy  </Link>
                             to understand
                           how we collect, use, and protect your personal information.
                        </p>

                        <h4>User Content</h4>
                        <p>You may submit content, including but not limited to, medical
                           documents and messages through the Services. You retain ownership of any
                            intellectual property rights that you hold in that content. By submitting content,
                           you grant Care-Link a worldwide, non-exclusive, royalty-free license to use, reproduce, modify,
                           adapt, publish, and display such content for the purpose of providing and improving the Services.
                        </p>

                        <h4>Termination</h4>
                        <p>We reserve the right to terminate or suspend your account and access
                           to the Services at our sole discretion, without notice, for conduct that we
                           believe violates these Terms or is harmful
                           to other users of the Services, us, or third parties, or for any other reason.
                        </p>

                        <h4> Limitation of Liability</h4>
                        <p>To the fullest extent permitted by law, Care-Link and its affiliates,
                         officers, employees, agents, partners, and licensors will not be liable for 
                         any indirect, incidental, special, consequential, or punitive damages, or any loss of 
                         profits or revenues, whether incurred directly or 
                         indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                        </p>
                        <ul>
                            <li>Your use of or inability to use the Services.</li>
                            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                            <li>Any interruption or cessation of transmission to or from the Services.</li>
                            <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Services by any third party.</li>
                            <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Services.</li>
                        </ul>

                        <h4>Governing Law</h4>
                        <p>These Terms will be governed by and construed in accordance with the laws of
                           Nigeria, without regard to its conflict of law principles.
                        </p>

                        <h4>Changes to Terms</h4>
                        <p>We reserve the right to modify these Terms at any time. We will notify you of 
                           any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes.
                           Changes to these Terms are effective when they are posted on this page.
                        </p>

                        <h4>Contact Us</h4>
                        <p>If you have any questions about these Terms, please
                           <Link to='/contactUs-page'> contact us.</Link>
                           <br/>
                           By using Care-Link, you acknowledge that you have read and understood these Terms and agree to be bound by them.
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

export default TermsConditions;