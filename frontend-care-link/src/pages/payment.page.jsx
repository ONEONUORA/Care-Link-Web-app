
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";


const Payment = () =>{
   
    let {userAuth:{access_token}}= useContext(UserContext)

          const publicKey = import.meta.env.VITE_PUBLIC_KEY
          const amount = 1000000 
          const [email, setEmail] = useState("")
          const [name, setName] = useState("")
          const [phone, setPhone] = useState("")
          const navigate = useNavigate();
          //reset form
        const resetForm =()=>{
            setEmail("");
            setName("");
            setPhone("");
        };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>{
        alert("Success! Your Payment is Complete, Thank You for Choosing Us!!")
        resetForm()
        navigate("/patient-dashboard.page")
    },
     
    onClose: () =>  alert("Secure Your Health,Complete Your Payment Now!!!"),
  }

    return(
        
        access_token === null ? <Navigate to="/signin"/>
                :
      
            <section className="h-cover">
                <div className="row">
                 
                    <div className="col-12 ">
                        <div style={{display:'block', margin:'0 auto', textAlign:'center'}}>
                                <h3>Seamless Payments</h3>

                           
                            <div className="checkout-form">
                                            <div className="checkout-field">
                                                           <input
                                                             type="text"
                                                             id="name"
                                                             icon='bi-person'
                                                             className="input-box1"
                                                             placeholder='Enter Account Holders Name'
                                                             onChange={(e) => setName(e.target.value)}
                                                           />
                                            </div>

                                             <div className="checkout-field">
                                                           <input
                                                             type="text"
                                                             id="email"
                                                             icon='bi-envelope'
                                                             className="input-box1"
                                                             placeholder="Account Holder's Email"
                                                             onChange={(e) => setEmail(e.target.value)}
                                                           />
                                            </div>
                                             <div className="checkout-field">
                                                           <input
                                                             type="number"
                                                             id="phone"
                                                             icon='bi-phone'
                                                             className="input-box1"
                                                            placeholder="Telephone Number"
                                                             onChange={(e) => setPhone(e.target.value)}
                                                           />
                                            </div>
                                            <PaystackButton className="btn btn-outline-primary paystack-button mb-3" {...componentProps}  />
                                          
                                 
                            </div>

                        
                       </div>
                                            <Link to="/patient-dashboard.page" style={{textDecoration:'none'}}>
                                                 <button className="btn btn-danger"  style={{display:'block', margin:"0 auto"}}>Back To Dashboard</button>
                                            </Link> 
                    </div>

                </div>
            </section>
    
    )
}

export default Payment;