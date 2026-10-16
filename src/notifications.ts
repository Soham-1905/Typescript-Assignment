import type { Notification } from "./models";
export function formatNotification(notification: Notification):string{
    switch(notification.kind){
        case "reminder":
            return `Reminder : "${notification.taskTitle}" is due on ${notification.dueDate.toLocaleDateString()}.`;
        case "completed":
            return `"${notification.taskTitle}" was completed on ${notification.completedAt.toLocaleDateString()}.`;
        case "overdue":
            return `Overdue: "${notification.taskTitle}" was due on ${notification.dueDate.toLocaleDateString()}.`;
    }
}