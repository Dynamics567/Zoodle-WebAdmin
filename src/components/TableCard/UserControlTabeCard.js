import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

const CardTable = (props) => {
  let { title, tableData } = props;
  const [localTableData, setTableData] = useState(tableData);
  const onRespond = (index, Status) => {
    const temp = localTableData.data.map((datum, i) => {
      return index === i
        ? {
            ...datum,
            Status,
          }
        : datum;
    });
    setTableData({ headers: localTableData.headers, data: temp });
  };
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
              {localTableData.data.map((row, i) => {
                return (
                  <tr key={i}>
                    {localTableData.headers.map((header) => {
                      let statusStyling = "";
                      if (header === "Status") {
                        switch (row[header]) {
                          case "Suspended":
                            statusStyling = "text-red-500";
                            break;
                          case "Blocked":
                            statusStyling = "text-red-500";
                            break;
                          case "Active":
                            statusStyling = "text-green-500";
                            break;
                          default:
                            statusStyling = "text-red-500";
                            break;
                        }
                      }
                      let dataStyling = `align-middle font-medium text-sm whitespace-nowrap px-2 py-4 text-left ${statusStyling}`;
                      if (header === "") {
                        switch (row.Status) {
                          case "Suspended":
                            dataStyling = `bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white align-middle font-light text-sm text-center whitespace-nowrap px-3 py-3 rounded-xl mx-1 my-3 pointer`;
                            break;
                          case "Blocked":
                            dataStyling = `bg-gray-400 opacity-70 text-white cursor-not-allowed outline-0 focus:outline-0 border-0 focus:outline-0 align-middle font-light text-sm text-center whitespace-nowrap px-3 py-3 rounded-xl mx-1 my-3 pointer`;
                            break;
                          case "Active":
                            dataStyling = `bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white align-middle font-light text-sm text-center whitespace-nowrap px-3 py-3 rounded-xl mx-1 my-3 pointer`;
                            break;
                          default:
                            dataStyling = `bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white align-middle font-light text-sm text-center whitespace-nowrap px-3 py-3 rounded-xl mx-1 my-3 pointer`;
                            break;
                        }
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
                                <button
                                  className={`${dataStyling}`}
                                  onClick={() => {
                                    return header === ""
                                      ? onRespond(i, "Blocked")
                                      : undefined;
                                  }}
                                >
                                  {" "}
                                  Block User{" "}
                                </button>
                                <button
                                  className={`${dataStyling}`}
                                  onClick={() => {
                                    return header === "" && row.Status !== "Blocked"
                                      ? onRespond(
                                          i,
                                          row.Status === "Suspended"
                                            ? "Active"
                                            : "Suspended"
                                        )
                                      : undefined;
                                  }}
                                >
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
