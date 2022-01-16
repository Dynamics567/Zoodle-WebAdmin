import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

const CardTable = (props) => {
  let { title, tableData } = props;
  return (
    <Card>
      <CardHeader color="whute" contentPosition="left">
        <h2 className="text-black text-2xl mt-10">{title}</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {tableData.headers.map((header) => {
                  return (
                    <th
                      key={header}
                      className="px-2 align-middle border-b-2 border-solid border-gray-500 py-3 text-sm whitespace-nowrap font-bold text-left"
                    >
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tableData.data.map((row, i) => {
                return (
                  <tr key={i}>
                    {tableData.headers.map((header) => {
                      let statusStyling = "";
                      if (
                        header === "Status" &&
                        (row[header] === "Suspended" ||
                          row[header] === "Blocked")
                      ) {
                        statusStyling = "text-red-500";
                      } else if (
                        header === "Status" &&
                        row[header] === "Active"
                      ) {
                        statusStyling = "text-green-500";
                      }
                      let dataStyling = `align-middle font-medium text-sm whitespace-nowrap px-2 py-4 text-left ${statusStyling}`;
                      if (header === "") {
                        dataStyling = `${row.Status === "Blocked"? "bg-gray-400 opacity-70 text-white": "bg-white text-orange-500 border border-orange-500"} align-middle font-light text-sm text-center whitespace-nowrap px-3 py-3 rounded-xl mx-1 my-3 pointer`;
                      }
                      return (
                        <td key={header}>
                          <div
                            className={`${
                              header === "" ? "grid grid-cols-2" : dataStyling
                            }`}
                          >
                            {header !== "" ? (
                              row[header]
                            ) : (
                              <>
                                <button className={`${dataStyling}`}>
                                  {" "}
                                  Block User{" "}
                                </button>
                                <button className={`${dataStyling}`}>
                                  {" "}
                                  {row.Status === "Suspended"
                                    ? "Unsuspend"
                                    : "Suspend"}{" "}
                                  User{" "}
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardTable;
