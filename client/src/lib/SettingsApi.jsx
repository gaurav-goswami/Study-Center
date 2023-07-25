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
      console.log("update profile response", response);

      const userAvatar = response.user?.profile
        ? response.user?.profile
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.user.firstName} ${response.user.lastName}`;

      toast.success("Successfully updated profile details")
      dispatch(setUserDetails({ ...response.user, profile : userAvatar }));
      dispatch(setLoading(false));

      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("Error in updateProfile function", error);
      toast.error("Something went wrong while updating profile details");
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
