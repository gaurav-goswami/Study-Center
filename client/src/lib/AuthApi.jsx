import { toast } from "react-hot-toast";
import { setToken, setUserRole } from "../app/features/Auth";
import { setLoading } from "../app/features/Loading"; 

export function sendOTP(otpFunc, email, navigate) {

  return async (dispatch) => {

    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {

      const response = await otpFunc(email).unwrap();
      console.log("sendOtp response", response);
      toast.success("OTP sent successfully");
      dispatch(setLoading(false));

      navigate("/auth/user/verify-otp")

    } catch (error) {
      console.log("Error while sending Otp", error);
      toast.error(error.data?.message);
    }

    toast.dismiss(toastId);
  };
}


export function signUp(signUpFunc, signUpDetails, navigate) {

  return async (dispatch) => {

    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true));

    try {

      const response = await signUpFunc(signUpDetails).unwrap();
      console.log("signUp", response);
      toast.success(response.message);
      navigate("/auth/login");

    } catch (error) {
      console.log("Error in signUp" , error);
      toast.error(error.data?.message)
    }

    toast.dismiss(toastId);
  }
}

export function loginUser(loginFunc, loginDetails, navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await loginFunc(loginDetails).unwrap();
      toast.success(response.message);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", response.role);

      dispatch(setLoading(false));
      dispatch(setToken(response.token));
      dispatch(setUserRole(response.role));

      navigate("/");
    } catch (error) {
      console.log("error in login", error);
      toast.error(error.data?.message);
    }

    toast.dismiss(toastId);
  };
}

export function logout () {
  return (dispatch) => {
    dispatch(setToken(""))
    dispatch(setUserRole(""))

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}