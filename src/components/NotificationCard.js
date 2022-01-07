import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Team1 from "assets/img/team-1-800x800.jpg";
import Team2 from "assets/img/team-2-800x800.jpg";

const NotificationCard = () => {
  return (
    <Card>
      <CardBody className="flex max-w-full justify-between">
        <div className="flex flex-col">
          <div className="flex">
            {/* <div className="w-10 h-10 rounded-full border-2 border-white">
              <Image src={Team1} rounded alt="..." />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
              <Image src={Team2} rounded alt="..." />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
              <Image src={Team3} rounded alt="..." />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
              <Image src={Team4} rounded alt="..." />
            </div> */}
            <div className="w-10 h-10 rounded-full border-2 border-white">
              <Image src={Team1} rounded alt="..." />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
              <Image src={Team2} rounded alt="..." />
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-gray-400 bg-gray-400 opacity-80 text-white -mt-2 mx-auto items-center justify-center">
            <p className="m-0.5">+5</p>
          </div>
        </div>
        <div className="mt-2">
          John Doe. Steve Smith and 5 others just created an account
        </div>
        <div className="mt-2">
          5 mins ago
        </div>
      </CardBody>
    </Card>
  );
};

export default NotificationCard;
