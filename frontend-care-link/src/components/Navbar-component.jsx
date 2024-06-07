import { useContext, useState } from "react"
import brandlogo from "../assets/logo.png"
import {Link, Outlet} from "react-router-dom"
import { UserContext } from "../App"
import UserNavigationPanel from "./user-navigation.component"


const Navbar = () =>{

        const [userNavPanel, setUserNavPanel] = useState(false)
        const { userAuth, userAuth: {access_token, profile_img} } = useContext(UserContext)

        const handleUserNavPanel =()=>{
            setUserNavPanel(currentVal => !currentVal);
        }

        const handleBlur = () =>{
            setTimeout(() => {
                setUserNavPanel(false);
            }, 200);
        }

    return(
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-lg">
                    <Link to="/"  className= "head" style={{display:'block', gap:'33px',textDecoration:'none'}}>
                         <a className="navbar-brand" href="#" >
                            <img src={brandlogo} alt="Brand logo" style={{width:'45px'}}/>
                         </a>
                         <h6>Care-Link</h6>
                    </Link>
                    {
                        access_token ?
                            <>
                                <div style={{display:'flex', justifyContent:'flex-end', gap:'20px'}}>
                                          
                                          <Link to="dashboard/notification">
                                              <button className="notification ">
                                                     <i className="bi bi-bell"></i>  
                                              </button>
                                          </Link>

                                          

                                          <div className="position-relative" onClick={handleUserNavPanel} onBlur={handleBlur}>
                                              <button className="butobject">
                                                      <img src={profile_img } className="object"/>
                                              </button>
                                          </div>
                                          {
                                            userNavPanel ?  <UserNavigationPanel/> : ""
                                            
                                          }
                                          
                                </div>
                            </>
                        :

                        <div style={{display:'flex', gap:'15px'}}>
                                <Link to='signin'><button className="btn btn-outline-primary"   type="submit" style={{borderRadius:'2rem', paddingLeft:"20px", paddingRight:"20px"}}>Sign In</button></Link>
                                <Link to='/signup'><button className="btn btn-success"   type="submit" style={{borderRadius:'2rem', paddingLeft:"20px", paddingRight:"20px"}}>Sign Up</button></Link>
                        </div>
                    }
                  
                </div>
           </nav>

           <Outlet/>
        </>
    )
}

export default Navbar;