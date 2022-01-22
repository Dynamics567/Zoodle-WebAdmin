import React, { useState } from "react";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

const CardTable = (props) => {
  let { title, tableData } = props;
  const [localTableData, setTableData] = useState(tableData);
  const onRespond = (index) => {
    const temp = localTableData.data.map((datum, i) => {
      return index === i
        ? {
            ...datum,
            Status: "Responded",
          }
        : datum;
    });
    setTableData({ headers: localTableData.headers, data: temp });
  };
  return (
    <Card>
      <CardHeader color="white" contentPosition="left">
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
                  <tr key={i} className="py-5">
                    {tableData.headers.map((header) => {
                      let statusStyling = "";
                      if (header === "Status" && row[header] === "Pending") {
                        statusStyling = "text-red-500";
                      } else if (
                        header === "Status" &&
                        row[header] === "Responded"
                      ) {
                        statusStyling = "text-green-500";
                      }
                      let dataStyling = `align-middle font-medium text-sm whitespace-nowrap px-2 py-4 text-left ${statusStyling}`;
                      if (header === "") {
                        dataStyling = `align-middle font-medium text-sm text-white text-center whitespace-nowrap px-2 py-4 rounded-lg mx-auto my-3 py-5`;
                        if (row.Status === "Pending") {
                          dataStyling =
                            dataStyling + ` bg-orange-500 cursor-pointer`;
                        } else if (row.Status === "Responded") {
                          dataStyling =
                            dataStyling + ` bg-gray-500 cursor-not-allowed`;
                        }
                      }
                      return (
                        <td key={header}>
                          <div
                            className={`m-auto ${dataStyling}`}
                            onClick={() => {
                              return header === "" ? onRespond(i) : undefined;
                            }}
                          >
                            {row[header]}
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
