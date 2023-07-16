import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import * as Icons from "react-icons/vsc";
const SideBarLink = ({ index, path, name, iconName}) => {
    
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const Icon = Icons[iconName];

  return (
    <>
      <Link
        key={index}
        to={path}
        className={`flex w-[100%] items-center gap-2 px-8 py-2 transition-all duration-200 ${
          matchRoute(path)
            ? "text-yellow-50 bg-yellow-800"
            : "text-pure-greys-200"
        }`}
      >
        <Icon />
        {name}
      </Link>
    </>
  );
};

export default SideBarLink;
