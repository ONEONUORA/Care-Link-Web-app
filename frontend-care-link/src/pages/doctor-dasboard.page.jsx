import { useContext } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";



const DoctorDashboard = ()=>{

    let {userAuth:{access_token, fullname, role }} = useContext(UserContext);
    
    return(
            access_token === null ? <Navigate to="/signin"/>

            : 
       
            <section className="h-cover">
                <div >
                    <p style={{textTransform:'capitalize', textAlign:'center', fontWeight:'bold', color:'blue', borderBottom:'3px solid black', paddingBottom:'2rem'}}>Welcome back {fullname}</p>
                    <h5 style={{textTransform:'capitalize', textAlign:'center', fontWeight:'bold', color:'red', borderBottom:'2px solid black', paddingBottom:'1rem'}}>{role} dashboard</h5>
                </div>

                <div>
                    <h3>Stay tuned</h3>
                </div>
            </section>
     
    )
}

export default DoctorDashboard;