import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const sidebarLinks = [
  {
    id : 0,
    name : "Home",
    path : "/",
    icon : "VscHome"
  },
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon : "VscAccount"
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: "Instructor",
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: "Instructor",
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: "Instructor",
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: "Student",
    icon: "VscMortarBoard",
  },
  {
    id : 6,
    name : "Cart",
    path : "/dashboard/cart",
    type : "Student",
    icon : "VscArchive"
  },
  {
    id: 7,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: "Student",
    icon: "VscHistory",
  },
  
];

export default sidebarLinks