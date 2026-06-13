# 🌱 BrightRoots

> Learn. Play. Grow.

BrightRoots is a gamified learning platform designed for rural students in India. The application transforms education into an engaging experience through quizzes, XP rewards, badges, progress tracking, and interactive learning.

Built using **React**, **React Router**, **Context API**, and **TailwindCSS**.

---

# 📚 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Folder Structure](#-folder-structure)
- [Application Flow](#-application-flow)
- [Quiz System](#-quiz-system)
- [XP & Badge System](#-xp--badge-system)
- [Context API State Management](#-context-api-state-management)
- [Routing System](#-routing-system)
- [UI/UX Design](#-uiux-design)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Future Improvements](#-future-improvements)
- [Challenges Faced](#-challenges-faced)
- [Learnings](#-learnings)
- [Deployment](#-deployment)
- [Author](#-author)

---

# 🚀 Introduction

BrightRoots is a modern educational quiz platform focused on helping rural students learn important academic and practical topics in a fun and engaging way.

The platform uses:

- Gamification
- XP rewards
- Achievement badges
- Progress tracking
- Interactive quizzes
- Instant feedback
- Explanations after answers

to encourage consistent learning.

---

# ✨ Features

## 🎮 Gamified Learning

Students earn:

- XP points
- Badges
- Quiz scores
- Progress completion

after every quiz session.

---

## 📖 Multiple Subjects

The platform currently supports:

- 📐 Mathematics
- 🌿 Environmental Science
- 🧠 General Knowledge
- 💻 Digital Literacy

Each subject contains:

- 10 questions
- Explanations
- Difficulty levels
- Subject-specific progression

---

## ⏱️ Quiz Timer System

Every question includes:

- A 30-second timer
- Automatic next-question progression
- Visual countdown progress bar

---

## 💡 Instant Explanations

After selecting an answer, students immediately see:

- Concept explanation
- Learning reasoning
- Educational context

---

## 🏆 Badge Unlock System

| Badge         | Requirement           |
| ------------- | --------------------- |
| ⭐ First Star | Complete first quiz   |
| 🔥 On Fire    | Score 8/10 or higher  |
| 🏆 Champion   | Complete all subjects |
| 💡 Genius     | Perfect 10/10 score   |

---

# ❗ Problem Statement

Many students in rural areas face challenges such as:

- Limited access to engaging digital education
- Lack of interactive learning platforms
- Low motivation while studying traditional subjects
- Poor exposure to digital literacy

Most learning platforms are either:

- Too complicated
- Too expensive
- Too heavy for low-end devices
- Not designed for rural learners

---

# ✅ Solution

BrightRoots solves these problems by providing:

- Simple and intuitive interface
- Gamified quiz experience
- Lightweight frontend architecture
- Educational + practical learning
- Motivating XP system
- Reward-based progression

---

# 🛠️ Tech Stack

## Frontend

- React
- React Router DOM
- TailwindCSS

## State Management

- React Context API
- useState
- useContext

## Icons

- React Icons

## Build Tool

- Vite

---

# 🧱 Project Architecture

The project follows a modular component-based architecture.

### Main Architecture Layers

- Layout System
- Routing System
- Pages
- Shared Components
- Global Context
- Static Quiz Data

---

# 📂 Folder Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── context/
│   └── QuizContext.jsx
│
├── data/
│   ├── badges.js
│   ├── math.js
│   ├── evs.js
│   ├── gk.js
│   ├── digital.js
│   └── subjects.js
│
├── layout/
│   └── Layout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Subjects.jsx
│   ├── Quiz.jsx
│   └── Result.jsx
│
├── App.jsx
└── main.jsx
```

---

# 🔄 Application Flow

## 1️⃣ Home Page

Users land on:

- Hero section
- Platform introduction
- Leaderboard
- Badges preview
- Learning workflow

---

## 2️⃣ Subjects Page

Students choose a subject.

Each subject card displays:

- Icon
- Difficulty
- Progress bar
- XP earned

---

## 3️⃣ Quiz Page

Quiz functionality includes:

- Shuffled options
- Timer system
- Answer selection
- Explanations
- Progress tracking
- XP calculation

---

## 4️⃣ Result Page

Displays:

- Final score
- XP earned
- Wrong/correct count
- Unlocked badges
- Answer summary

---

# 🧠 Quiz System

## Dynamic Subject Loading

Questions are loaded using route parameters.

### Example Routes

```js
/quiz/math
/quiz/gk
```

---

## Randomized Options

```js
options.sort(() => Math.random() - 0.5);
```

---

## Answer Validation

```js
selectedOption === correctAnswer;
```

---

# 🏅 XP & Badge System

## XP Formula

```js
XP = Score × 10
```

---

# 🌍 Context API State Management

Global states include:

- Selected subject
- Score
- XP earned
- Answers
- Progress tracking

Benefits:

- Avoids prop drilling
- Centralized state management
- Scalable architecture

---

# 🧭 Routing System

| Route             | Description        |
| ----------------- | ------------------ |
| `/`               | Home page          |
| `/subjects`       | Subject selection  |
| `/quiz/:subjects` | Dynamic quiz route |
| `/result`         | Result page        |

---

# 🎨 UI/UX Design

## Primary Colors

| Color             | Purpose             |
| ----------------- | ------------------- |
| Orange            | Motivation & energy |
| Cyan              | Learning & calmness |
| Cream backgrounds | Soft readability    |

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into project directory:

```bash
cd brightroots
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Running the Project

Start development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 📈 Future Improvements

- Authentication system
- Firebase backend
- Real leaderboard
- Multiplayer quizzes
- AI-generated questions
- Hindi language support
- Offline mode
- Mobile app version

---

# ⚔️ Challenges Faced

- Managing quiz state globally
- Dynamic route-based quiz rendering
- Timer synchronization
- Option randomization
- Progress tracking
- Conditional UI rendering

---

# 📚 Learnings

This project helped strengthen understanding of:

- React architecture
- Context API
- Component design
- State management
- React Router
- Conditional rendering
- TailwindCSS styling

---

# 🚀 Deployment

The project can be deployed using:

- Vercel
- Netlify
- Render
- GitHub Pages

Build project:

```bash
npm run build
```

Deploy the generated `dist` folder.

---

# 📸 Screenshots


- Home Page
  ![Home Page](Assets/Home.png)
- Subjects Page
  ![Subjects Page](Assets/Subjects.png)
- Quiz Interface
  ![Quiz Page](Assets/Quiz.png)
- Results Page
  ![Results Page](Assets/Result.png)
- Badge System
  ![Badge & Leaderbaord](Assets/badge.png)

---

# 👨‍💻 Author

Built with ❤️ by **Sadik Saifi**

Passionate about:

- Frontend Development
- Educational Technology
- Gamified Learning
- Building impactful software

---

# 🌟 Final Vision

BrightRoots is more than a quiz app.

It is an attempt to make learning:

- Accessible
- Engaging
- Rewarding
- Empowering

for students who deserve equal access to quality digital education.
