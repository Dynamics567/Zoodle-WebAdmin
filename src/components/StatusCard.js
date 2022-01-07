import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H4 from "@material-tailwind/react/Heading4";
import H5 from "@material-tailwind/react/Heading5";

export default function StatusCard({
  title,
  amount,
}) {
  return (
    <div className="px-1 mb-10 w-52 md-w-72 lg:w-56 xl:w-60 text-center">
      <Card>
        <CardBody>
          <H5>{title}</H5>
          <H4 color='orange'>{amount}</H4>
        </CardBody>
      </Card>
    </div>
  );
}
