import { Link, useNavigate  } from "react-router-dom"
import AnimationWrapper from "../common/page-animation"
import { useContext } from "react"
import { UserContext } from "../App"
import { removeFromSession } from "../common/session"


const UserNavigationPanel = () =>{
    const {userAuth:{username} , setUserAuth} = useContext(UserContext)
    const navigate = useNavigate();
    const signOutUser =()=>{
        removeFromSession("user")
        setUserAuth({access_token: null})
        navigate('/')
    }
    
    return(
        <>
            <AnimationWrapper 
            className="custom-z-50"
                transition={{duration:0.2}}
            >
                <div className="usernav">
                        {/* <Link to={`/user/${username}/`} className="link pl-5"> 
                            Profile
                        </Link>

                        <Link to='edit-profile' className="link pl-5"> 
                            Dashboard
                        </Link> */}

                        {/* <Link to='edit-profile' className="link pl-5"> 
                            Settings
                        </Link> */}

                        <span className="position-absolute border-top border-color-gray w-100"></span>
                        <button className="btn signout-btn" type="submit"
                                onClick={signOutUser}    >
                            <h6 style={{fontWeight:"500"}}>Sign Out</h6> 
                            <p >@{username}</p>
                        </button>

                </div>

            </AnimationWrapper>
        </>
    )
}


export default UserNavigationPanel