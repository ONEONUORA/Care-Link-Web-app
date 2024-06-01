import bgImage1 from "../assets/bg-image.png"
import InputBox from "../components/input.component";
import {Link, useNavigate}  from "react-router-dom"
import AnimationWrapper from "../common/page-animation";
import { useContext, useState, useEffect } from "react";
import {Toaster, toast}  from "react-hot-toast"
import axios from "axios"
import { storeInSession } from "../common/session";
import { UserContext } from "../App";


const UserAuthForm =({ type }) =>{

  const [role, setRole] = useState('patient');

  let { userAuth : {access_token, role: userRole} , setUserAuth  } = useContext(UserContext)
  console.log(access_token)
  const navigate = useNavigate();

  useEffect(() => {
    if (access_token) {
      if (userRole === 'doctor') {
        navigate('/doctor-dashboard.page');
      } else {
        navigate('/patient-dashboard.page');
      }
    }
  }, [access_token, userRole, navigate]);

  const userAuthThroughServer = (serverRoute, formData)=>{

    axios.post(import.meta.env.VITE_SERVER_DOMAIN +  serverRoute, formData)
    .then (({ data, status }) =>{
       
      if (status === 200) {
         storeInSession("user", JSON.stringify(data))
          setUserAuth(data)
        // Navigate to the appropriate dashboard based on user role
        if (data.role === 'doctor') {
          navigate('/doctor-dashboard.page');
        } else {
          navigate('/patient-dashboard.page');
        }
      }
    })
    .catch(({ response }) =>{
      toast.error(response.data.error)
     
    })
  }
    const handleSubmit =(e)=>{

      e.preventDefault();

      let serverRoute = type == "sign-in" ?  "/signin" : "/signup";

      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
      let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

      let form = new FormData(formElement)
      let formData = {};

      for(let[key, value] of form.entries()){
        formData[key] = value
      }
      
      let {fullname, email, password} =formData;
 
      if(fullname){
           if(fullname.length < 3){
             return toast.error ( "Fullname must be at least 3 letters long")
             }
      }

    if(!email.length){
        return toast.error ( "Enter Email")
    }
    if(!emailRegex.test(email)){
        return toast.error ("Email Is Invalid")
    }
    if(!passwordRegex.test(password)){
        return toast.error ( "password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letter")
    }

      if(type !== "sign-in"){
           const validRoles = ['patient', 'doctor']; 
              if (!role || !validRoles.includes(role)) {
              return toast.error ("Role must be either 'patient' or 'doctor' ");
      }
      }

      userAuthThroughServer(serverRoute, formData);

    }


  return(

        <AnimationWrapper keyValue={type}>
                 <section className="h-cover flex items-center justify-center">
              <img src={bgImage1} alt="Background Image" style={{width:'60px', display:'block', margin:'0 auto', marginBottom:'3rem'}}/>
                <Toaster/>
              <form id="formElement" className="w-[80%] max-w-[400px]">
                    <h4 className="text-4xl font-gelasio capitalize text-center" style={{fontWeight:'bold', marginBottom:'2rem'}}>
                      {type == "sign-in" ? "Hello Again" : "Join Us Today"}
                    </h4>

                      {type !== "sign-in" ? (
                  <>

                        <div style={{ marginBottom: "1rem", display:'block', justifyContent:'center', textAlign:'center' }}>
                            <label>
                               <input
                                 type="radio"
                                 name="role"
                                  value="patient"
                                  checked={role === "patient"}
                                  onChange={() => setRole("patient")}
                                />
                               Patient
                              </label>
                              <label style={{ marginLeft: "1rem" }}>
                                <input
                                 type="radio"
                                  name="role"
                                  value="doctor"
                                  checked={role === "doctor"}
                                  onChange={() => setRole("doctor")}
                               />
                               Doctor
                             </label>
                      
                        </div>

                            <InputBox
                              name="fullname"
                              type="text"
                              placeholder="Full Name"
                             icon="bi-person"
                           />
                  </>

                           ) : (" " )}
                             
                          
                  
                      <InputBox
                          name='email'
                          type="email"
                          placeholder="E-mail"
                          icon="bi-envelope"
                      /> 

                      <InputBox
                          name='password'
                          type="password"
                          placeholder="Password"
                          icon="bi-key"
                      /> 

                      <button
                        className="btn-dark center"
                        type="submit"
                        style={{marginTop:'2rem', marginBottom:'1.1rem'}}
                        onClick={handleSubmit}
                      >
                          {type.replace("-", " ")}
                      </button>

                      {/* <div className="google">
                          <hr className="custom-class"/>
                            <p style={{marginTop:'5px'}}>or</p>
                          <hr className="custom-class"/>
                      </div> */}

                      {/* <button className="btn-dark center">
                        <i className="bi bi-google" style={{padding:'5px'}}></i>
                        Continue With Google
                      </button> */}

                      {

                          type == "sign-in" ?
                          <p className="mt-3 " style={{display:'flex', justifyContent:'center', textAlign:'center', gap:'5px'}}>
                            Dont have an account ?
                            <Link to='/signup' style={{textDecoration:'none'}}>
                                Join us today
                            </Link>
                          </p>
                          :

                          <p className="mt-3 " style={{display:'flex', justifyContent:'center', textAlign:'center', gap:'5px'}}>
                            Already a member ?
                            <Link to='/signin' style={{textDecoration:'none'}}>
                                Sign in here
                            </Link>
                          </p>



                      }
              </form>
                 </section>
        </AnimationWrapper>
        
  
  )
};

export default UserAuthForm;


