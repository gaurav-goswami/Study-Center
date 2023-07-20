import { toast } from "react-hot-toast"
import { logout } from "./AuthApi";

export const deleteUserAccount = (accountDeleteFunc, navigate) => {
    return async (dispatch) => {

        const toastId = toast.loading("Loading...")

        try {
            
            const response = await accountDeleteFunc();
            console.log("delete response" , response);
            toast.success("Account Deleted Successfully")
            dispatch(logout(navigate));

        } catch (error) {
            
        }
        toast.dismiss(toastId);
    }
}