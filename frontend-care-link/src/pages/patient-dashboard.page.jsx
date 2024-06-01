

import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Navigate, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-image.png";

const PatientDashboard = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleMedicalHistoryChange = (event) => {
        setMedicalHistory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedDate || !medicalHistory) {
            alert("All fields are required. Please fill in all fields.");
            return;
        }
        navigate('/payment.page');
    };

    let { userAuth: { access_token, fullname, role } } = useContext(UserContext);
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

                    <form onSubmit={handleSubmit} style={{ textAlign: 'center', border: '5px solid red', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'blue', paddingLeft: "10px", paddingRight: '10px' }}>

                        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'center', gap: '20px', marginBottom: "2rem", marginTop: '3rem' }}>
                            <label style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>Select Date and Time</label>
                            <input type="datetime-local" value={selectedDate} onChange={handleDateChange} />
                        </div>

                        <div style={{ display: "flex", justifyContent: 'center', textAlign: 'center', gap: '20px', marginBottom: "2rem", marginTop: '3rem' }}>
                            <label style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}> Medical History  </label>
                            <textarea
                                maxLength={characterLimit}
                                value={medicalHistory}
                                onChange={handleMedicalHistoryChange}
                                className="h-40 resize-none leading-7 input-box2"
                                onKeyDown={handleTitleKeyDown}
                            >
                            </textarea>
                        </div>
                        <p className="text-white">Fee For Consultation -  10000</p>
                        <button className="btn btn-primary mb-3" type="submit">Book Appointment</button>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default PatientDashboard;

