# 🎓 EduWiz — Learn & Grow

<div align="center">

**An educational platform offering courses, resources, quizzes, and peer-to-peer video chat for students.**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.5-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Vite](https://img.shields.io/badge/Vite-5.2-purple.svg)](https://vitejs.dev/)

</div>

---

## ✨ Features

- **📚 Course Catalog** — Browse and enroll in courses across Software Engineering, App Development, UI/UX, Pharma, Stock Market, and Mathematics
- **🎥 Video Lessons** — Watch embedded YouTube video lectures with React Player
- **📝 Interactive Quiz** — Test your knowledge with a multiple-choice quiz system
- **💬 WebRTC Peer Chat** — Real-time peer-to-peer video calling using Agora RTM SDK
- **📖 Semester Resources** — Access study materials organized by semester
- **🔐 Authentication** — Secure signup/login with BCrypt password hashing
- **📱 Responsive Design** — Built with Tailwind CSS for mobile-friendly layouts

---

## 🏗️ Architecture

```
GROUP1-EDUWIZ/
├── EDUWIZ-FINAL/          # React Frontend (Vite + Tailwind CSS)
│   ├── src/
│   │   ├── Components/    # Reusable UI components
│   │   ├── sections/      # Page-level components (Home, About, etc.)
│   │   ├── context/       # React Context (User authentication)
│   │   └── assets/        # Images and static assets
│   └── package.json
│
├── backend-eduwiz/        # Spring Boot Backend (Auth API)
│   ├── src/main/java/com/example/backendeduwiz/
│   │   ├── controllers/   # REST API endpoints
│   │   ├── model/         # JPA entities
│   │   ├── repository/    # Data access layer
│   │   ├── service/       # Business logic
│   │   └── config/        # Security & CORS config
│   └── pom.xml
│
└── Image-Uploading/       # Image Upload Microservice (Spring Boot + Thymeleaf)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS, React Router v6 |
| Backend | Spring Boot 3.2.5, Spring Security, Spring Data JPA |
| Database | MySQL 8.0 |
| Video Chat | Agora RTM SDK, WebRTC |
| Video Player | React Player |
| Styling | Tailwind CSS 3.4 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and npm
- **Java JDK** 22 (for backend) or JDK 21 (for Image-Uploading service)
- **MySQL** 8.0+ running on `localhost:3306`
- **Maven** (or use the included `mvnw` wrapper)

### 1. Clone the Repository

```bash
git clone https://github.com/eshant742/GROUP1-EDUWIZ.git
cd GROUP1-EDUWIZ
```

### 2. Set Up MySQL Database

```sql
CREATE DATABASE testDb;
CREATE DATABASE login_system;
```

### 3. Configure Environment Variables

**Backend** — Set these before running:
```bash
export DB_URL=jdbc:mysql://localhost:3306/testDb
export DB_USERNAME=root
export DB_PASSWORD=your_mysql_password
```

**Frontend** — Create `EDUWIZ-FINAL/.env`:
```env
VITE_AGORA_APP_ID=your_agora_app_id
VITE_API_URL=http://localhost:8080/api
```

### 4. Start the Backend

```bash
cd backend-eduwiz
./mvnw spring-boot:run
# Backend starts on http://localhost:8080
```

### 5. Start the Frontend

```bash
cd EDUWIZ-FINAL
npm install
npm run dev
# Frontend starts on http://localhost:5173
```

### 6. Open in Browser

Navigate to **http://localhost:5173** — You should see the EduWiz homepage!

> **Note:** Without the backend running, login/signup will fail. For quick testing, you can set localStorage manually:
> ```js
> localStorage.setItem('user', '{"name":"Test User","email":"test@test.com"}')
> ```

---

## 📁 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/signup` | Register a new user |
| POST | `/api/login` | Authenticate a user |
| POST | `/api/logout` | End user session |

---

## 👥 Team

Built with ❤️ by students from **IIIT Lucknow**:

| Name | Role |
|------|------|
| **Swyam Kumar** | Developer |
| **Safiya Nasir** | Developer |
| **Eshant Gupta** | Developer |
| **Medha Bhardwaj** | Developer |
| **Prateek Mishra** | Developer |
| **Aditya Chandel** | Developer |

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

## 📞 Contact

- **Address:** IIIT Lucknow, Uttar Pradesh, India
- **GitHub:** [github.com/eshant742/GROUP1-EDUWIZ](https://github.com/eshant742/GROUP1-EDUWIZ)
