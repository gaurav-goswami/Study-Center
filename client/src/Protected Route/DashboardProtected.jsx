import { Navigate, Outlet } from "react-router-dom";

const DashboardProtection = ({isAuth}) => {
    if(isAuth){
        return <Outlet />
    }
    return <Navigate to = "/"/>
}

export default DashboardProtection;