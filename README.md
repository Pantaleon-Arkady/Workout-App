# 🏋️ Workout Tracker App

A **Dockerized workout logging application** built with **Laravel, React, and Bootstrap**.

The goal of this app is to **log daily workouts** and visualize training consistency using a **GitHub-style contribution heatmap**, where each day represents **exercises completed instead of commits**.

> ⚠️ This project is **actively evolving**. Features and structure will be refined over time as the app grows.

---

## ✨ Core Idea

* Log workouts performed on a given day
* Each logged workout contributes to that day’s activity
* Display a **yearly contribution graph** similar to GitHub
* Darker / stronger colors = more exercises or higher volume

This app focuses on **consistency over perfection**.

---

## 🧱 Tech Stack

### Backend

* **Laravel** (PHP)
* REST-style API endpoints
* Future-ready for authentication & stats

### Frontend

* **React** (mounted inside Laravel)
* **Bootstrap** (CSS only)
* Vite for fast development & HMR

### Infrastructure

* **Docker**
* **Nginx**
* **PHP-FPM**
* **Node.js (Vite)**

---

## 📦 Features (Planned & In Progress)

### ✅ Initial

* [x] Dockerized Laravel environment
* [x] React + Bootstrap integration
* [x] Vite hot reload inside Docker

### 🔜 Planned

* [ ] Daily workout logging
* [ ] Exercise list (push / pull / legs / core)
* [ ] GitHub-style yearly heatmap
* [ ] Exercise volume tracking
* [ ] Streak tracking
* [ ] Weekly & monthly summaries

### 🌱 Future Ideas

* Exercise templates
* Progress analytics
* Mobile-first UI
* User accounts
* Export data (CSV / JSON)

---

## 🗂 Project Structure

```
laravel-react-docker/
├── docker/
│   ├── nginx/
│   └── php/
├── src/
│   ├── app/
│   ├── public/
│   ├── resources/
│   │   ├── js/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── app.jsx
│   │   └── views/
│   ├── routes/
│   └── artisan
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

### Requirements

* Docker Desktop
* Docker Compose v2

---

### 1️⃣ Build & start containers

```bash
docker compose up -d --build
```

---

### 2️⃣ Install Laravel (inside container)

```bash
docker compose exec app composer install
```

---

### 3️⃣ Fix permissions

```bash
docker compose exec app chmod -R 777 storage bootstrap/cache
```

---

### 4️⃣ Install frontend dependencies

```bash
docker compose exec node npm install
```

---

### 5️⃣ Run Vite

```bash
docker compose exec node npm run dev
```

---

### 6️⃣ Open in browser

```
http://localhost:8000
```

---

## 🧠 Concept: Workout Contribution Graph

Inspired by GitHub’s contribution heatmap:

* Each square = one day
* Color intensity = workout volume
* No workout = empty cell

Possible scoring ideas:

* 1 exercise = light shade
* 5+ exercises = darkest shade
* Or based on total sets / reps

> The scoring system is intentionally flexible and will be refined later.

---

## 🔧 Development Notes

* Laravel handles routing, API, and data
* React handles UI rendering
* Blade is used **only as a React mount point**
* Bootstrap JS is avoided (React controls interactivity)

---

## 📌 Philosophy

This app is built with the mindset of:

> **"Show up consistently. Improve gradually."**

The codebase is expected to evolve alongside personal training habits.

---

## 🛠 Status

🟡 **Early Development**

Expect breaking changes, refactors, and feature experiments.

---

## 📄 License

MIT (or decide later)

---

## 🙌 Notes

This project is primarily a **learning + personal productivity tool**.
It prioritizes clarity, maintainability, and real-world dev practices over perfection.
