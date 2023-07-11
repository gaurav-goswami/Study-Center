import { toast } from "react-hot-toast";
import { setToken, setUserRole } from "../app/features/Auth";
import { setLoading } from "../app/features/Loading";



export function sendOtp(otpFunc, email, navigate){

  const toastId = toast.loading("Loading...");

  return async (dispatch) => {
    try {

      const response = await otpFunc(email).unwrap();
      console.log("sendOtp response" , response);
      

      
    } catch (error) {
      console.log("Error while sending Otp" , error);
      toast.error(error.data?.message);
    }

    toast.dismiss(toastId);
  }

}


export function loginUser(loginFunc, loginDetails, navigate) {
  return async (dispatch) => {

    const toastId =  toast.loading("Loading...");
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
