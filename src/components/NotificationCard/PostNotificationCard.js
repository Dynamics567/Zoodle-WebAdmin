import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Team1 from "assets/img/team-1-800x800.jpg";

const PostNotificationCard = (props) => {
  const { user } = props;
  return (
    <Card className="border-2">
      <CardBody className="grid grid-cols-12 max-w-full p-0">
        <div className="col-span-1 flex flex-col my-3">
          <div className="m-auto">
            <div className="w-10 h-10 rounded-full border-2 border-white">
              <Image src={Team1} rounded alt="..." />
            </div>
          </div>
        </div>
        <div className="col-span-10 my-5 pl-10">
          <span className="font-semibold opacity-100">{user.name}</span>{" "}
          <span className="opacity-50">commented on the </span>
          <span className="font-semibold opacity-100">{user.postOn}</span>{" "}
          <span className="opacity-50">post</span>
        </div>
        <div className="col-span-1 mt-10 opacity-50 text-sm align-baseline">
          5 mins ago
        </div>
      </CardBody>
    </Card>
  );
};

export default PostNotificationCard;
