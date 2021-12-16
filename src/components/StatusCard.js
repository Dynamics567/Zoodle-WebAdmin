import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";

export default function StatusCard({
  title,
  amount,
}) {
  return (
    <div className="px-4 mb-10 w-max xl:w-48 text-center">
      <Card>
        <CardBody>
          <H4>{title}</H4>
          <H6 color='orange'>{amount}</H6>
        </CardBody>
      </Card>
    </div>
  );
}
