import React from "react";
import { useState ,useEffect , } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Email.css";
function Email() {
  const inputData = { email: "", confirmPassword: "", password: "" };
  const [formData, setFormData] = useState(inputData);
  const [FormErr, setFormErr] = useState({});
  const [isSubmitted , setIsSubmitted] = useState(false)
  const { email, password, confirmPassword } = formData;
//  useEffect(()=>{
//    if (Object.keys(FormErr.length===0 && isSubmitted)){
     
//    }
//  })
//let Navigate=useNavigation()

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErr(validate(formData))
    console.log(formData);
    setIsSubmitted(true)

  };
  const Navigate =useNavigate()
 useEffect(() =>{
if(Object.keys(FormErr).length==0&& isSubmitted){
  Navigate("/user")
}
 },[FormErr]
 )
function validate (values){

  // let regex ="/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/."
  let errors ={}
  if ( !values.email){
    errors.email ="Email Is required!"
  }
  if ( !values.password && values.password.length>8){
    errors.password ="Password Is required!"
  }
  if ( !values.confirmPassword && values.confirmPassword  === values.password){
    errors.confirmPassword =" confirm Password Is required!"
  }
  // if ( !values.confirmPassword=== values.password){
  //   errors.email ="Please Enter Correct Password!"
  // }
  return errors;
  
}
console.log(FormErr,"err")
  console.log(formData);
  return (
    <div>
      <div id="bg"></div>

      <form onSubmit={handleSubmit} >
        <div className="form-field">
          <input
            type="email"
            placeholder="Email / Username"
            name="email"
            value={formData.email} 
            onChange={handleChange}
            
          />
          <p>{FormErr.email}</p>
        </div>

        <div className="form-field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
       
          />
          <p>{FormErr.password}</p>
        </div>
        <div className="form-field">
          <input
            type="password"
            name="confirmPassword"
            placeholder=" Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            
          /> <p>{FormErr.confirmPassword}</p>
        </div>

        <div className="form-field">
          <button className="btn" type="submit" >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Email;
