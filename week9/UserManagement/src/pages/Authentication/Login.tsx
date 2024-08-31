import { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TokenResponse, useGoogleLogin, UseGoogleLoginOptionsImplicitFlow } from "@react-oauth/google";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch } from "../../store/hooks";
import { setAuthenticated, setUser } from "../../store/globalSlice";
import { tokenVerifier } from "../../App";
interface FormValues {
  email: string;
  password: string;
}
const url = "http://localhost:3000";
export default function Login(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  //setting of redux store inside the project
  // const count = useAppSelector((state) => state.global.value)
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Handle form submission
    console.log(data);
    const response = await axios.post(url + "/auth/credential/signin", {
      email: data.email,
      password: data.password,
    });
    if (response.data.message === "success") {
      toast("signed in successfully");
      dispatch(setAuthenticated());

      window.localStorage.setItem("token", response.data.token);
      const user = await tokenVerifier();
      console.log("the user is", user);
      if (user) dispatch(setUser(user));
      setTimeout(() => navigate("/home"), 1000);
    } else {
      toast(response.data.message);
    }
  };
  const navigate = useNavigate();
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      navigate("/home");
    }
  }, [navigate, data]);
  
  const googleHandler = useGoogleLogin({
    onSuccess: async (codeResponse: TokenResponse) => {
      console.log(codeResponse);
      const response = await axios.post(url + "/auth/google/login", {
        userToken: codeResponse.access_token,
      });
      console.log(response);
      if (response.status === 200 && response.data.message === "success") {
        window.localStorage.setItem("token", response.data.token);
        dispatch(setAuthenticated());
        const user = await tokenVerifier();

        if (user) dispatch(setUser(user));
        navigate("/home");
      } else {
        toast(response.data.message);
      }
    },
    onError: (error) => console.log(error),
    // ux_mode:'redirect',
    prompt:'select_account'
  } as UseGoogleLoginOptionsImplicitFlow);
 
  return (
    <div className="flex items-center justify-center">
      <div className="h-auto flex flex-col items-center justify-start w-96 shadow-2xl mt-40 rounded-xl p-10">
        <p className="text-2xl text-black font-light mt-10">LOGIN</p>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="text-xs mt-5">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="h-8 w-72 border border-black rounded-sm placeholder:text-xs"
            placeholder="enter the email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
          <label htmlFor="password" className="text-xs mt-5">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="h-8 w-72 border border-black rounded-sm placeholder:text-xs"
            placeholder="enter the password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be atleast 8 characters Long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="h-10 w-72 bg-signin-button mt-5 text-white text-xs flex items-center justify-center"
          >
            SIGN IN
          </button>

          <button
            onClick={() => googleHandler()}
            className="h-10 w-72 bg-white border mt-5 rounded-3xl border-gray-500 flex items-center justify-start"
          >
            <img src="google.png" className="h-5 w-5 ml-2" />
            <p className="text-xs font-normal ml-14">Sign in Using Google</p>
          </button>
          <a
            href="/signup"
            className="h-10 w-72 bg-blue-200 mt-5  text-blue-600 text-xs flex items-center justify-center"
          >
            CREATE YOUR ACCOUNT
          </a>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
