


import { Link, Outlet } from 'react-router-dom';
import page from '../assets/404.png';
import brandlogo from "../assets/logo.png"


const PageNotFound = () =>{
    return(
        <>
          

                <div className='row justify-content-center mt-3' >
                    <div className='col-12  text-center page3' >
                      <img src={page} className='page404' alt='404 Image'/>
                          <h4 style={{fontWeight:"bold", marginTop:'2rem'}}>Page Not Found</h4>
                           <p>The page you are searching for does not exist<br/> 
                            <Link to='/' style={{color:'black', fontWeight:'bold'}}>Back to home</Link>
                           </p>
                           <img src={brandlogo}  alt='Brand Logo' className='img2'/>
                           <p style={{ padding:"2rem"}}>Dive into a World of Health: Explore Millions of Wellness Stories from Across the Globe!</p>
                           <h6 style={{color:'red', marginBottom:'2rem'}}>Care-link Health Care Space</h6>
                    </div>
                </div>
                
      <Outlet/>
        </>
    )
}


export default PageNotFound