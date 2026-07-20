# Book a Doctor - Full-Stack MERN Platform

A modern, full-stack healthcare coordination and appointment booking system built with the MERN stack.

---

## Directory Organization

The workspace is organized into three major folders to optimize auditing, documentation, and source code control:

1. **`[Document folder](file:///c:/Users/renuk/OneDrive/Desktop/project/bookadoctor/Document%20folder)`**
   - **`[book_a_doctor_documentation.pdf](file:///c:/Users/renuk/OneDrive/Desktop/project/bookadoctor/Document%20folder/book_a_doctor_documentation.pdf)`**: A detailed A4 PDF system manual outlining:
     - Project Goals and Executive Summary
     - Multi-tier MERN Decoupled Architecture
     - Full Database Models (User, Doctor, Appointment, Admin)
     - Security Flows (JWT auth verification and Bcrypt encryption)
     - Frontend Context APIs, Interceptors, and CSS Layouts
     - Step-by-Step execution checklists and seed login data.
   - `generate_pdf.js`: The Node.js generation script compiling the PDF.

2. **`[project files folders](file:///c:/Users/renuk/OneDrive/Desktop/project/bookadoctor/project%20files%20folders)`**
   - **`[backend](file:///c:/Users/renuk/OneDrive/Desktop/project/bookadoctor/project%20files%20folders/backend)`**: Node.js + Express API server with Mongoose schemas, controllers, and seeders.
   - **`[frontend](file:///c:/Users/renuk/OneDrive/Desktop/project/bookadoctor/project%20files%20folders/frontend)`**: Vite + React SPA styled with Tailwind CSS, supporting dark/light mode switches.

3. **`[video demo folder](file:///c:/Users/renuk/OneDrive/Desktop/project/bookadoctor/video%20demo%20folder)`**
   - A dedicated directory for demo recordings, screencasts, or system walkthroughs.

---

## Getting Started (Quick Run)

### Prerequisites
- Node.js (v18+) installed
- MongoDB running locally on the standard port `27017` (or an Atlas connection string)

### Steps

1. **Configure and Run the Backend API:**
   ```bash
   cd "project files folders/backend"
   # Create a .env file based on .env.example
   # Run dependencies installation
   npm install
   # Start server in development mode
   npm run dev
   ```
   *The Express server binds to port `5000` and automatically populates doctor profiles into your database.*

2. **Configure and Run the Frontend Client:**
   ```bash
   cd "project files folders/frontend"
   # Install frontend dependencies
   npm install
   # Run Vite React server
   npm run dev
   ```
   *The dev client mounts on `http://localhost:3000`.*

### Test Accounts (Seeded)
- **Doctor Account**: `richard@bookadoctor.com` / Password: `password123`
- **Admin Account**: `admin@bookadoctor.com` / Password: `adminpassword123`
- **Patient Account**: You can register a new patient directly from the login page!


