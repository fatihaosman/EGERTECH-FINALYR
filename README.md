
# EgerConnect 🎓

EgerConnect is a student-centered digital platform designed to centralize campus information and student engagement at Egerton University.  
It brings together **notices, events, clubs, and student opportunities** into one organized and accessible system.

---

## 📌 Problem Statement

University students often rely on scattered platforms such as notice boards, WhatsApp groups, and word of mouth to stay informed.  
This leads to missed events, delayed notices, and poor student engagement.

**EgerConnect solves this by providing a single, structured platform where students can easily access campus-related information.**

---

## ✨ Features

### 🔔 Notices
- Displays official university and faculty notices
- Sorted by most recent dates
- Image-based notice previews
- Dedicated notices page + homepage highlights

### 📅 Events
- Upcoming campus events
- Sorted automatically by date
- Events displayed visually on the homepage
- Full event details available on the events page
- Google Calendar integration (planned/available)

### 🏫 Clubs & Associations
- Showcases available student clubs
- Categories include:
  - Sports Clubs
  - Religious Associations
  - Course-Based Associations
  - Other Student Groups
- Horizontal scrolling club cards on homepage
- Dedicated clubs page for detailed exploration

### Student Support

- Centralized access to student assistance resources
- Includes information on:
  - Bursaries
  - Scholarships
  - Financial aid opportunities
- Features a student support form where users can:
   - Request help with school fees
  - Seek academic or welfare support
   - Submit concerns directly through the platform

### 🔍 Lost & Found
- Allows students to post lost or found items
- Users can:
  - Report items they have lost
  - Post items they have found
- Helps students reconnect with lost belongings efficiently

### 🏫 About Egerton University
- Provides a brief history of Egerton University
- Highlights the university’s background and development
- Includes an embedded video showing:
  - Egerton University campus
  - University branches
  - General student environment and activities

### 🔐 Authentication (Backend)
- User authentication handled using Django
- Secure signup and login system
- Role-based access planned (students, admins)

---

## 🛠️ Tech Stack

### Frontend
- **Next.js (App Router)** – for modern React-based UI
- **React** – component-based architecture
- **Tailwind CSS** – responsive and clean UI styling
- **TypeScript** – type safety and better developer experience

### Backend
- **Django** – backend framework
- **Django REST Framework** – API development
- **Authentication system** – user management and security

---

## 🧱 Project Structure (Simplified)

```bash
egerconnect/
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
│   └── home/           # Homepage sections (Hero, Notices, Events, Clubs)
├── lib/                # Shared data & utilities (events, notices, clubs)
├── public/             # Images & static assets
├── styles/      # Global styles

└── backend/   # Django backend
   └── Egerconnect/         




## 👥 Use Cases

- A new student can explore Egerton University and learn about available services
- A student can check recent notices and upcoming events in one place
- A student seeking financial assistance can submit a support request
- A student can report or search for a lost or found item
- A student can discover clubs and associations to join

getting started
# Install dependencies
npm install

# Run development server
npm run dev

frontend runs on
http://localhost:3000


# Navigate to backend
cd backend
cd egerconnect

# Install dependencies
pip install -r requirements.txt

# Run server
python manage.py runserver


backend runs on
http://127.0.0.1:8000"

