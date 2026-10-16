"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNotification = formatNotification;
function formatNotification(notification) {
    switch (notification.kind) {
        case "reminder":
            return `Reminder : "${notification.taskTitle}" is due on ${notification.dueDate.toLocaleDateString()}.`;
        case "completed":
            return `"${notification.taskTitle}" was completed on ${notification.completedAt.toLocaleDateString()}.`;
        case "overdue":
            return `Overdue: "${notification.taskTitle}" was due on ${notification.dueDate.toLocaleDateString()}.`;
    }
}
//# sourceMappingURL=notifications.js.map