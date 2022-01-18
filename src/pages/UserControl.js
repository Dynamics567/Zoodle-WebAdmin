import React from "react";
import TableCard from "components/TableCard/UserControlTabeCard";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPanel from "components/Tabs/TabPanel";
import SearchBar from "components/SearchBar";

const tableData = {
  headers: ["User ID", "Username", "Email", "Status", ""],
  data: [
    {
      "User ID": "#89072",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Active",
    },
    {
      "User ID": "#89073",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Suspended",
    },
    {
      "User ID": "#89074",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Active",
    },
    {
      "User ID": "#89075",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Blocked",
    },
    {
      "User ID": "#89076",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Active",
    },
    {
      "User ID": "#89077",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Suspended",
    },
    {
      "User ID": "#89072",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Active",
    },
    {
      "User ID": "#89073",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Blocked",
    },
    {
      "User ID": "#89074",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Active",
    },
    {
      "User ID": "#89075",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Suspended",
    },
    {
      "User ID": "#89076",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Active",
    },
    {
      "User ID": "#89077",
      Username: "@dogz_arena",
      Email: "johndoe@gmail.com",
      Status: "Blocked",
    },
  ],
};
const UserControl = () => {
  const allTableData = tableData;
  const blockedTableData = {
    ...tableData,
    data: tableData.data.filter((data) => {
      return data.Status === "Blocked";
    }),
  };
  const suspendedTableData = {
    ...tableData,
    data: tableData.data.filter((data) => {
      return data.Status === "Suspended";
    }),
  };
  return (
    <>
      <div className="bg-white pt-1 pb-28 px-3 md:px-2 h-auto">
        <Tabs initialValue="all-users" className="tabs-menu">
          <div className="tabs-menu__tabs">
            <Tab name="all-users">
              <h3>All Users ({allTableData.data.length})</h3>
            </Tab>
            <Tab name="blocked-users">
              <h3>Blocked Users ({blockedTableData.data.length})</h3>
            </Tab>
            <Tab name="suspended-users">
              <h3>Suspended Users ({suspendedTableData.data.length})</h3>
            </Tab>
          </div>
          <SearchBar />
          <div className="tabs-menu__panels">
            <TabPanel name="all-users">
              <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 px-4 mb-16">
                  <TableCard title={"User Control"} tableData={allTableData} />
                </div>
              </div>
            </TabPanel>
            <TabPanel name="blocked-users">
              <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 px-4 mb-16">
                  <TableCard
                    title={"User Control"}
                    tableData={blockedTableData}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel name="suspended-users">
              <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 px-4 mb-16">
                  <TableCard
                    title={"User Control"}
                    tableData={suspendedTableData}
                  />
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default UserControl;
