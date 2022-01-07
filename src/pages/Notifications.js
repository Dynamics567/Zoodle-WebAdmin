import NotificationCard from "components/NotificationCard";

const Notifications = () => {
  return (
    <>
      <div className="bg-white pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 gap-y-2 px-4 mb-16">
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
