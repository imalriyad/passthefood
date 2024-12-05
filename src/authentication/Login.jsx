import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAllContext from "../hooks/UseAllContext";
import ModalCompo from "../utils/ModalCompo";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const [isShowPass, setShowPass] = useState(false)
    const { register, handleSubmit,formState: { errors }, reset } = useForm();
    const {user,login,setMessage,setTitle,setIsOpen,setSuccess } = UseAllContext()
    const navigate = useNavigate()

   console.log(user);
   

    const onSubmit = (data) => {
      console.log(data);
      
      const email = data.email;
      const password = data.password;
     console.log(user?.emailVerified);
    
     if(user?.emailVerified === false){
      setSuccess(false)
          setTitle("Login Faild");
          setMessage("Please verify your email before logging in") 
          setIsOpen(true);
          return
     }

      login(email, password)
        .then((user) => {
          reset()
          navigate("/dashboard");

        })
        .catch((error) => {
          setSuccess(false)
          setTitle("Login Faild");
          setMessage(error.message.replace('Firebase: ', '')); 
          setIsOpen(true); 
          
        });
    };
    



    return (
      <>
        <div className="lg:flex max-w-screen-xl items-center px-5 lg:flex-row-reverse justify-between mx-auto">
          <div className="lg:w-[50%] drop-shadow lg:p-8 rounded-lg max-w-screen-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">Email is required.</span>
              )}

              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  type={isShowPass ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {isShowPass ? (
                  <i
                    onClick={() => setShowPass(!isShowPass)}
                    className="fas fa-eye-slash absolute right-3 top-3 text-gray-500 cursor-pointer"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPass(!isShowPass)}
                    className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"
                  ></i>
                )}
              </div>
              {errors.password && (
                <span className="text-sm text-red-500">
                  Password is required.
                </span>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary"
              >
                Sign In
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to={"/registration"} className="text-primary">
                Registration
              </Link>
            </p>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <SocialLogin></SocialLogin>
          </div>

          <div className="lg:w-[50%] py-10 ">
            <img
              src="https://cdn.create.vista.com/downloads/87770fba-9fc5-4e87-8061-c52df8ade09d_1024.jpeg"
              className="rounded-lg object-cover lg:h-full xl:h-auto h-auto"
              alt=""
            />
          </div>
          <ModalCompo></ModalCompo>
        </div>
      </>
    );
};

export default Login;