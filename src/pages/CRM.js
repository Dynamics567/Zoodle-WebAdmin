import StatusCard from "components/StatusCard";
import TableCard from "components/TableCard/CRMTableCard";

const tableData = {
  headers: ["Date", "Username", "Email", "Phone No", "Status", ""],
  data: [
    {
      Date: "17-08-2021",
      Username: "Steve",
      Email: "johndoe@gmail.com",
      "Phone No": "+234819070543",
      Status: "Pending",
      "": "Respond",
    },
    {
      Date: "16-08-2021",
      Username: "Steve",
      Email: "johndoe@gmail.com",
      "Phone No": "+234819070543",
      Status: "Responded",
      "": "Respond",
    },
    {
      Date: "16-08-2021",
      Username: "Steve",
      Email: "johndoe@gmail.com",
      "Phone No": "+234819070543",
      Status: "Pending",
      "": "Respond",
    },
    {
      Date: "16-08-2021",
      Username: "Steve",
      Email: "johndoe@gmail.com",
      "Phone No": "+234819070543",
      Status: "Responded",
      "": "Respond",
    },
  ],
};
const CRM = () => {
  return (
    <>
      <div className="bg-white pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
            <StatusCard title="Total Users" amount="3,275" />
            <StatusCard title="New Users" amount="100" />
            <StatusCard title="Active Users" amount="2000" />
            <StatusCard title="Users Report" amount="50" />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard title={"Reports"} tableData={tableData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CRM;
