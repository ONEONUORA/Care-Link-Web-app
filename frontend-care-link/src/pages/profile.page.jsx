
import { useParams } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";






const ProfilePage = ()=>{
    const { username } = useParams();

    // let [ profile, setProfile] = useState(profileDataStructure);

    // let [loading, setLoading] = useState(true)

    // let [ profileLoaded, setprofileLoaded] = useState( " " )

    let { personal_info: { fullname, username: profile_username, profile_img, bio,specialization, role, phone_number}, social_links, joinedAt } = profile

    // let { userAuth: {username} } = useContext(UserContext)



    // const fetchUserProfile=()=>{
    //     axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/get-profile', {username: profileId})
    //     .then(({data: user}) =>{
    //         if(user != null){
    //             setProfile(user)
    //         }
    //         setprofileLoaded(profileId)
    //         setLoading(false)
    //     })

    //     .catch(err =>{
    //         console.log(err);
    //         setLoading(false)
    //     })
    // }
    // useEffect(() =>{
  

    //         fetchUserProfile();
    
        
    // }, [profileId])



 

    return(
        <>
            <AnimationWrapper>
          
                  
                   <section className="section1 h-cover infoimg">
                        <div className="infoimg2 md:w-[50%] md:pl-8 md:border-l border-grey md:sticky md:top-[100px] md:py-10">
                            <img src={ profile_img} className="w-48 h-48 bg-grey rounded-full md:w-32 md:h-32"/>
                            <p>{username}</p>
                            <h6 className="text-2xl font-medium">@{profile_username}</h6>
                            <p className="text-xl capitalize h-6">{fullname}</p>



                        </div>


                   </section>

               


            </AnimationWrapper>
           
        </>
    )
}

export default ProfilePage;

