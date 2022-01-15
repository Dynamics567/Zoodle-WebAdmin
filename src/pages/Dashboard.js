import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartDoughnut from 'components/ChartDoughnut';

export default function Dashboard() {
  return (
    <>
      <div className="bg-white pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
            <StatusCard
              title="Total Users"
              amount="3,897"
            />
            <StatusCard
              title="Income"
              amount="$2,356"
            />
            <StatusCard
              title="Active Trades"
              amount="924"
            />
            <StatusCard
              title="Total Trades"
              amount="1000"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <ChartLine />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <ChartDoughnut />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
