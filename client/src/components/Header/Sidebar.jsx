import React from "react";
import sidebarLinks from "../../data/dashboard-links";
import { useDispatch, useSelector } from "react-redux";
import SideBarLink from "./SideBarLink";
import { logout } from "../../lib/AuthApi";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = () => {
  const { userRole } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  }

  return (
    <>
      <aside className="py-2 bg-richblack-800 md:w-[25%] lg:w-[220px]">
        <div className="flex flex-col gap-2 items-center mt-8">
          {sidebarLinks.map((item) => {
            if (item.type && item.type !== userRole) return null;

            return (
              <SideBarLink
                key={item.id}
                path={item.path}
                iconName={item.icon}
                name={item.name}
              />
            );
          })}
        </div>

        <div className="mx-auto my-6 h-[1px] w-10/12 bg-richblack-600"></div>

        <div className="flex flex-col gap-2 items-center">
          <SideBarLink
            path="/dashboard/settings"
            iconName="VscSettingsGear"
            name="Settings"
          />
          <button onClick={handleLogout} className="flex w-[100%] items-center gap-2 px-8 py-2 transition-all duration-200 text-pure-greys-200">
            <div className="flex items-center gap-x-2 w-full">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
