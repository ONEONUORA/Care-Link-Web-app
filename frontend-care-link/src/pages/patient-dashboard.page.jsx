
import { useContext, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, Navigate } from "react-router-dom";
import bgImage from "../assets/bg-image.png";
import { UserContext } from '../App';

const PatientDashboard = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(moment().format("HH:mm"));
  const [details, setDetails] = useState("");
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const { userAuth: { access_token, role, fullname, email } } = useContext(UserContext);

  //*********************************************for seeing appointment************************************************
  useEffect(() => {
    const fetchAppointments = async () => {
      const loadingToast = toast.loading('Fetching appointments...');
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/appointments/patient`, {
          headers: {
            Authorization: `Bearer ${access_token}`
          },
          params: { email }
        });

       const sortedAppointments = response.data.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB - dateA;
      });
     setAppointments(sortedAppointments);
    toast.dismiss(loadingToast);
    } catch (error) {
    toast.dismiss(loadingToast);
    }
   };

    fetchAppointments();
  }, [access_token, email]);


  //**********************************************************************for booking******************************************** */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointment = {
      user: { fullname, email },
      date: moment(date).format('YYYY-MM-DD'),
      time,
      details,
    };

    if (moment(date).isBefore(moment(), 'day')) {
      return toast.error('Please select a date in the future.');
    }

    if (moment(date).isSame(moment(), 'day') && moment(time, 'HH:mm').isBefore(moment(), 'minute')) {
      return toast.error('Please select a time in the future.');
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/api/appointments`, appointment, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });

      setDate(new Date());
      setTime(moment().format("HH:mm"));
      setDetails("");
      toast.success('Appointment booked successfully!');
      console.log(response)

      setTimeout(() => {
        navigate("/payment.page");
      }, 2000);

    } catch (error) {
      toast.error('There was an error booking the appointment! Please try again.');
    }
  };

  let characterLimit = 1000;
  const handleTitleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  if (access_token === null) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <section className="h-cover mb-5">
        <div>
          <p style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'blue', borderBottom: '3px solid black', paddingBottom: '2rem' }}>Welcome back {fullname} </p>
          <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'red', borderBottom: '2px solid black', paddingBottom: '1rem' }}>{role} dashboard</h5>
        </div>

        <div className="row">
          <div className="col-12">
            <img src={bgImage} style={{ width: '95px', display: 'block', margin: '0 auto' }} alt="Background" />
            <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem' }}>Welcome to Care-Link <br /> Your Bridge to Better Health</h5>
          </div>

          <div className="col-12" style={{ width: '100%', display: 'block', justifyContent: 'center', margin: '0 auto' }}>
            <h4 className="mt-1 mb-3 text-center fw-bold">Patient Appointment Booking</h4>
            <Toaster />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className='input-box1'
                  type="text"
                  value={fullname}
                  disabled={true}
                  style={{textTransform:'capitalize'}}
                />

                <input
                  className='input-box1'
                  type="text"
                  value={email}
                  disabled={true}
                />
              </div>

              <div className='input-box1'>
                <DatePicker className='input-box1' selected={date} onChange={(date) => setDate(date)} />
              </div>

              <div className='mt-3'>
                <input
                  className='input-box1'
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div>
                <textarea
                  className='input-box1'
                  value={details}
                  placeholder='Reason for consultation'
                  onChange={(e) => setDetails(e.target.value)}
                  rows="4"
                  maxLength={characterLimit}
                  onKeyDown={handleTitleKeyDown}
                  required
                  style={{resize:'none'}}
                />
              </div>

              <div className="text-end" style={{ color: 'dodgerblue' }}>{characterLimit - details.length} characters remaining</div>
              <p className="text-red" style={{ color: 'red', textAlign: 'center', fontWeight: "bold" }}>Fee For Consultation - 10000</p>
              <button className='btn btn-primary' type="submit" style={{ display: 'block', margin: '0 auto' }}>Book Appointment</button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12" style={{textAlign:'center'}}>
            <h4 style={{marginTop:'2rem', borderBottom:'2px solid grey', color:'red', marginBottom:'2rem', paddingBottom:'1rem'}}>My Appointments</h4>
            {appointments.length > 0 ? (
              <ul>
                {appointments.map((appointment, index) => (
                  <div key={appointment._id} className={`appointment-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
                    <p style={{textTransform:'capitalize', color:'dodgerblue'}}>Patient Name: { appointment.user.fullname}</p>
                    <p>Email: {appointment.user.email}</p>
                    <p>Appointment Date: {appointment.date}</p>
                    <p>Appointment Time (24hrs Format): {appointment.time}</p>
                    <p>Consultation Details: {appointment.details}</p>
                    <p style={{color:'red'}}>Status: {appointment.status}</p>
                  </div>
                ))}
              </ul>
            ) : (
              <p>No appointments available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PatientDashboard;
