//form validations

// email validation
export const emailValidation = (email:string) => {
    let error:any = {};
    if(email){
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(email.match(emailRegex)) {
        error.message = ""; // valid
        error.status = true;
      } else {
         error.message = "Please add a valid email address*";
         error.status = false;
      }
      return error;
  
    } else {
      return error.message = "Email Required*"
    }
}


// general input validation
export const inputValidation = ({value, label}:any) => {
  let error:any = {};
  if(value){
    error.message = ""; 
    error.status = false;
    return error;

  } else {
    error.message = `${label} Required*`; 
    error.status = true;
    return error;
  }
}