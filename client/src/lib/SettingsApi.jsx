import { toast } from "react-hot-toast";
import { logout } from "./AuthApi";
import { setLoading, setUserDetails } from "../app/features/Auth";

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
  setLoading(true);
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
  setLoading(false);
};

export const updateProfile = (updateProfileFunc, profileDetails, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await updateProfileFunc(profileDetails).unwrap();
      const {firstName, lastName, avatar, email} = response.user;
      const {about, contactNumber, gender, dateOfBirth} = response.user.additionalDetails;
      console.log("update profile response", response);

      toast.success("Successfully updated profile details")
      localStorage.setItem("userDetails" , JSON.stringify({firstName, lastName, profile : avatar, about, contactNumber, gender, dateOfBirth, email}));
      dispatch(setUserDetails({firstName, lastName, profile : avatar, about, contactNumber, gender, dateOfBirth, email}));
      dispatch(setLoading(false));

      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("Error in updateProfile function", error);
      toast.error(error.data.message);
    }

    toast.dismiss(toastId);
  };
};

export const updateProfilePicture = (updateProfilePictureFunc, displayPicture) => {
  return async (dispatch) => {

    const toastId = toast.loading("Loading...");
    dispatch(setLoading(false));

    try {
      
      const response = await updateProfilePictureFunc(displayPicture).unwrap();
      console.log("succefully updated profile picture" , response);

      const {firstName, lastName, email, avatar} = response.data;

      localStorage.setItem("userDetails" , JSON.stringify({firstName, lastName, email, profile : avatar}));
      dispatch(setUserDetails({firstName, lastName, email, profile : avatar}))
      toast.success("Profile picture updated successfully");
      dispatch(setLoading(false));

    } catch (error) {
      console.log("Error in update profile picture" , error);
      toast.error("Something went wrong. Please try again later");
    }
    toast.dismiss(toastId);

  }
}
