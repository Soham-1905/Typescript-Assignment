export type TaskStatus = "todo" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";
export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
    priority: Priority;
    dueDate?: Date;
}
export interface ReminderNotification {
    kind: "reminder";
    taskTitle: string;
    dueDate: Date;
}
export interface CompletedNotification {
    kind: "completed";
    taskTitle: string;
    completedAt: Date;
}
export interface OverdueNotification {
    kind: "overdue";
    taskTitle: string;
    dueDate: Date;
}
export type Notification = ReminderNotification | CompletedNotification | OverdueNotification;
//# sourceMappingURL=models.d.ts.map