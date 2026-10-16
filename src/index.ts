import type { Notification, Task } from "./models";
import { Repository } from "./repository";
import { fetchTasks } from "./data";
import { formatNotification } from "./notifications";

async function main(): Promise<void> {
    try {
        const taskRepository = new Repository<Task>();
        const fetchedTasks = await fetchTasks();

        fetchedTasks.forEach((task) => taskRepository.add(task));
        console.log("Loaded Tasks:", taskRepository.filter(() => true));

        const taskDetails: Omit<Task, "id"> = {
            title: "Learn TypeScript",
            status: "todo",
            priority: "medium",
        };

        const newTask: Task = {
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

        const todoTasks = taskRepository.filter(
            (task) => task.status === "todo"
        );
        console.log("Todo Tasks:", todoTasks);

        const wasRemoved = taskRepository.remove(3);
        console.log("Task with ID 3 removed:", wasRemoved);

        const notifications: Notification[] = [
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
            console.log(formatNotification(notification));
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Could not run the task manager:", error.message);
        } else {
            console.error("Could not run the task manager:", error);
        }
    }
}

void main();
