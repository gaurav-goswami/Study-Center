import { toast } from "react-hot-toast";
import { setLoading } from "../app/features/Auth";

export function resetPasswordToken(email, resetTokenFunc, setEmailSent) {

    return async (dispatch) => {

        dispatch(setLoading(true));
        const toastID = toast.loading("Loading...")

        try {
            
            const response = await resetTokenFunc({email}).unwrap();

            toast.success("Reset password link sent")
            setEmailSent(true);

        } catch (error) {
            console.log("Error in sending reset password token" , error);
            toast.error("Something went wrong")
        }

        toast.dismiss(toastID)
        dispatch(setLoading(false));
    }
}


export function changePassword(resetPasswordDetails, resetPasswordFunc) {
    return async (dispatch) => {

        const toastID = toast.loading("Loading...")
        dispatch(setLoading(true));

        try {

            const response = await resetPasswordFunc(resetPasswordDetails).unwrap();
            toast.success("Password changed successfully");

        } catch (error) {
            console.log("error in reset password" , error);
            toast.error("Something went wrong")
        }

        toast.dismiss(toastID);
        dispatch(setLoading(false));
    }
}