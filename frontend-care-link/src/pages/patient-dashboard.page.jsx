

// import { useContext, useState } from "react";
// import { UserContext } from "../App";
// import { Navigate, useNavigate } from "react-router-dom";
// import bgImage from "../assets/bg-image.png";

// const PatientDashboard = () => {
//     const [selectedDate, setSelectedDate] = useState('');
//     const [medicalHistory, setMedicalHistory] = useState('');
//     const navigate = useNavigate();

//     const handleDateChange = (event) => {
//         setSelectedDate(event.target.value);
//     };

//     const handleMedicalHistoryChange = (event) => {
//         setMedicalHistory(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!selectedDate || !medicalHistory) {
//             alert("All fields are required. Please fill in all fields.");
//             return;
//         }
//         navigate('/payment.page');
//     };

//     let { userAuth: { access_token, fullname, role } } = useContext(UserContext);
//     let characterLimit = 200;
//     const handleTitleKeyDown = (e) => {
//         if (e.keyCode === 13) { // enter key
//             e.preventDefault();
//         }
//     };

//     return (
//         access_token === null ? <Navigate to="/signin" /> :

//         <section className="h-cover mb-5">
//             <div>
//                 <p style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'blue', borderBottom: '3px solid black', paddingBottom: '2rem' }}>Welcome back {fullname}</p>
//                 <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'red', borderBottom: '2px solid black', paddingBottom: '1rem' }}>{role} dashboard</h5>
//             </div>

//             <div className="row">
//                 <div className="col-12">
//                     <img src={bgImage} style={{ width: '95px', display: 'block', margin: '0 auto' }} />
//                     <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem' }}>Welcome to Care-Link <br /> Your Bridge to Better Health</h5>
//                 </div>

//                 <div className="col-12" style={{ width: '100%', display: 'block', justifyContent: 'center', margin: '0 auto' }}>

//                     <form onSubmit={handleSubmit} style={{ textAlign: 'center', border: '5px solid red', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'blue', paddingLeft: "10px", paddingRight: '10px' }}>

//                         <div style={{ display: "flex", justifyContent: 'center', textAlign: 'center', gap: '20px', marginBottom: "2rem", marginTop: '3rem' }}>
//                             <label style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>Select Date and Time</label>
//                             <input type="datetime-local" value={selectedDate} onChange={handleDateChange} />
//                         </div>

//                         <div style={{ display: "flex", justifyContent: 'center', textAlign: 'center', gap: '20px', marginBottom: "2rem", marginTop: '3rem' }}>
//                             <label style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}> Medical History  </label>
//                             <textarea
//                                 maxLength={characterLimit}
//                                 value={medicalHistory}
//                                 onChange={handleMedicalHistoryChange}
//                                 className="h-40 resize-none leading-7 input-box2"
//                                 onKeyDown={handleTitleKeyDown}
//                             >
//                             </textarea>
//                         </div>
//                         <p className="text-white">Fee For Consultation -  10000</p>
//                         <button className="btn btn-primary mb-3" type="submit">Book Appointment</button>

//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default PatientDashboard;



// import { useContext, useState } from "react";
// import { UserContext } from "../App";
// import { Navigate, useNavigate } from "react-router-dom";
// import bgImage from "../assets/bg-image.png";
// import axios from 'axios'; // Add this line

// const PatientDashboard = () => {
//     const [selectedDate, setSelectedDate] = useState('');
//     const [medicalHistory, setMedicalHistory] = useState('');
//     const navigate = useNavigate();
//     let { userAuth: { access_token, fullname, role, userId } } = useContext(UserContext); // Add userId

//     const handleDateChange = (event) => {
//         setSelectedDate(event.target.value);
//     };

//     const handleMedicalHistoryChange = (event) => {
//         setMedicalHistory(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!selectedDate || !medicalHistory) {
//             alert("All fields are required. Please fill in all fields.");
//             return;
//         }
        
//         try {
//             const response = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/api/appointments' , {
//                 userId,
//                 date: selectedDate,
//                 medicalHistory
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${access_token}`
//                 }
//             });

//             if (response.status === 200) {
//                 navigate('/payment.page');
//             } else {
//                 alert('Error booking appointment.');
//             }
//         } catch (error) {
//             console.error('There was an error!', error);
//         }
//     };

//     let characterLimit = 200;
//     const handleTitleKeyDown = (e) => {
//         if (e.keyCode === 13) { // enter key
//             e.preventDefault();
//         }
//     };

//     return (
//         access_token === null ? <Navigate to="/signin" /> :

//         <section className="h-cover mb-5">
//             <div>
//                 <p style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'blue', borderBottom: '3px solid black', paddingBottom: '2rem' }}>Welcome back {fullname}</p>
//                 <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'red', borderBottom: '2px solid black', paddingBottom: '1rem' }}>{role} dashboard</h5>
//             </div>

//             <div className="row">
//                 <div className="col-12">
//                     <img src={bgImage} style={{ width: '95px', display: 'block', margin: '0 auto' }} />
//                     <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem' }}>Welcome to Care-Link <br /> Your Bridge to Better Health</h5>
//                 </div>

//                 <div className="col-12" style={{ width: '100%', display: 'block', justifyContent: 'center', margin: '0 auto' }}>

//                     <form onSubmit={handleSubmit} style={{ textAlign: 'center', border: '5px solid red', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'blue', paddingLeft: "10px", paddingRight: '10px' }}>

//                         <div style={{ display: "flex", justifyContent: 'center', textAlign: 'center', gap: '20px', marginBottom: "2rem", marginTop: '3rem' }}>
//                             <label style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>Select Date and Time</label>
//                             <input type="datetime-local" value={selectedDate} onChange={handleDateChange} />
//                         </div>

//                         <div style={{ display: "flex", justifyContent: 'center', textAlign: 'center', gap: '20px', marginBottom: "2rem", marginTop: '3rem' }}>
//                             <label style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}> Medical History  </label>
//                             <textarea
//                                 maxLength={characterLimit}
//                                 value={medicalHistory}
//                                 onChange={handleMedicalHistoryChange}
//                                 className="h-40 resize-none leading-7 input-box2"
//                                 onKeyDown={handleTitleKeyDown}
//                             >
//                             </textarea>
//                         </div>
//                         <p className="text-white">Fee For Consultation -  10000</p>
//                         <button className="btn btn-primary mb-3" type="submit">Book Appointment</button>

//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default PatientDashboard;


import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Navigate, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-image.png";
import axios from 'axios';

const PatientDashboard = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const navigate = useNavigate();
    const { userAuth } = useContext(UserContext);
    const { access_token, fullname, role, userId } = userAuth;

    console.log('User ID:', userId); // Add this line

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleMedicalHistoryChange = (event) => {
        setMedicalHistory(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedDate || !medicalHistory) {
            alert("All fields are required. Please fill in all fields.");
            return;
        }

        try {
            console.log('Sending data:', { userId, date: selectedDate, medicalHistory }); // Add this line

            const response = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/api/appointments', {
                userId,
                date: selectedDate,
                medicalHistory
            }, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });

            if (response.status === 201) {
                navigate('/payment.page'); // Use the correct path to the payment page
            } else {
                alert('Error booking appointment.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            if (error.response && error.response.status === 400) {
                alert('Validation error: ' + error.response.data.error);
            } else {
                alert('Error booking appointment.');
            }
        }
    };

    let characterLimit = 200;
    const handleTitleKeyDown = (e) => {
        if (e.keyCode === 13) { // enter key
            e.preventDefault();
        }
    };

    return (
        access_token === null ? <Navigate to="/signin" /> :

        <section className="h-cover mb-5">
            <div>
                <p style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'blue', borderBottom: '3px solid black', paddingBottom: '2rem' }}>Welcome back {fullname}</p>
                <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'red', borderBottom: '2px solid black', paddingBottom: '1rem' }}>{role} dashboard</h5>
            </div>

            <div className="row">
                <div className="col-12">
                    <img src={bgImage} style={{ width: '95px', display: 'block', margin: '0 auto' }} />
                    <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem' }}>Welcome to Care-Link <br /> Your Bridge to Better Health</h5>
                </div>

                <div className="col-12" style={{ width: '100%', display: 'block', justifyContent: 'center', margin: '0 auto' }}>
                    <h4 className="mt-5 mb-5 text-center fw-bold">Patient Appointment Booking</h4>
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow" style={{ background: 'white' }}>
                        <div className="mb-3">
                            <label htmlFor="appointmentDate" className="form-label">Select Appointment Date:</label>
                            <input type="date" className="form-control" id="appointmentDate" value={selectedDate} onChange={handleDateChange} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="medicalHistory" className="form-label">Medical History:</label>
                            <textarea
                                className="form-control"
                                id="medicalHistory"
                                rows="4"
                                maxLength={characterLimit}
                                placeholder="Provide brief medical history"
                                value={medicalHistory}
                                onChange={handleMedicalHistoryChange}
                                onKeyDown={handleTitleKeyDown}
                                required
                            ></textarea>
                            <div className="text-end">{characterLimit - medicalHistory.length} characters remaining</div>
                        </div>

                        <button type="submit" className="btn btn-primary">Book Appointment</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PatientDashboard;
