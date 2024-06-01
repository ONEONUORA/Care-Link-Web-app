import { useState } from "react";




const InputBox =({name, type, id, value, placeholder, icon, disable=false})=>{

    const [passwordVisible, setPasswordVisible ] = useState(false);

    return(
        <>
            <div className="position-relative w-100 mb-2">
                <input
                    name={name}
                    type={type == "password" ? passwordVisible ? "text" :  "password" : type}
                    placeholder={placeholder}
                    defaultValue={value}
                    id={id}
                    className="input-box"
                    disabled={disable}
                />

              <i className={"bi " + icon  + " input-icon"}></i>

              {
                type == "password" ?
                   <i className={"bi bi-eye" +  (!passwordVisible ? "-slash" : "") + " input-icon left-auto"}
                   onClick={() => setPasswordVisible(currentVal => !currentVal)}
                   ></i>
                
                : " "

              }
            </div>
        </>
    )
}

export default InputBox;