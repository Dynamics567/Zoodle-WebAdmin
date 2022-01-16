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
                      if (header === "Status" && row[header] === "Pending") {
                        statusStyling = "text-red-500";
                      } else if (
                        header === "Status" &&
                        row[header] === "Completed"
                      ) {
                        statusStyling = "text-green-500";
                      }
                      return (
                        <td
                          key={header}
                          className={`align-middle font-normal text-sm whitespace-nowrap px-2 py-4 text-left ${statusStyling}`}
                        >
                          {row[header]}
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
