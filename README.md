# Typed Task Manager

A TypeScript console app for creating, updating, filtering, and removing tasks. It also demonstrates typed notifications and asynchronous task loading.

## Run

From the project folder:

```powershell
npm install
npx.cmd tsc
node .\dist\index.js
```

`Omit<Task, "id">` describes task creation details without an ID. `Partial<Omit<T, "id">>` allows repository updates to change selected fields without changing the ID.
