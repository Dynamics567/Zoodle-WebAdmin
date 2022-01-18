import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";

const AccountCreationNotification = (props) => {
  const { users } = props;
  return (
    <Card className="border-2">
      <CardBody className="grid grid-cols-12 max-w-full p-0">
        <div className="col-span-1 flex flex-col m-auto">
          <div className="flex">
            <div className="w-10 h-10 rounded-full border-2 border-white">
              <Image src={users[0].img} rounded alt="..." />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
              <Image src={users[1].img} rounded alt="..." />
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-gray-400 bg-gray-400 opacity-80 text-white -mt-2 mx-auto items-center justify-center">
            <p className="m-0.5 font-normal">+{users.length - 2}</p>
          </div>
        </div>
        <div className="col-span-10 my-5 pl-10">
          <span className="font-semibold opacity-100"> {users[0].name}, </span>{" "}
          <span className="font-semibold opacity-100"> {users[1].name} </span>{" "}
          <span className="opacity-50">and</span>{" "}
          <span className="font-semibold opacity-100">
            {" "}
            {users.length - 2} others {" "}
          </span>{" "}
          <span className="opacity-50">just created an account</span>
        </div>
        <div className="col-span-1 mt-10 opacity-50 text-sm align-baseline">5 mins ago</div>
      </CardBody>
    </Card>
  );
};

export default AccountCreationNotification;
