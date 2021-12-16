import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import ChartDoughnut from 'components/ChartDoughnut';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      
      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
            <StatusCard
              title="Traffic"
              amount="350,897"
            />
            <StatusCard
              title="New Users"
              amount="2,356"
            />
            <StatusCard
              title="Sales"
              amount="924"
            />
            <StatusCard
              title="Performance"
              amount="49,65%"
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
              <ChartBar />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <ChartDoughnut />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full">
              <div className="grid grid-cols-1 xl:grid-cols-5">
                  <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                      <PageVisitsCard />
                  </div>
                  <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                      <TrafficCard />
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}