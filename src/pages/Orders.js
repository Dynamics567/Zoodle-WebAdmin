import TableCard from "components/TableCard/OrderTableCard";

const Orders = () => {
  const tableData = {
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
  return (
    <>
      <div className="bg-white pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard title={"Orders"} tableData={tableData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
