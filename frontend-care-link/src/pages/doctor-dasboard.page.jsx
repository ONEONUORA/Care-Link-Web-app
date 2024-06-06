/* eslint-disable react/no-unescaped-entities */

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const DoctorDashboard = () => {
  const { userAuth: { access_token, fullname, role } } = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_DOMAIN}/api/appointments`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`
            }
          }
        );
        const sortedAppointments = Array.isArray(response.data) ? response.data.sort((a, b) => new Date(b.date) - new Date(a.date)) : [];
        setAppointments(sortedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [access_token]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_DOMAIN}/api/appointments/${id}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }
      );
      setAppointments(appointments.map(app => app._id === id ? response.data : app));
      toast.success('Appointment status updated');
    } catch (error) {
      console.error('Error updating appointment status:', error);
      toast.error('Failed to update appointment status');
    }
  };

  if (access_token === null) {
    return <Navigate to="/signin" />;
  }

  return (
    <section className="h-cover">
      <Toaster />
      <div>
        <p style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'blue', borderBottom: '3px solid black', paddingBottom: '2rem' }}>
          Welcome back {fullname}
        </p>
        <h5 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', color: 'red', borderBottom: '2px solid black', paddingBottom: '1rem' }}>
          {role} dashboard
        </h5>
      </div>

      <div className="row">
        <div className="col-12" style={{ textAlign: 'center' }}>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <>
              <h4 style={{marginTop:'2rem', borderBottom:'2px solid grey', color:'', marginBottom:'2rem', paddingBottom:'1rem'}}>Patient's Appointments</h4>
              {appointments.length > 0 ? (
                <ul>
                  {appointments.map((appointment, index) => (
                    <div key={appointment._id} className={`appointment-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
                      <p style={{textTransform:'capitalize', color:'dodgerblue'}}>Patient Name:  { appointment.user.fullname}</p>
                      <p>Email: {appointment.user.email}</p>
                      <p>Appointment Date: {appointment.date}</p>
                      <p> Appointment Time (24hrs Format): {appointment.time}</p>
                      <p>Consultation Details:{appointment.details}</p>
                      <p style={{color:'red'}}>Status: {appointment.status}</p>

                    <div style={{display:'flex', gap:'10px'}}>
                            <label>
                              <input
                                type="radio"
                                name={`status-${appointment._id}`}
                                value="pending"
                                checked={appointment.status === 'pending'}
                                onChange={() => handleStatusChange(appointment._id, 'pending')}
                              /> Pending
                            </label>

                            <label>
                              <input
                                type="radio"
                                name={`status-${appointment._id}`}
                                value="confirmed"
                                checked={appointment.status === 'confirmed'}
                                onChange={() => handleStatusChange(appointment._id, 'confirmed')}
                              /> Confirmed
                            </label>
                    </div>
                      
                    </div>
                  ))}
                </ul>
              ) : (
                <p>No appointments available.</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DoctorDashboard;

