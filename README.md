# 🎨 Artistly — Artist Management & Discovery Platform

**Artistly** is a modern, responsive web application built with **Next.js, React, TypeScript, and Tailwind CSS**.

The platform provides an intuitive interface for discovering artists, filtering artist listings, onboarding new artists, and managing artist-related information through a dashboard.

This project was developed to demonstrate practical **frontend development, component-based architecture, responsive UI design, form handling, and modern React/Next.js development**.

---

## 🚀 Features

### 🎭 Artist Discovery

* Browse available artists
* View artist information through reusable artist cards
* Organized artist listing interface
* Responsive artist browsing experience

### 🔎 Artist Filtering

* Filter artists based on available criteria
* Dedicated reusable filtering component
* Dynamic client-side interaction

### 📝 Artist Onboarding

* Dedicated artist onboarding page
* Structured onboarding interface
* Form-based data collection
* Validation-ready architecture

### 📊 Dashboard

* Dedicated dashboard interface
* Centralized view for artist-related information
* Client-side dashboard interaction

### 🎨 Modern UI

* Responsive design
* Reusable React components
* Tailwind CSS styling
* Mobile-friendly layouts
* Clean component-based architecture

---

## 🛠️ Tech Stack

| Technology             | Usage                         |
| ---------------------- | ----------------------------- |
| **Next.js 15**         | React framework               |
| **React 19**           | UI development                |
| **TypeScript**         | Type-safe development         |
| **Tailwind CSS**       | Styling and responsive design |
| **React Hook Form**    | Form handling                 |
| **Yup**                | Form validation               |
| **Next.js App Router** | Application routing           |
| **Git & GitHub**       | Version control               |

---

## 📂 Project Structure

```text
Artist_app/
│
├── app/
│   │
│   ├── artists/
│   │   ├── ArtistListingClient.tsx
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   ├── DashboardClient.tsx
│   │   └── page.tsx
│   │
│   ├── onboard/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ArtistCard.tsx
│   ├── FilterBlock.tsx
│   └── Header.tsx
│
├── lib/
│   └── data.ts
│
├── public/
│   └── images/
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Application Architecture

The application follows a modular component-based structure.

### App Routes

```text
/                  → Home page

/artists           → Artist listing

/dashboard         → Artist dashboard

/onboard           → Artist onboarding
```

### Reusable Components

```text
ArtistCard
    ↓
Displays individual artist information

FilterBlock
    ↓
Handles artist filtering interface

Header
    ↓
Provides common navigation/UI
```

This structure makes the application easier to maintain and allows components to be reused across different pages.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rajeevkumar-flash/Artist_app.git
```

### 2. Navigate to the project

```bash
cd Artist_app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---


---------------------------------

## 💡 Key Development Concepts

This project helped strengthen my practical knowledge of:

* React functional components
* Next.js App Router
* TypeScript
* Component reusability
* Props and state management
* Client-side interactions
* Responsive web design
* Tailwind CSS
* Form handling
* Form validation
* Page-level architecture
* Git and GitHub workflow

------------------------------

## 🎯 Future Improvements

The project can be extended with:

* [ ] Backend API integration
* [ ] MongoDB database
* [ ] User authentication
* [ ] Artist authentication
* [ ] Persistent artist profiles
* [ ] Advanced artist search
* [ ] Advanced filtering and sorting
* [ ] Artist profile details page
* [ ] Booking management system
* [ ] Artist dashboard with analytics
* [ ] Payment integration
* [ ] Cloud deployment
* [ ] Automated testing

-----------------------------

## 👨‍💻 Developer

### Rajeev Kumar

**B.Tech — Information Technology**

Frontend & Full-Stack Web Developer interested in building modern, responsive and scalable web applications.

### Tech Interests

* React
* Next.js
* TypeScript
* JavaScript
* Node.js
* Express.js
* MongoDB
* Full-Stack Development

### GitHub

https://github.com/rajeevkumar-flash

---

## ⭐ Why This Project?

Artistly was developed as a practical frontend project to demonstrate how modern web applications can be structured using **React and Next.js**.

The project focuses on:

**Reusable Components → Responsive UI → Type Safety → User Interaction → Scalable Architecture**

---

## 📄 License

This project is created for educational and portfolio purposes.
