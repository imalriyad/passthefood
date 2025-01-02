import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGeolocation from "../hooks/useGeolocation";
import { useForm } from "react-hook-form";
import { sendEmailVerification } from "firebase/auth";
import auth from "./firebase.config";
import ModalCompo from "../utils/ModalCompo";
import { Select, SelectItem } from "@nextui-org/react";
import useAxios from "../hooks/useAxios";
import useAllContext from "../hooks/UseAllContext";
const avatar = "https://i.postimg.cc/cCfNnmG6/chicken.png";

const Registration = () => {
  const axios = useAxios();
  const [isShowPass, setShowPass] = useState(false);
  const { location } = useGeolocation();
  const navigate = useNavigate();
  const { registeration, setMessage, setTitle, setIsOpen, setSuccess } = useAllContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    const name = data.name;
    const phone = data.phone;
    const email = data.email;
    const password = data.password;
    const accountType = data.accountType;
    const method = "manual";
    const address = data?.address;
    const newUser = {
      name,
      password,
      email,
      phone,
      address,
      avatar,
      accountType,
      method,
    };


    registeration(email, password)
      .then((user) => {
        if (!user?.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(async () => {
              reset();
              setSuccess(true);
              setTitle(`A verification email has been sent to "${email}"`);
              setMessage(
                "Please check your inbox or spam folder for the email."
              );
              setIsOpen(true); 

              const res = await axios.post("/registration", newUser);
              if (res.status === 200) {
                console.log(res.data);
                navigate("/login");
              }
            })
            .catch((error) => {
              console.error("Error sending verification email:", error.message);
              setTitle("Verification Failed");
              setSuccess(false);
              setMessage(
                "There was an error while sending the verification email. Please try again."
              );
              setIsOpen(true); 
            });
        }
      })
      .catch((error) => {
        reset();
        setSuccess(false);
        setTitle("Account Creation Failed");
        setMessage(error.message.replace("Firebase: ", ""));
        setIsOpen(true);
      });
  };

  const AccountType = [
    { key: 1, label: "Charity" },
    { key: 2, label: "Personal" },
    { key: 3, label: "Business" },
  ];

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
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("phone", { required: true })}
          />

          {errors.number && (
            <span className="text-sm text-red-500">Number is required.</span>
          )}

          <Select
            {...register("accountType", { required: true })}
            size={"sm"}
            label="Account Type"
            className="w-full rounded-lg"
          >
            {AccountType?.map((type) => (
              <SelectItem
                key={type.label.toLocaleLowerCase()}
                value={type.label.toLocaleLowerCase()}
              >
                {type.label}
              </SelectItem>
            ))}
          </Select>
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
