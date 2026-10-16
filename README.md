# Typed Task Manager

A TypeScript console application that loads, creates, updates, filters, and removes tasks. It also formats typed notifications and simulates loading tasks asynchronously.

## Requirements

- Node.js and npm

## Install and run

Run these commands from the project folder (the folder containing `package.json`):

```powershell
npm install
npx.cmd tsc
node .\dist\index.js
```

The first command installs the project dependencies. The second compiles the TypeScript files from `src/` into JavaScript in `dist/`. The last command runs the compiled app. Run the compile command again after changing the source files.

If `npx tsc` works in your PowerShell, you can use it instead of `npx.cmd tsc`. The `.cmd` form avoids PowerShell execution-policy issues with the `npx` script wrapper.

## Project files

- `src/models.ts` defines the task and notification types.
- `src/repository.ts` contains the generic in-memory repository.
- `src/data.ts` simulates asynchronously fetching sample tasks.
- `src/notifications.ts` formats notifications using their `kind`.
- `src/index.ts` runs the demo.
- `tsconfig.json` enables strict type-checking and configures `src/` and `dist/`.

## TypeScript features

- `TaskStatus` and `Priority` are literal unions that restrict valid values.
- `Repository<T>` is generic and can store any item type with a numeric `id`.
- `Omit<Task, "id">` describes new task details without an ID; the demo assigns the ID separately.
- `Partial<Omit<T, "id">>` describes repository updates, allowing selected fields to change while excluding `id`.
- Notifications use a discriminated union, allowing TypeScript to narrow the available fields by `kind`.
- `fetchTasks()` returns `Promise<Task[]>` to represent asynchronously loaded tasks.

## Design notes

Tasks are stored in memory and reset when the program exits. The demo assigns the new task's ID directly.
