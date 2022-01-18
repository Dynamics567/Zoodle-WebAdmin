import NotificationCard from "components/NotificationCard/NotificationCard";
import Team1 from "assets/img/team-1-800x800.jpg";
import Team2 from "assets/img/team-2-800x800.jpg";

const Notifications = () => {
  const users = [
    {
      name: "John Doe",
      img: Team1
    },
    {
      name: "Steve Smith",
      img: Team2
    },
    {
      name: "John Doe",
      img: Team1
    },
    {
      name: "Steve Smith",
      img: Team2
    },
    {
      name: "John Doe",
      img: Team1
    },
    {
      name: "Steve Smith",
      img: Team2
    },
    {
      name: "John Doe",
      img: Team1
    },
  ];
  const user = {
    name: "John Doe",
    img: Team1,
    postOn: "dogz_arena",
  }
  return (
    <>
      <div className="bg-white pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 gap-y-2 px-4 mb-16">
            <NotificationCard notificationType="accountCreation" users={users} />
            <NotificationCard notificationType="post" user={user} />
            <NotificationCard notificationType="accountCreation" users={users} />
            <NotificationCard notificationType="post" user={user} />
            <NotificationCard notificationType="accountCreation" users={users} />
            <NotificationCard notificationType="post" user={user} />
            <NotificationCard notificationType="accountCreation" users={users} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
