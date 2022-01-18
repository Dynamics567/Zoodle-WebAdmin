import ChartDoughnut from "components/ChartDoughnut";

const Stats = () => {
  return (
    <>
      <div className="bg-white pt-14 pb-28 px-3 md:px-8 h-auto">
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-row-2">
            <ChartDoughnut />
            <ChartDoughnut />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
