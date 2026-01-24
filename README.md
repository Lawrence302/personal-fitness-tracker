# Personal Fitness Tracker (CalisTrain)

_Level up your calisthenics journey with points, ranks, and progress tracking!_

**CALISTRAIN** is a single-page web application built specifically for calisthenics athletes and individuals who train using bodyweight exercises. It helps users track workouts, log exercises, and monitor progress over time (without the need for a gym).

The app gamifies calisthenics training by awarding points, displaying physical ranks, and providing visual insights into training frequency, consistency, and performance.

> _Where there is a floor, there is a gym. Your only limit is you._

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Database](#database)
- [Charts / Analytics](#charts--analytics)
- [Screenshots / UI](#screenshots--ui)
- [License](#license)

## Features

- Single-page App (SPA): Components dynamically render without full page reloads.

- Quick Log Exercise: Log exercises immediately with customizable sets and reps/duration.

- Points & Physical Rank System: Track cumulative points and see progress toward ranks.

- Session Tracking: Monitor training sessions over time with charts and analytics.

- Exercise Frequency Tracking: Visualize favorite exercises and repetition frequency.

- Interactive Charts: Area and Bar charts showing trends and stats.

- Responsive Design: Works on mobile and desktop screens.

---

## Tech Stack

### Frontend

- React (Functional Components + Hooks)
- TailwindCSS for styling
- Recharts for charts
- Lucide Icons

### State Management

- Zustand (for points, streaks, and app-wide state)

### Database / Storage

- IndexedDB via a custom `initDB` wrapper

### Utilities

- Luxon (for date and time handling)
- UUID (for unique IDs)

### Development Tools

- TypeScript
- Vite / Create React App (depending on setup)

---

## Usage

- **Log Exercises Quickly**: Click “Quick Log Exercise”, enter sets, reps/duration, and save.
- **Track Training Sessions**: Start a session, complete exercises, and the app will log points automatically.
- **View Stats & Progress**: Dashboard shows physical rank, total points, progress bar to next rank, and charts for session history and favorite exercises.
- **Points System**: Each exercise is assigned points; completing exercises adds to total points and rank.

---

## Charts / Analytics

- Exercise Frequency Chart: Displays the number of times each exercise is performed.

- Session Chart: Shows training sessions over time, using area charts to visualize trends.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Lawrence302/personal-fitness-tracker.git
cd personal-fitness-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app in development

```bash
npm run dev
```
