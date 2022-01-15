import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

const CardTable = (props) => {
  let { title, tableData } = props;
  if (!title) {
    title = "Orders";
  }
  if (!tableData) {
    tableData = {
      headers: [
        "Order ID",
        "Buyer",
        "Seller",
        "Buyer Email",
        "Seller Email",
        "Date",
        "Status",
      ],
      data: [
        {
          "Order ID": "#89072",
          Buyer: "Steve",
          Seller: "@dogz_arena",
          "Buyer Email": "johndoe@gmail.com",
          "Seller Email": "johndoe@gmail.com",
          Date: "17-08-2021",
          Status: "Pending",
        },
        {
          "Order ID": "#89073",
          Buyer: "Steve",
          Seller: "@dogz_arena",
          "Buyer Email": "johndoe@gmail.com",
          "Seller Email": "johndoe@gmail.com",
          Date: "16-08-2021",
          Status: "Completed",
        },
        {
          "Order ID": "#89074",
          Buyer: "Steve",
          Seller: "@dogz_arena",
          "Buyer Email": "johndoe@gmail.com",
          "Seller Email": "johndoe@gmail.com",
          Date: "16-08-2021",
          Status: "Pending",
        },
        {
          "Order ID": "#89075",
          Buyer: "Steve",
          Seller: "@dogz_arena",
          "Buyer Email": "johndoe@gmail.com",
          "Seller Email": "johndoe@gmail.com",
          Date: "16-08-2021",
          Status: "Completed",
        },
        {
          "Order ID": "#89076",
          Buyer: "Steve",
          Seller: "@dogz_arena",
          "Buyer Email": "johndoe@gmail.com",
          "Seller Email": "johndoe@gmail.com",
          Date: "15-08-2021",
          Status: "Pending",
        },
        {
          "Order ID": "#89077",
          Buyer: "Steve",
          Seller: "@dogz_arena",
          "Buyer Email": "johndoe@gmail.com",
          "Seller Email": "johndoe@gmail.com",
          Date: "14-08-2021",
          Status: "Completed",
        },
      ],
    };
  }
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
                      return (
                        <th
                          key={header}
                          className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                        >
                          {row[header]}
                        </th>
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
