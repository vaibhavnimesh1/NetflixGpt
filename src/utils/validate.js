export const checkValidateUser = (email, password,fullName,isSignin) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      password
    );
        
    const isfullNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName)

    
    
    if (!isfullNameValid & !isSignin) return "Name Is Not Valid";
    if (!isEmailValid) return "Email Is Not Valid";
    if (!isPasswordValid) return "Password Is Not Valid";
  return null;
};
