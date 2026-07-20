const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Initialize PDF Document
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 50, right: 50 },
  bufferPages: true
});

const outputFilePath = path.join(__dirname, 'book_a_doctor_documentation.pdf');
const writeStream = fs.createWriteStream(outputFilePath);
doc.pipe(writeStream);

// Theme Colors
const PRIMARY_COLOR = '#5F6FFF'; // Medical Blue
const DARK_NEUTRAL = '#1E293B';  // Slate Blue
const LIGHT_NEUTRAL = '#F8FAFC'; // Light Gray
const ACCENT_COLOR = '#0F172A';  // Near Black
const BORDER_COLOR = '#E2E8F0';  // Border Gray

// Helper: Horizontal Divider
const drawDivider = (y) => {
  doc.strokeColor(BORDER_COLOR)
     .lineWidth(1)
     .moveTo(50, y)
     .lineTo(545, y)
     .stroke();
};

// Helper: Section Title Styling
const addSectionHeader = (title) => {
  doc.moveDown(1.5);
  doc.fillColor(PRIMARY_COLOR)
     .font('Helvetica-Bold')
     .fontSize(16)
     .text(title);
  doc.moveDown(0.5);
};

// Helper: Subsection Title Styling
const addSubsectionHeader = (title) => {
  doc.moveDown(1);
  doc.fillColor(DARK_NEUTRAL)
     .font('Helvetica-Bold')
     .fontSize(12)
     .text(title);
  doc.moveDown(0.3);
};

// ================= PAGE 1: COVER PAGE =================
// Top decorative bar
doc.rect(0, 0, 595, 30).fill(PRIMARY_COLOR);

// Project Title
doc.moveDown(5);
doc.fillColor(ACCENT_COLOR)
   .font('Helvetica-Bold')
   .fontSize(32)
   .text('BOOK A DOCTOR', { align: 'center' });

doc.moveDown(0.2);
doc.fillColor(PRIMARY_COLOR)
   .font('Helvetica')
   .fontSize(14)
   .text('A Premium Full-Stack MERN Healthcare Application', { align: 'center', characterSpacing: 1 });

// Large Decorative Circle
doc.circle(297, 360, 90)
   .lineWidth(5)
   .strokeColor(PRIMARY_COLOR)
   .stroke();

// Icon Representation
doc.fillColor(PRIMARY_COLOR)
   .font('Helvetica-Bold')
   .fontSize(60)
   .text('H', 275, 330, { width: 50, align: 'center' });

// Document Specs
doc.y = 520;
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica-Bold')
   .fontSize(18)
   .text('System Architecture & Design Specifications', { align: 'center' });

doc.moveDown(0.5);
doc.strokeColor(BORDER_COLOR)
   .lineWidth(2)
   .moveTo(150, doc.y)
   .lineTo(445, doc.y)
   .stroke();

doc.moveDown(1.5);
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(10)
   .text('DEVELOPED BY: Antigravity AI Codebase Builder', { align: 'center' });
doc.text('DATE: July 2026', { align: 'center' });
doc.text('VERSION: 1.0.0 (Production-Ready)', { align: 'center' });

// Bottom decorative bar
doc.rect(0, 812, 595, 30).fill(DARK_NEUTRAL);


// ================= PAGE 2: TABLE OF CONTENTS & OVERVIEW =================
doc.addPage();

addSectionHeader('1. Executive Summary & Table of Contents');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(10)
   .text('This documentation serves as the blueprint for the "Book a Doctor" medical coordination platform, detailing the databases, routers, front-end views, and configurations. It compiles full specifications of schemas and API architectures designed to support concurrent scheduling loads.', { lineGap: 4 });

doc.moveDown(1.5);
addSubsectionHeader('Table of Contents');

const tocItems = [
  { s: '1. Executive Summary & TOC', p: '2' },
  { s: '2. MERN System Architecture', p: '3' },
  { s: '3. Database Design & Models (User, Doctor, Appointment, Admin)', p: '4' },
  { s: '4. Authentication & Security Flow (JWT, Bcrypt)', p: '6' },
  { s: '5. Frontend Layout & State (Vite React, Context, Axios)', p: '7' },
  { s: '6. Local Development Setup & Verification Checklist', p: '8' }
];

tocItems.forEach(item => {
  doc.fillColor(DARK_NEUTRAL)
     .font('Helvetica-Bold')
     .text(item.s, 60, doc.y, { width: 400 });
  
  // Dots spacer
  const dots = '.'.repeat(Math.max(2, 75 - item.s.length));
  doc.font('Helvetica')
     .text(dots, 360, doc.y - 12);

  doc.font('Helvetica-Bold')
     .text(item.p, 510, doc.y - 12);
  doc.moveDown(0.3);
});

doc.x = 50; // Reset X
doc.moveDown(1.5);
addSubsectionHeader('Project Goals & Key Features');
const goals = [
  'Role-based dashboard queues supporting Patient profiles, Doctor schedules, and Admins.',
  'Encrypted token authentication (JWT) restricting API access to validated clients.',
  'Dynamically computed slot allocations checking clinic schedules and time zone overlaps.',
  'Cloud-supported assets handling (Multer + Cloudinary) for medical files and avatar uploads.'
];
goals.forEach(goal => {
  doc.fillColor(DARK_NEUTRAL)
     .font('Helvetica')
     .fontSize(9.5)
     .text('• ' + goal, { indent: 15, lineGap: 3 });
});


// ================= PAGE 3: SYSTEM ARCHITECTURE =================
doc.addPage();

addSectionHeader('2. MERN System Architecture');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(10)
   .text('The Book a Doctor platform is architected around a Decoupled Client-Server Paradigm, offering strict separation between frontend viewstates and backend business logic. This layout allows independent scaling, deployment, and auditing.', { lineGap: 4 });

doc.moveDown(1.2);
addSubsectionHeader('Architecture Diagram Representation');

// Draw Box
doc.rect(70, doc.y, 450, 180)
   .fillColor(LIGHT_NEUTRAL)
   .fill()
   .strokeColor(PRIMARY_COLOR)
   .lineWidth(1.5)
   .stroke();

const textY = doc.y + 15;
doc.fillColor(ACCENT_COLOR).font('Helvetica-Bold').fontSize(11).text('CLIENT SIDE: React.js (Vite)', 90, textY, { align: 'center', width: 410 });
doc.font('Helvetica').fontSize(9).text('Tailwind CSS v3 (UI Views) | React Router DOM (Routing) | Context API (State)', 90, textY + 18, { align: 'center', width: 410 });

// Arrow down
doc.fillColor(PRIMARY_COLOR).font('Helvetica-Bold').fontSize(14).text('↓   API Layer (Axios Interceptors / JSON)   ↓', 90, textY + 45, { align: 'center', width: 410 });

doc.fillColor(ACCENT_COLOR).font('Helvetica-Bold').fontSize(11).text('SERVER SIDE: Node.js (Express.js)', 90, textY + 75, { align: 'center', width: 410 });
doc.font('Helvetica').fontSize(9).text('MVC Pattern | Auth Middlewares | Multer Storage | JSON Web Tokens', 90, textY + 93, { align: 'center', width: 410 });

// Arrow down
doc.fillColor(PRIMARY_COLOR).font('Helvetica-Bold').fontSize(14).text('↓   Mongoose Driver (ODM)   ↓', 90, textY + 120, { align: 'center', width: 410 });

doc.fillColor(ACCENT_COLOR).font('Helvetica-Bold').fontSize(11).text('DATABASE LAYER: MongoDB Atlas', 90, textY + 145, { align: 'center', width: 410 });

doc.x = 50; // Reset X
doc.y = textY + 195;

addSubsectionHeader('Key Architectural Components');
const archDetails = [
  { name: 'Model-View-Controller (MVC) Pattern', desc: 'The backend separates MongoDB Mongoose models, routing pathways, controller operations, and security middlewares. This ensures cleaner unit test audits and simplifies route expansion.' },
  { name: 'Unified Authentication Gateway', desc: 'A custom middleware checks for Bearer header tokens, decrypts client data across three collections (Admin, Doctor, Patient), and loads context parameters before calling next routes.' },
  { name: 'Vite React Framework', desc: 'Compiles bundles in seconds using esbuild. Built with optimized chunks routing, minimizing browser load latency.' }
];

archDetails.forEach(detail => {
  doc.fillColor(PRIMARY_COLOR).font('Helvetica-Bold').fontSize(10).text(detail.name);
  doc.fillColor(DARK_NEUTRAL).font('Helvetica').fontSize(9).text(detail.desc, { lineGap: 2 });
  doc.moveDown(0.5);
});


// ================= PAGE 4: DATABASE SCHEMAS PART 1 =================
doc.addPage();

addSectionHeader('3. Database Design & Models');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(10)
   .text('The application defines four separate database collections inside MongoDB using Mongoose schemas. This decoupling removes large populated joins, improves query speeds, and enables custom validation rules.', { lineGap: 4 });

doc.moveDown(1);
addSubsectionHeader('Schema 1: User (Patients)');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Stores credentials and contact data for patient accounts. Implements automatic bcrypt hashing on save.', { lineGap: 3 });

doc.moveDown(0.5);
// User Schema Box
doc.rect(50, doc.y, 495, 120).fillColor(LIGHT_NEUTRAL).fill().strokeColor(BORDER_COLOR).stroke();
let fieldsY = doc.y + 10;
doc.fillColor(DARK_NEUTRAL).font('Courier-Bold').fontSize(8.5);
doc.text('• name:            { Type: String, Required: true }', 65, fieldsY);
doc.text('• email:           { Type: String, Required: true, Unique: true }', 65, fieldsY + 15);
doc.text('• password:        { Type: String, Required: true, Select: false }', 65, fieldsY + 30);
doc.text('• phone:           { Type: String, Required: true }', 65, fieldsY + 45);
doc.text('• profileImage:    { Type: String, Default: "blank-profile-url" }', 65, fieldsY + 60);
doc.text('• role:            { Type: String, Enum: ["patient", "admin"], Default: "patient" }', 65, fieldsY + 75);
doc.text('• timestamps:      { createdAt, updatedAt }', 65, fieldsY + 90);

doc.x = 50;
doc.y = fieldsY + 120;

addSubsectionHeader('Schema 2: Admin');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Dedicated schema for administrators. Excluded from patient listing functions.', { lineGap: 3 });

doc.moveDown(0.5);
// Admin Schema Box
doc.rect(50, doc.y, 495, 90).fillColor(LIGHT_NEUTRAL).fill().strokeColor(BORDER_COLOR).stroke();
fieldsY = doc.y + 10;
doc.fillColor(DARK_NEUTRAL).font('Courier-Bold').fontSize(8.5);
doc.text('• name:            { Type: String, Required: true }', 65, fieldsY);
doc.text('• email:           { Type: String, Required: true, Unique: true }', 65, fieldsY + 15);
doc.text('• password:        { Type: String, Required: true }', 65, fieldsY + 30);
doc.text('• role:            { Type: String, Default: "admin" }', 65, fieldsY + 45);
doc.text('• timestamps:      { createdAt, updatedAt }', 65, fieldsY + 60);

doc.x = 50;
doc.y = fieldsY + 90;


// ================= PAGE 5: DATABASE SCHEMAS PART 2 =================
doc.addPage();

addSectionHeader('3. Database Design & Models (Cont.)');

addSubsectionHeader('Schema 3: Doctor');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Stores credentials, qualifications, availabilities, and ratings for clinical practitioners.', { lineGap: 3 });

doc.moveDown(0.5);
// Doctor Schema Box
doc.rect(50, doc.y, 495, 180).fillColor(LIGHT_NEUTRAL).fill().strokeColor(BORDER_COLOR).stroke();
fieldsY = doc.y + 10;
doc.fillColor(DARK_NEUTRAL).font('Courier-Bold').fontSize(8.5);
doc.text('• name:                { Type: String, Required: true }', 65, fieldsY);
doc.text('• email:               { Type: String, Required: true, Unique: true }', 65, fieldsY + 15);
doc.text('• password:            { Type: String, Required: true, Select: false }', 65, fieldsY + 30);
doc.text('• specialization:      { Type: String, Required: true }', 65, fieldsY + 45);
doc.text('• experience:          { Type: Number, Required: true }', 65, fieldsY + 60);
doc.text('• consultationFee:     { Type: Number, Required: true }', 65, fieldsY + 75);
doc.text('• hospital:            { Type: String, Required: true }', 65, fieldsY + 90);
doc.text('• availableSlots:      { Type: Object, Default: {} }', 65, fieldsY + 105);
doc.text('• profileImage:        { Type: String, Default: "blank-profile-url" }', 65, fieldsY + 120);
doc.text('• verificationStatus:  { Type: String, Enum: ["pending", "approved", "rejected"] }', 65, fieldsY + 135);
doc.text('• ratings:             { Type: Number, Default: 4.5 }', 65, fieldsY + 150);
doc.text('• about:               { Type: String, Required: true }', 65, fieldsY + 165);

doc.x = 50;
doc.y = fieldsY + 190;

addSubsectionHeader('Schema 4: Appointment');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Links patient documents with doctors. Tracks symptoms, reports and states.', { lineGap: 3 });

doc.moveDown(0.5);
// Appointment Schema Box
doc.rect(50, doc.y, 495, 140).fillColor(LIGHT_NEUTRAL).fill().strokeColor(BORDER_COLOR).stroke();
fieldsY = doc.y + 10;
doc.fillColor(DARK_NEUTRAL).font('Courier-Bold').fontSize(8.5);
doc.text('• patientId:           { Type: Schema.Types.ObjectId, Ref: "User", Required: true }', 65, fieldsY);
doc.text('• doctorId:            { Type: Schema.Types.ObjectId, Ref: "Doctor", Required: true }', 65, fieldsY + 15);
doc.text('• appointmentDate:     { Type: String, Required: true }', 65, fieldsY + 30);
doc.text('• appointmentTime:     { Type: String, Required: true }', 65, fieldsY + 45);
doc.text('• status:              { Type: String, Enum: ["pending", "confirmed", "cancelled", "completed"] }', 65, fieldsY + 60);
doc.text('• paymentStatus:       { Type: String, Enum: ["pending", "paid"], Default: "pending" }', 65, fieldsY + 75);
doc.text('• symptoms:            { Type: String, Required: true }', 65, fieldsY + 90);
doc.text('• reports:             { Type: [String], Default: [] }', 65, fieldsY + 105);
doc.text('• timestamps:          { createdAt, updatedAt }', 65, fieldsY + 120);

doc.x = 50;
doc.y = fieldsY + 150;


// ================= PAGE 6: AUTHENTICATION & SECURITY FLOW =================
doc.addPage();

addSectionHeader('4. Authentication & Security Flow');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(10)
   .text('Security is integrated into all architectural levels, matching industry standards for protecting patient medical history and database configurations.', { lineGap: 4 });

doc.moveDown(1);
addSubsectionHeader('1. Bcrypt Password Hashing');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Before writing documents for Admins, Users, or Doctors to MongoDB, Mongoose middleware hooks catch the password field, salt it (10 rounds), and replace it with a one-way hashed string. Authenticators use a custom Mongoose method schema: comparePassword() to safely verify passwords.', { lineGap: 4 });

doc.moveDown(1.2);
addSubsectionHeader('2. JSON Web Token (JWT) Generation');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('On validation of credentials, the backend compiles a token using jwt.sign() containing the account\'s ID. The token expires in 30 days. Client requests include this Bearer string inside the Authorization header.', { lineGap: 4 });

doc.moveDown(1.2);
addSubsectionHeader('3. Protected Routes & Middleware Gateway');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('The authMiddleware intercepts routes, checks for "Bearer <token>", verifies it using the JWT_SECRET, and retrieves the account across User, Doctor, or Admin collections. Once authenticated, details are appended to req.user, allowing role restriction validation (protect and restrictTo).', { lineGap: 4 });

// Quick code representation block
doc.moveDown(1.5);
doc.rect(50, doc.y, 495, 80).fillColor(LIGHT_NEUTRAL).fill().strokeColor(BORDER_COLOR).stroke();
const codeY = doc.y + 10;
doc.fillColor(DARK_NEUTRAL).font('Courier').fontSize(8);
doc.text('// Role protection middleware example', 65, codeY);
doc.text('router.put("/toggle-availability", protect, restrictTo("doctor"), toggleAvailability);', 65, codeY + 15);
doc.text('router.post("/add-doctor", protect, restrictTo("admin"), upload.single("image"), addDoctor);', 65, codeY + 30);
doc.text('router.post("/complete", protect, restrictTo("doctor"), completeAppointment);', 65, codeY + 45);

doc.x = 50;
doc.y = codeY + 90;


// ================= PAGE 7: FRONTEND LAYOUT & STATE =================
doc.addPage();

addSectionHeader('5. Frontend Layout & State Architecture');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(10)
   .text('The React client application is engineered to load views fast, manage global state triggers easily, and update UI layouts dynamically based on device screens.', { lineGap: 4 });

doc.moveDown(1);
addSubsectionHeader('1. Modern State Management via Context API');
const contexts = [
  { name: 'AuthContext', desc: 'Provides global user session data, register controls, login callbacks, profile loading, and profile picture modifications.' },
  { name: 'AppContext', desc: 'Coordinates the master doctor listings, appointment queues, online payment mock checkouts, cancellations, and light/dark theme selectors.' }
];
contexts.forEach(ctx => {
  doc.fillColor(PRIMARY_COLOR).font('Helvetica-Bold').fontSize(10).text('• ' + ctx.name + ': ', { indent: 15, continued: true });
  doc.fillColor(DARK_NEUTRAL).font('Helvetica').text(ctx.desc, { lineGap: 2 });
  doc.moveDown(0.3);
});

doc.moveDown(0.8);
addSubsectionHeader('2. Axios Client Interceptors');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Centralized inside src/api/axios.js, an Axios client interceptor catches outgoing requests and injects the stored JWT token. This eliminates the need to attach authorization headers manually.', { lineGap: 4 });

doc.moveDown(1.2);
addSubsectionHeader('3. Dynamic Theme System');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('A Tailwind theme switcher applies classes directly to the root element. Styles automatically switch between medical blue/slate-50 themes and slate-900/slate-950 dark layouts.', { lineGap: 4 });

doc.moveDown(1.2);
addSubsectionHeader('4. Responsive Page Layouts');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Built utilizing CSS grids, flexboxes, and mobile drawer components. Reusable widgets like DoctorCard, SidebarFilters, and AppointmentQueue adjust between phones and large screens.', { lineGap: 4 });


// ================= PAGE 8: SETUP & CHECKLIST =================
doc.addPage();

addSectionHeader('6. Local Development Setup & Checklist');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(10)
   .text('Follow these steps to deploy and run the application locally in development mode.', { lineGap: 4 });

doc.moveDown(1);
addSubsectionHeader('Step-by-Step Instructions');

const steps = [
  'Verify Node.js (v18+) and MongoDB are installed locally.',
  'Navigate to project files folders/backend directory, create a .env file and set: PORT, MONGODB_URI, JWT_SECRET, and optionally Cloudinary credentials.',
  'Run: npm install inside backend directory to download server packages.',
  'Start backend using: npm run dev to connect and seed doctor profiles.',
  'Navigate to project files folders/frontend directory, verify configurations.',
  'Run: npm install to configure React dependencies.',
  'Start React server: npm run dev to run client on http://localhost:3000.'
];

steps.forEach((step, idx) => {
  doc.fillColor(DARK_NEUTRAL)
     .font('Helvetica')
     .fontSize(9.5)
     .text(`${idx + 1}. ${step}`, { indent: 15, lineGap: 3 });
});

doc.moveDown(1.5);
addSubsectionHeader('Seeded Profiles for Manual Auditing');
doc.fillColor(DARK_NEUTRAL)
   .font('Helvetica')
   .fontSize(9.5)
   .text('The seeder sets up the following credentials:', { lineGap: 3 });

doc.moveDown(0.5);
doc.rect(50, doc.y, 495, 80).fillColor(LIGHT_NEUTRAL).fill().strokeColor(BORDER_COLOR).stroke();
const seedY = doc.y + 10;
doc.fillColor(DARK_NEUTRAL).font('Courier-Bold').fontSize(8.5);
doc.text('• Clinician: richard@bookadoctor.com  | password123 (General Physician)', 65, seedY);
doc.text('• Clinician: emily@bookadoctor.com    | password123 (Gynecologist)', 65, seedY + 15);
doc.text('• Administrator: admin@bookadoctor.com| adminpassword123', 65, seedY + 30);
doc.text('• Patient: Register custom credentials from the Login page.', 65, seedY + 45);

doc.x = 50;
doc.y = seedY + 70;

// Footer/Signoff
doc.moveDown(2);
doc.fillColor(PRIMARY_COLOR)
   .font('Helvetica-Bold')
   .fontSize(10)
   .text('This ends the system design documentation.', { align: 'center' });


// ================= PAGE NUMBERING AND FOOTERS =================
// Run a loop on all buffered pages to draw clean header/footer details
const range = doc.bufferedPageRange();
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(i);
  
  if (i === 0) continue; // Skip header/footer on cover page

  // Draw Header
  doc.fillColor(PRIMARY_COLOR)
     .font('Helvetica-Bold')
     .fontSize(8)
     .text('BOOK A DOCTOR | SYSTEM SPECIFICATIONS', 50, 25);
  doc.strokeColor(BORDER_COLOR)
     .lineWidth(0.5)
     .moveTo(50, 35)
     .lineTo(545, 35)
     .stroke();

  // Draw Footer
  doc.strokeColor(BORDER_COLOR)
     .lineWidth(0.5)
     .moveTo(50, 785)
     .lineTo(545, 785)
     .stroke();
  doc.fillColor(DARK_NEUTRAL)
     .font('Helvetica')
     .fontSize(8)
     .text('Confidential | Technical Blueprint', 50, 792);
  doc.text(`Page ${i + 1} of ${range.count}`, 500, 792, { align: 'right' });
}

// Finalize Document
doc.end();
console.log('PDF Generated successfully!');
