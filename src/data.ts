import type {Task} from "./models";
export function fetchTasks(): Promise<Task[]>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve([
            {
                id: 1,
                title: "Review TypeScript basics",
                status: "todo",
                priority: "high",
                dueDate: new Date("2026-10-20"),
            },
            {
                id: 2,
                title: "Practise generics",
                status: "in-progress", 
                priority: "medium",
            },
            {
                id: 3,
                title: "Read about utility types",
                status: "done",
                priority: "low",
            },
        ])
      },500)  
    });
}