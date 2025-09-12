## Electronic Payment System

An advanced **electronic payment system** that allows users to manage their wallets, transfer money securely, and view transaction history with a smooth and user-friendly experience.  
The system supports **multi-language (Arabic & English)** and is built with React (Frontend) and Django (Backend).

## Features

- User authentication with **JWT (JSON Web Token)**
- Wallet and account management
- Fast & secure money transfers
- Transaction history tracking
- Multi-language support (Arabic / English)
- Modern UI built with **TailwindCSS**

## Tech :

- Frontend: React + Vite, TailwindCSS
- Backend: Django + Django REST Framework
- Authentication: JWT (JSON Web Token)

## Project Structure:

SYSTEM/
├── public/ # Public assets and static files
├── src/ # Main source code
│ ├── components/ # Reusable components
│ ├── pages/ # Application pages
│ ├── layouts/ # Base page layouts
│ ├── hooks/ # Custom React Hooks
│ ├── routes/ # Routing configuration
│ ├── services/ # API services & server communication
│ ├── store/ # Global state management
│ ├── utils/ # Utility functions & helpers
│ ├── locales/ # Translation & localization files
│ ├── App.jsx # Root application component
│ ├── App.css # Main app styles
│ ├── main.jsx # Application entry point
│ └── index.css # Global styles
├── node_modules/ # Node.js dependencies
├── .vscode/ # Visual Studio Code settings
├── package.json # Project metadata & dependencies
├── package-lock.json # Locked versions of dependencies
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── eslint.config.js # ESLint configuration
├── index.html # Main HTML file
└── README.md # Project documentation

## Installation & Run

```bash
# Clone the repository
git clone https://github.com/Danya-Shwaf/electronic-payment-system.git

# Navigate to project folder
cd electronic-payment-system

# Install dependencies
npm install

# Run the app
npm run dev



##  Development Notes

This project was bootstrapped with [Vite](https://vitejs.dev/).
For React fast refresh, you can use one of the following official plugins:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) (Babel)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (SWC)

```
