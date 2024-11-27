import { useNavigate } from "react-router-dom";
import UseAllContext from "../hooks/UseAllContext";

const SocialLogin = () => {
    const { user, googleLogin } = UseAllContext();
    const navigate = useNavigate();
    const loginWithGoogle = () => {
        googleLogin()
          .then((result) => {
            
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            navigate("/dashboard");
           
          })
          .catch((error) => {
            console.log(error);
            
          });  
  }
  
  // const loginWithFacebook = () => {
  //   facebookLogin()
  //         .then((result) => {
          
  //         const user = result.user;
  //          console.log(user);
           
  //         })
  //         .catch((error) => {
  //           console.log(error);
            
  //         }); 
  // }
    
  return (
    <>
      <button
        onClick={loginWithGoogle}
        className="w-full bg-primary text-white py-2 rounded-lg font-semibold flex items-center justify-center border hover:bg-primary mb-2"
      >
        <i className="fab fa-google mr-2"></i> Login with Google
      </button>
      {/* <button
        onClick={loginWithFacebook}
        className="w-full bg-primary text-white py-2 rounded-lg font-semibold flex items-center justify-center hover:bg-primary "
      >
        <i className="fab fa-facebook-f mr-2"></i> Login with Facebook
      </button> */}
    </>
  );
};

export default SocialLogin;
