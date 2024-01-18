# RoutineCheck

A todo/habit app built with react, tailwind, typescript, and jest. The backend uses php/laravel.

RoutineCheck allows for CRUD operations for todo tasks in hourly daily or todo lists. The server will mark hourly tasks as incomplete each hour, and daily tasks once a day.

Most of the logic is within src/components/taskBlock.tsx

## Run:

1. Install Node.js (if not done yet): download and install Node.js from the [official website](https://nodejs.org) following the installation instructions for your operating system.

2. Clone the repository

3. Install dependencies by running 'npm install'

4. Start the development server using 'npm run dev'

5. Navigate to Vite's default server [port](http://localhost:5173) in your browser

6. Set up the local php server following the instructions at [https://github.com/GeorgeHarland/RTHG-todo-backend](https://github.com/GeorgeHarland/routine-backend)

## Gallery:

![image](https://github.com/GeorgeHarland/RTHG-todo-frontend/assets/37070520/4fb860e3-d7b4-4fba-8c13-962c56c8d348)

## Future Todos:

- Fix the jest test
- Add a streak count for completed tasks
- Improve the design. Quite bland at the moment
- Completed todos should move to the bottom of the list
- popup for 'are you sure you want to delete this todo?'
