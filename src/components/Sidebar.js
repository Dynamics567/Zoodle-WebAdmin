import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import H6 from "@material-tailwind/react/Heading6";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const sidebarItems = [
    {
      to: "/",
      title: "Dashboard",
    },
    {
      to: "/orders",
      title: "Orders",
    },
    {
      to: "/crm",
      title: "CRM",
    },
    {
      to: "/notifications",
      title: "Notifications",
    },
    {
      to: "/stats",
      title: "Stats",
    },
    {
      to: "/user-control",
      title: "User Control",
    },
  ];
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-orange-500 text-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="white">Zoodle</H6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              {sidebarItems.map((item) => {
                return (
                  <li className="rounded-r-lg mb-4 -ml-16 pl-8">
                    <NavLink
                      key={item.title}
                      to={item.to}
                      exact
                      className="flex items-center gap-4 text-sm text-white font-light px-12 py-3 rounded-lg"
                      activeClassName="bg-white text-orange-500 shadow-md"
                    >
                      <h6>{item.title}</h6>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;