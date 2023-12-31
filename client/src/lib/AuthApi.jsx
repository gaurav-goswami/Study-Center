import { toast } from "react-hot-toast";
import { setToken, setUserRole, setLoading, setUserDetails } from "../app/features/Auth";

export function sendOTP(otpFunc, email, navigate = null) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await otpFunc(email).unwrap();
      toast.success("OTP sent successfully");
      dispatch(setLoading(false));

      navigate("/auth/user/verify-otp");
    } catch (error) {
      console.log("error in sendotp" , error)
      toast.error(error.data?.message);
    }

    toast.dismiss(toastId);
  };
}

export function signUp(signUpFunc, signUpDetails, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await signUpFunc(signUpDetails).unwrap();
      toast.success(response.message);
      
      navigate("/auth/login");
    } catch (error) {
      console.log("Error in signUp", error);
      toast.error(error.data?.message);
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
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
      localStorage.setItem("userDetails" , JSON.stringify(response.user))

      const userAvatar = response.user?.profile
      ? response.user?.profile
      : `https://api.dicebear.com/5.x/initials/svg?seed=${response.user.firstName} ${response.user.lastName}`

      dispatch(setLoading(false));
      dispatch(setToken(response.token));
      dispatch(setUserRole(response.role));
      dispatch(setUserDetails({...response.user , profile : userAvatar}));
      
      navigate("/dashboard/my-profile");

    } catch (error) {
      console.log("error in login", error);
      toast.error(error.data?.message);
    }

    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {

    dispatch(setToken(""));
    dispatch(setUserRole(""));

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out")

    navigate("/")
  };
}
