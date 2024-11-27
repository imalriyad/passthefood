import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGeolocation from "../hooks/useGeolocation";
import { useForm } from "react-hook-form";
import UseAllContext from "../hooks/UseAllContext";
import { sendEmailVerification } from "firebase/auth";
import auth from "./firebase.config";
import ModalCompo from "../utils/ModalCompo";
import SocialLogin from "./SocialLogin";

const Registration  = () => {
  const [isShowPass, setShowPass] = useState(false);
  const { location } = useGeolocation();
  const {registeration,setMessage,setTitle,setIsOpen,setSuccess } = UseAllContext()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, // Watch the form field
  } = useForm({
    defaultValues: {
      accountType: "", // Ensure it is empty initially
    },
  });
  // Watch the accountType value
  const accountType = watch("accountType");
  
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
  
    registeration(email, password)
      .then((user) => {
        if (!user?.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              reset()
              setSuccess(true)
              setTitle(`A verification email has been sent to "${email}"`);
              setMessage("Please check your inbox or spam folder for the email.");
              setIsOpen(true); // Trigger modal on success
               navigate("/login");
            })
            .catch((error) => {
              console.error("Error sending verification email:", error.message);
              setTitle("Verification Failed");
              setSuccess(false)
              setMessage("There was an error while sending the verification email. Please try again.");
              setIsOpen(true); // Trigger modal on error
            });
        }
      })
      .catch((error) => {
        reset()
        setSuccess(false)
        setTitle("Account Creation Failed");
        setMessage(error.message.replace('Firebase: ', '')); 
        setIsOpen(true); 
      });
  };
  
 

  return (
    <div className="lg:flex max-w-screen-xl px-5 lg:flex-row-reverse justify-between mx-auto">
      <div className="lg:w-[50%] drop-shadow lg:p-8 rounded-lg max-w-screen-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">Name is required.</span>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">Email is required.</span>
          )}

          <input
            type="number"
            placeholder="Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("number", { required: true })}
          />

          {errors.number && (
            <span className="text-sm text-red-500">Number is required.</span>
          )}

          <select
            {...register("accountType", { required: true })}
            value={accountType || ""} // Control the value here
            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none text-gray-500 focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled className="text-gray-300">
              Account Type
            </option>
            <option value="charity" className="text-black">
              Charity
            </option>
            <option value="personal" className="text-black">
              Personal
            </option>
            <option value="business" className="text-black">
              Business
            </option>
          </select>
          {errors.accountType && (
            <span className="text-sm text-red-500">
              Account Type is required.
            </span>
          )}

          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            {...register("address", { required: false })}
            placeholder="Address"
            defaultValue={location?.address}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.address && (
            <span className="text-sm text-red-500">Address is required.</span>
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
            <span className="text-sm text-red-500">Password is required.</span>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary"
          >
            Signup
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary">
            Login
          </Link>
        </p>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
       <SocialLogin></SocialLogin>
      </div>

      <div className="lg:w-[50%] lg:h-[100vh] lg:py-20 py-8">
        <img
          src="https://cdn.create.vista.com/downloads/87770fba-9fc5-4e87-8061-c52df8ade09d_1024.jpeg"
          className="rounded-lg lg:h-full xl:h-auto h-auto"
          alt=""
        />
      </div>
      <ModalCompo />
    </div>
  );
};

export default Registration;

