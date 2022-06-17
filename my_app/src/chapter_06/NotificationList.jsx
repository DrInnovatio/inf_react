import React from 'react'
import Notification from "./Notification";

const reservedNotifications = [
  {
    message: "Hello, this is your schedule today.",
  },
  {
    message: "It is lunch time.",
  },
  {
    message: "It is about to start the meeting."
  },
  {
    message: "It is done."
  }
];

var timer;

class NotificationList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return (
        <div>
        { this.state.notifications.map((notification) => {
              return <Notification message={notification.message}/>
            })}
        </div>
      )
    }
}

export default NotificationList;