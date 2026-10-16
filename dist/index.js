"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./repository");
const data_1 = require("./data");
const notifications_1 = require("./notifications");
async function main() {
    try {
        const taskRepository = new repository_1.Repository();
        const fetchedTasks = await (0, data_1.fetchTasks)();
        fetchedTasks.forEach((task) => taskRepository.add(task));
        console.log("Loaded Tasks:", taskRepository.filter(() => true));
        const taskDetails = {
            title: "Learn TypeScript",
            status: "todo",
            priority: "medium",
        };
        const newTask = {
            id: 4,
            ...taskDetails,
        };
        taskRepository.add(newTask);
        console.log("Added Task:", newTask);
        const updatedTask = taskRepository.update(2, {
            status: "done",
            priority: "high",
        });
        console.log("Updated Task:", updatedTask);
        const todoTasks = taskRepository.filter((task) => task.status === "todo");
        console.log("Todo Tasks:", todoTasks);
        const wasRemoved = taskRepository.remove(3);
        console.log("Task with ID 3 removed:", wasRemoved);
        const notifications = [
            {
                kind: "reminder",
                taskTitle: "Write the project README.md",
                dueDate: new Date("2026-10-20"),
            },
            {
                kind: "completed",
                taskTitle: "Practise generics",
                completedAt: new Date(),
            },
            {
                kind: "overdue",
                taskTitle: "Review TypeScript basics",
                dueDate: new Date("2026-10-10"),
            },
        ];
        notifications.forEach((notification) => {
            console.log((0, notifications_1.formatNotification)(notification));
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Could not run the task manager:", error.message);
        }
        else {
            console.error("Could not run the task manager:", error);
        }
    }
}
void main();
//# sourceMappingURL=index.js.map