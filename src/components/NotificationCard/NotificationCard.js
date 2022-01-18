import React from "react";
import AccountCreationNotification from "./AccountCreationNotification";
import PostNotificationCard from "./PostNotificationCard";

const NotificationCard = (props) => {
  const { notificationType, ...rest } = props;
  let Notification = null;
  if (notificationType === "accountCreation"){
    Notification = AccountCreationNotification;
  }else if (notificationType === "post"){
    Notification = PostNotificationCard;
  }
  return <Notification {...rest} />
};

export default NotificationCard;
