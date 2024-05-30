import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import bgImage from "../assets/bg-image.png"
import axios from "axios";


const PatientDashboard = () =>{

    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDoctorSpecialization, setSelectedDoctorSpecialization] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch doctors data from API
        axios.get('/api/doctors')
            .then(response => setDoctors(response.data))
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    const handleDoctorChange = (event) => {
        const selectedDoctorId = event.target.value;
        const doctor = doctors.find(doctor => doctor._id === selectedDoctorId);
        setSelectedDoctor(selectedDoctorId);
        setSelectedDoctorSpecialization(doctor.specialization);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleMedicalHistoryChange = (event) => {
        setMedicalHistory(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/appointments', {
                doctor: selectedDoctor,
                doctorSpecialization: selectedDoctorSpecialization,
                appointmentDate: selectedDate,
                medicalHistory: medicalHistory
            });
            setAppointments([...appointments, response.data]);
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

        let {userAuth: {access_token, fullname, role} } = useContext(UserContext)
        let characterLimit = 200;
        const handleTitleKeyDown = (e) =>{
         
            if(e.keyCode == 13){//enter key
              e.preventDefault();
  
            }
          }

    return(
        access_token === null ? <Navigate to="/signin"/>
        :
        <section className="h-cover">
                <div >
                    <p style={{textTransform:'capitalize', textAlign:'center', fontWeight:'bold', color:'blue', borderBottom:'3px solid black', paddingBottom:'2rem'}}>Welcome back {fullname}</p>
                    <h5 style={{textTransform:'capitalize', textAlign:'center', fontWeight:'bold', color:'red', borderBottom:'2px solid black', paddingBottom:'1rem'}}>{role} dashboard</h5>
                </div>

                <div className="row">
                    <div className="col-12">
                        <img src={bgImage} style={{width:'95px', display:'block' , margin:'0 auto'}}/>
                        <h5 style={{textTransform:'capitalize', textAlign:'center', fontWeight:'bold', marginTop:'2rem', marginBottom:'2rem'}}>Welcome to Care-Link <br/> Your Bridge to Better Health</h5>
                    </div>

                    <div className="col-12" style={{width:'100%', display:'block', justifyContent:'center', margin:'0 auto'}}>
                   
                            <form onSubmit={handleSubmit} style={{ textAlign:'center' ,border:'5px solid red',borderTopRightRadius:'2rem',borderBottomLeftRadius:'2rem', paddingTop:'10px', paddingBottom:'10px', backgroundColor:'blue', paddingLeft:"10px", paddingRight:'10px'}}>

                                        <div style={{display:"flex", justifyContent:'center',textAlign:'center',gap:'20px', marginBottom:"2rem", marginTop:'1rem'}}>
                                                 <label style={{fontSize:'1.1rem', fontWeight:'bold', color:'white'}}> Select Doctor </label>  
                                                 <select value={selectedDoctor} onChange={handleDoctorChange}>
                                                       <option value="">Select Doctor</option>
                                                          {Array.isArray(doctors) && doctors.map(doctor => (
                                                        <option key={doctor._id} value={doctor._id} >
                                                                      {doctor.name} - {doctor.specialization}
                                                        </option>
                                                         ))}
                                                 </select>
                                        </div>
                              
                                   
                                  
                                     <div style={{display:"flex", justifyContent:'center',textAlign:'center',gap:'20px', marginBottom:"2rem", marginTop:'3rem'}}>
                                                    <label style={{fontSize:'1.1rem', fontWeight:'bold', color:'white'}}>Select Date and Time</label>
                                                     <input type="datetime-local" value={selectedDate} onChange={handleDateChange}  />
                                      </div>
                             

                                        <div style={{display:"flex", justifyContent:'center',textAlign:'center',gap:'20px', marginBottom:"2rem", marginTop:'3rem'}}>
                                                    <label style={{fontSize:'1.1rem', fontWeight:'bold', color:'white'}}> Medical History  </label>
                                                    {/* <textarea value={medicalHistory} onChange={handleMedicalHistoryChange}  rows="3" style={{borderRadius:"5%"}}/> */}
                                                    <textarea
                                                            maxLength={characterLimit}  
                                                            value={medicalHistory}  
                                                            onChange={handleMedicalHistoryChange} 
                                                            className="h-40 resize-none leading-7 input-box2"
                                                            onKeyDown={handleTitleKeyDown}
                                                    >
                                                   </textarea>
                                        </div>       
                                            <p>Fee For Consultation: 5000</p>

                                       <button className="btn btn-primary" type="submit">Book Appointment</button>
                         </form>
     
                </div>
                   <h2>Appointments</h2>
                     <ul>
                        {appointments.map(appointment => (
                                <li key={appointment._id}>
                                   Doctor: {appointment.doctor}, Specialization: {appointment.doctorSpecialization}, Date: {appointment.appointmentDate}
                                </li>
                         ))}
                     </ul>
             

            </div>

               
        </section>
    )
}

export default PatientDashboard;