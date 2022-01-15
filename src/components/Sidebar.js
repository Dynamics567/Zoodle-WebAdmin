import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import H6 from "@material-tailwind/react/Heading6";
import { ReactComponent as Dashboard } from "../assets/svg/dashboard.svg";
import { ReactComponent as DashboardActive } from "../assets/svg/dashboard-active.svg";
import { ReactComponent as Orders } from "../assets/svg/orders.svg";
import { ReactComponent as OrdersActive } from "../assets/svg/orders-active.svg";
import { ReactComponent as CRM } from "../assets/svg/CRM.svg";
import { ReactComponent as CRMActive } from "../assets/svg/CRM-active.svg";
import { ReactComponent as Notifications } from "../assets/svg/notifications.svg";
import { ReactComponent as NotificationsActive } from "../assets/svg/notifications-active.svg";
import { ReactComponent as Stats } from "../assets/svg/stats.svg";
import { ReactComponent as StatsActive } from "../assets/svg/stats-active.svg";
import { ReactComponent as UserCtrl } from "../assets/svg/user-control.svg";
import { ReactComponent as UserCtrlActive } from "../assets/svg/user-control-active.svg";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const sidebarItems = [
    {
      to: "/",
      title: "Dashboard",
      icon: {
        regular: Dashboard,
        active: DashboardActive,
      },
    },
    {
      to: "/orders",
      title: "Orders",
      icon: {
        regular: Orders,
        active: OrdersActive,
      },
    },
    {
      to: "/crm",
      title: "CRM",
      icon: {
        regular: CRM,
        active: CRMActive,
      },
    },
    {
      to: "/notifications",
      title: "Notifications",
      icon: {
        regular: Notifications,
        active: NotificationsActive,
      },
    },
    {
      to: "/stats",
      title: "Stats",
      icon: {
        regular: Stats,
        active: StatsActive,
      },
    },
    {
      to: "/user-control",
      title: "User Control",
      icon: {
        regular: UserCtrl,
        active: UserCtrlActive,
      },
    },
  ];

  const location = useLocation();
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
              {sidebarItems.map((item, i) => {
                return (
                  <li className="rounded-r-lg mb-4 -ml-16 pl-8" key={i}>
                    <NavLink
                      key={item.title}
                      to={item.to}
                      exact
                      className="flex items-center gap-4 text-sm text-white font-light px-12 py-3 rounded-lg"
                      activeClassName="bg-white text-orange-500 shadow-md"
                    >
                      {location.pathname.substring(1).toLowerCase() ===
                        item.title.toLowerCase() ||
                      (location.pathname.substring(1) === "" &&
                        item.title === "Dashboard") ? (
                        <item.icon.active />
                      ) : (
                        <item.icon.regular />
                      )}
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
