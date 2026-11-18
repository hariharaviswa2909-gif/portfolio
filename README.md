# 🚀 Modern Full-Stack Developer Portfolio Website

A premium, modern, fully responsive portfolio website designed for a Full-Stack Developer with 2+ years of experience in the MERN stack (React.js, Node.js, Express.js, MongoDB). Built with Material UI (MUI), Framer Motion, and Axios.

---

## 🌟 Features & Highlights

- **Visual Design**: Sleek dark theme (`#0B0F19`), glassmorphism cards, glowing accents, and smooth gradient borders.
- **Micro-Interactions & Animations**: Powered by Framer Motion (animated text typewriter, floating tech badges, staggered grid reveals, count-up statistics, interactive hover scaling).
- **Smooth Navigation**: Sticky navbar with glassmorphism backdrop blur, active section scrollspy indicator, and responsive mobile drawer.
- **Interactive Projects Showcase**: Categorized cards, modal dialog for in-depth project details, technology tags, and direct GitHub/demo links.
- **Experience & Education Timeline**: Alternating vertical timeline layout with glowing milestones and structured responsibilities.
- **Dynamic Skills Grid**: Filterable technical skills with animated progress bars and tech badges.
- **Full-Stack Contact Form**: Integrated with Express validation, MongoDB message persistence, Nodemailer email alerting, with real-time UI feedback.
- **Concurrent Development**: Single root command `npm run dev` boots both backend and frontend servers simultaneously using `concurrently`.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js 19 with Vite 8
- **UI Components**: Material UI (MUI v9) & Emotion
- **Animations**: Framer Motion
- **Icons**: Material Icons & Lucide React
- **HTTP Client**: Axios
- **Typography**: Inter & Poppins via Google Fonts

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB & Mongoose
- **Email Service**: Nodemailer
- **Validation**: Express Validator
- **CORS & Environment**: CORS, Dotenv

---

## 📁 Project Structure

```
portfolio-website/
│
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── animations/
│   │   │   └── variants.js          # Framer Motion animation configurations
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AnimatedBackground.jsx # Floating particles & glowing background orbs
│   │   │   ├── Footer.jsx             # Social links, back-to-top button, copyright
│   │   │   ├── Navbar.jsx             # Sticky glassmorphism nav with mobile drawer
│   │   │   └── SectionHeader.jsx      # Reusable styled section headers
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.js  # Scroll trigger hook
│   │   ├── sections/
│   │   │   ├── About.jsx              # Bio, statistics counter, core values
│   │   │   ├── Contact.jsx            # Validated contact form & direct reach info
│   │   │   ├── Education.jsx          # Degrees and industry certifications
│   │   │   ├── Experience.jsx         # Timeline layout of professional roles
│   │   │   ├── Hero.jsx               # Introduction, typewriter effect, CTA buttons
│   │   │   ├── Projects.jsx           # Featured project showcase & modal dialogs
│   │   │   └── Skills.jsx             # Filterable skills & proficiency bars
│   │   ├── services/
│   │   │   └── api.js                 # Axios API service layer
│   │   ├── theme/
│   │   │   └── theme.js               # Material UI dark theme configuration
│   │   ├── App.css
│   │   ├── App.jsx                    # Root app layout & animated loader
│   │   ├── index.css                  # Global utilities & scrollbar styles
│   │   └── main.jsx                   # Entry point with ThemeProvider & CssBaseline
│   ├── .env                           # Frontend environment variables
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── db.js                      # MongoDB Mongoose connection handler
│   ├── controllers/
│   │   ├── contactController.js       # Contact form submission controller
│   │   └── dataController.js          # Projects, skills, & experience data APIs
│   ├── middleware/
│   │   ├── errorHandler.js            # Global error & 404 handler
│   │   └── validation.js              # Express-validator schema for contact requests
│   ├── models/
│   │   ├── Contact.js                 # Mongoose model for messages
│   │   └── Project.js                 # Mongoose model for projects
│   ├── routes/
│   │   ├── contactRoutes.js           # POST /api/contact
│   │   └── dataRoutes.js              # GET /api/projects, /skills, /experience
│   ├── utils/
│   │   └── sendEmail.js               # Nodemailer transporter configuration
│   ├── .env                           # Backend environment variables
│   ├── package.json
│   └── server.js                      # Express server entry point
│
├── .gitignore
├── package.json                       # Root orchestration with concurrently
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB** *(Optional)*: Local MongoDB instance at `mongodb://127.0.0.1:27017` or MongoDB Atlas URI. *(Note: Backend runs gracefully with mock data fallback if MongoDB is offline).*

### 2. Install Dependencies

You can install all dependencies across the root, frontend, and backend with a single command from the project root:

```bash
npm run install:all
```

Or install individually:
```bash
# Root dependencies
npm install

# Backend dependencies
npm install --prefix backend

# Frontend dependencies
npm install --prefix frontend
```

---

## 🔐 Environment Variables

### Backend Configuration (`backend/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_email@gmail.com
NODE_ENV=development
```

> **Note on Nodemailer**: To enable contact email notifications, generate a Google **App Password** from your Google Account (Security → 2-Step Verification → App Passwords) and place it in `EMAIL_PASS`.

### Frontend Configuration (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Running the Project

Start both the React frontend and Express backend concurrently with a single command from the root directory:

```bash
npm run dev
```

- **Frontend Application**: [http://localhost:5173](http://localhost:5173)
- **Backend API Server**: [http://localhost:5000](http://localhost:5000)
- **Health Check Endpoint**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status check |
| `GET` | `/api/projects` | Fetch portfolio projects list |
| `GET` | `/api/skills` | Fetch categorized technical skills and proficiency |
| `GET` | `/api/experience` | Fetch professional work history |
| `POST` | `/api/contact` | Submit contact form (stores in MongoDB & triggers email) |

### Sample Contact Request Body:
```json
{
  "name": "Jane Recruiter",
  "email": "jane@techcorp.com",
  "subject": "Senior Frontend Opportunity",
  "message": "Hi Alex, we were impressed by your portfolio and would love to chat."
}
```

---

## 🧪 Production Build

To test and compile the production build of the frontend:

```bash
npm run build
```

This compiles optimized, minified static assets to `frontend/dist/`.
