
import { Link } from "react-router-dom";

const HowToUse =()=>{
    return(
        <>
           <div className="howtouse">
                 <div className="row">
                             <div className="col-12">
                                <h3 style={{textAlign:'center', color:'red', marginBottom:"2rem"}}>How To Use</h3>

                                <p>Welcome to Care-Link! Our web app is designed to connect patients with healthcare providers seamlessly.
                                  Follow this guide to make the most of our services.</p>
                                
                                <h4><strong>Creating an Account</strong></h4>
                                <ol>
                                    <li><strong>Visit the Sign-Up Page: </strong>Navigate to the sign-up page from the homepage.</li>
                                    <li><strong>Register: </strong>Enter your personal details, including name, email, and password. Choose whether you are signing up as a patient or a doctor.</li>
                                    <li><strong>Verify Email: </strong>Check your email for a verification link. Click the link to verify your email address and activate your account</li>
                                </ol>


                                <h4><strong>Logging In</strong></h4>
                                <ol>
                                    <li><strong>Visit the Login Page: </strong>Navigate to the login page from the homepage.</li>
                                    <li><strong>Enter Credentials: </strong>Enter your registered email and password.</li>
                                </ol>


                                <h4><strong>Setting Up Your Profile</strong></h4>
                                <ol>
                                    <li><strong>Access Profile Settings: </strong>Once logged in, go to the profile settings section.</li>
                                    <li><strong>Complete Your Profile: </strong>Fill in additional details such as your contact information, medical history (for patients), or specialties and availability (for doctors).</li>
                                    <li><strong>Upload Profile Picture: </strong>Add a profile picture to personalize your account.</li>
                                </ol>


                                <h4><strong>Booking Appointments (For Patients)</strong></h4>
                                <ol>
                                    <li><strong>Search for Doctors: </strong>Use the search function to find doctors based on specialty, location, and availability.</li>
                                    <li><strong>View Doctor Profiles: </strong>Click on a doctor’s profile to view more details, including their qualifications, experience, and available appointment slots.</li>
                                    <li><strong>Book an Appointment: </strong>Select an available time slot and click "Book Appointment." You will receive a confirmation email with the appointment details.</li>
                                </ol>

                                <h4><strong> Managing Appointments (For Doctors)</strong></h4>
                                <ol>
                                    <li><strong>View Appointments: </strong>Navigate to your dashboard to see a list of upcoming appointments.</li>
                                    <li><strong>Update Availability: </strong>Adjust your available time slots in your profile settings to keep your calendar up to date.</li>
                                    <li><strong>Consultation Reminders: </strong>Receive reminders for upcoming consultations to ensure timely attendance.</li>
                                </ol>
                             
                                <h4><strong>Virtual Consultations</strong></h4>
                                <ol>
                                    <li><strong>Join a Meeting: </strong>On the day of your appointment, log in to Care-Link and navigate to your dashboard.</li>
                                    <li>Start Consultation: Click the "Join Meeting" button next to your appointment. This will open a Zoom meeting where you can conduct your virtual consultation.</li>
                                    <li><strong>End Meeting: </strong>After the consultation, you can end the meeting and add any notes or follow-up actions in the system.</li>
                                </ol>

                                <h4><strong>Secure Messaging</strong></h4>
                                <ol>
                                    <li><strong>Access Messages: </strong>Go to the messaging section in your dashboard.</li>
                                    <li><strong>Send a Message: </strong>Select a contact (doctor or patient) and type your message. Click "Send" to communicate securely.</li>
                                    <li><strong>Receive Notifications: </strong>Get notifications for new messages to stay updated with ongoing communications.</li>
                                </ol>

                                <h4><strong>Uploading and Viewing Medical Documents</strong></h4>
                                <ol>
                                    <li><strong>Upload Documents: </strong>Navigate to the documents section and click "Upload." Select the file you wish to upload (e.g., medical scans, prescriptions) and add a description.</li>
                                    <li><strong>View Documents: </strong>Access your uploaded documents anytime from your profile or dashboard. Doctors can also view documents uploaded by their patients.</li>
                                </ol>
                             
                                <h4><strong>Making Payments</strong></h4>
                                <ol>
                                    <li><strong>Appointment Fees: </strong>If an appointment requires payment, you will be prompted to complete the transaction during the booking process.</li>
                                    <li><strong>Payment Methods: </strong>Enter your payment details securely. We accept various payment methods, including credit/debit cards and online payment gateways.</li>
                                    <li><strong>Payment Confirmation: </strong>After successful payment, you will receive a confirmation email and receipt.</li>
                                </ol>


                                <h4><strong>Support and Assistance</strong></h4>
                                <ol>
                                    <li><strong>Help Center: </strong>Visit our Help Center for FAQs, tutorials, and guides on using Care-Link.</li>
                                    <li><strong>Contact Support: </strong>If you need further assistance, contact our
                                     <Link to='/contactUs-page'> support team.  </Link>
                                      We are here to help with any questions or issues.</li>
                                </ol>
                             </div>

                 <Link to="/">
                      <button className="btn btn-primary" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Home</button>
                </Link>
                </div>
           </div>
        </>
    )
}

export default HowToUse;