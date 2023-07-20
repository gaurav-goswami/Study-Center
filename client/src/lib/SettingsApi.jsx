import { toast } from "react-hot-toast";
import { logout } from "./AuthApi";

export const deleteUserAccount = (accountDeleteFunc, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await accountDeleteFunc();
      console.log("delete response", response);
      toast.success("Account Deleted Successfully");
      dispatch(logout(navigate));
    } catch (error) {
      console.log("error in delete user account", error);
    }
    toast.dismiss(toastId);
  };
};

export const changePassword = async (
  changePasswordFunc,
  passwordData,
  navigate,
  setLoading
) => {
  const toastId = toast.loading("Loading...");
  setLoading(true)
  try {
    const response = await changePasswordFunc(passwordData).unwrap();
    console.log("here", passwordData);

    console.log("response", response);

    toast.success("Password changed successfully");

    navigate("/dashboard/my-profile");
  } catch (error) {
    toast.error(error?.data?.message);
    console.log("error in change password", error?.data?.message);
  }

  toast.dismiss(toastId);
  setLoading(false)
};
