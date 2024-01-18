# RoutineCheck

A todo/habit app built with react, tailwind, typescript, and jest. The backend uses php/laravel.

RoutineCheck allows for CRUD operations for todo tasks in hourly daily or todo lists. The server will mark hourly tasks as incomplete each hour, and daily tasks once a day.

## Run:

1. Install Node.js (if not done yet): download and install Node.js from the [official website](https://nodejs.org) following the installation instructions for your operating system.

2. Clone the repository

3. Install dependencies by running 'npm install'

4. Start the development server using 'npm run dev'

5. Navigate to Vite's default server [port](http://localhost:5173) in your browser

6. Set up the local php server following the instructions at https://github.com/GeorgeHarland/RTHG-todo-backend

## Future Todos:

- Fix the jest test
- Add a streak count for completed tasks
- Improve the design. Quite bland at the moment
- Completed todos should move to the bottom of the list
- popup for 'are you sure you want to delete this todo?'