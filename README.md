# Integrated Emergency & Disaster Response System — Public Web Portal

A bilingual public-facing web application developed as part of an **Integrated Emergency & Disaster Response System** designed to provide citizens with access to emergency information, disaster-related content, safety resources, and public services.

This repository contains the **Public Web Portal**, which I independently designed and developed as part of a larger collaborative university project.

---

## 🌐 About the Project

The Integrated Emergency & Disaster Response System is a multi-platform solution consisting of:

```text
Integrated Emergency & Disaster Response System
│
├── 🌐 Public Web Portal
│   └── Next.js / React / TypeScript
│
├── 🖥️ Backend & Administrative Dashboard
│   └── Laravel / Filament
│
└── 📱 Mobile Application
    └── Flutter
```

The applications communicate with a shared backend to provide an integrated emergency and disaster information platform.

This repository represents the **web portal that I independently developed**.

---

## ✨ Features

### 🌍 Bilingual & RTL Support

* Arabic and English interface
* Full RTL support for Arabic
* Internationalized application structure
* Localized content and user-facing messages

### 🚨 Emergency & Disaster Information

The portal provides users with access to emergency-related information and content through a structured public interface.

### 📰 News & Public Information

* Presentation of emergency and disaster-related news
* Organized public information
* User-friendly content browsing

### 📚 Awareness & Safety Content

Provides public-facing awareness and safety information intended to help users better understand emergency and disaster situations.

### 📱 Responsive Web Experience

The application is designed for different screen sizes and devices, including:

* Desktop
* Tablet
* Mobile

### 🔗 Backend API Integration

The portal integrates with the system's backend services to retrieve and present dynamic application data.

---

# 🛠️ Technology Stack

| Technology         | Usage                             |
| ------------------ | --------------------------------- |
| **Next.js 16**     | Web application framework         |
| **React 19**       | UI development                    |
| **TypeScript**     | Type-safe application development |
| **Tailwind CSS 4** | Styling and responsive design     |
| **next-intl**      | Internationalization              |
| **Headless UI**    | Accessible UI components          |
| **ESLint**         | Code quality and linting          |

---

# 🏗️ Architecture

The public portal follows a modern Next.js architecture built around reusable React components and TypeScript.

The application is responsible for the public-facing experience while the backend handles the core data and business logic.

```text
                    ┌──────────────────────────┐
                    │   Public Web Portal       │
                    │                          │
                    │ Next.js + React + TS     │
                    └────────────┬─────────────┘
                                 │
                                 │ API
                                 ▼
                    ┌──────────────────────────┐
                    │   Laravel Backend        │
                    │                          │
                    │ Business Logic / API     │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────┴─────────────┐
                    ▼                          ▼
             Admin Dashboard             Mobile App
               Filament                    Flutter
```

---

# 👨‍💻 My Contribution

I independently developed the **Public Web Portal** contained in this repository.

My work included:

* Designing and implementing the public-facing web application
* Building the application using **Next.js, React and TypeScript**
* Developing reusable UI components
* Implementing responsive layouts
* Implementing Arabic and English localization
* Supporting RTL layouts
* Integrating the frontend with backend APIs
* Structuring the application for maintainability
* Implementing the public user experience for emergency and disaster information

In addition to this repository, I also made substantial contributions to the shared **Laravel backend and Filament administrative dashboard**, including:

* Migrating the administrative panel from **Filament 3 to Filament 4**
* Refactoring Filament Resources into the Filament 4 architecture
* Developing dashboard statistics and analytical widgets
* Implementing and improving CRUD functionality
* Working on roles and permissions
* Developing the emergency report management workflow
* Implementing report authorization and ownership policies
* Adding request validation and API resources
* Implementing Arabic/English localization for reporting functionality
* Integrating AI-powered safety advice using Groq
* Improving database relationships, migrations and seeders

> The backend and administrative dashboard were developed collaboratively. The Flutter mobile application was developed independently by another member of the team.

---

# 📂 Related Projects

This web portal is part of the same integrated platform.

### 🖥️ Backend & Administrative Dashboard

[Integrated Emergency & Disaster System](https://github.com/wael-varlim/Integrated-Emergency-and-Disaster-System?utm_source=chatgpt.com)

Laravel backend and Filament administrative dashboard developed collaboratively by the team.

### 📱 Mobile Application

[ResQ App](https://github.com/mahersmadi1001/ResQ-App?utm_source=chatgpt.com)

Flutter mobile application developed by another member of the project team.

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js
* npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Moayed-mdn/integrated-Emergency-public-system-app.git
cd integrated-Emergency-public-system-app
```

Install dependencies:

```bash
npm install
```

## Environment Configuration

Create the local environment configuration:

```bash
cp .env.example .env.local
```

Configure the required environment variables for the backend/API according to your environment.

## Development

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Linting

Run ESLint:

```bash
npm run lint
```

---

# 🎓 Project Context

This project was developed as part of a **university team project** focused on building an integrated emergency and disaster response platform.

The system combines:

* Public web services
* Administrative management
* Emergency reporting
* Safety and awareness information
* Mobile access
* Backend APIs
* Data management and authorization

The repository demonstrates my **independent frontend development work**, while the related backend repository demonstrates my additional contributions to the collaborative system.

---

# 👤 Author

**Moayed Midani**

GitHub: [Moayed-mdn](https://github.com/Moayed-mdn?utm_source=chatgpt.com)

---

## License

This project was developed for academic and educational purposes.
