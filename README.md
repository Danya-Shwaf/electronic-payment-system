# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






SYSTEM/
├── public/                     # الملفات العامة والأصول الثابتة
├── src/                        # الكود المصدري الرئيسي
│   ├── components/            # المكونات القابلة لإعادة الاستخدام
│   ├── pages/                 # صفحات التطبيق
│   ├── layouts/               # تخطيطات الصفحات الأساسية
│   ├── hooks/                 # React Hooks مخصصة
│   ├── routes/                # إعدادات وتعريفات التوجيه
│   ├── services/              # خدمات API والاتصال بالخادم
│   ├── store/                 # إدارة الحالة العامة للتطبيق
│   ├── utils/                 # وظائف ومساعدات مشتركة
│   ├── locales/               # ملفات الترجمة للغات مختلفة
│   ├── App.jsx               # المكون الرئيسي للتطبيق
│   ├── App.css               # الأنماط الرئيسية
│   ├── main.jsx              # نقطة دخول التطبيق
│   └── index.css             # الأنماط العامة
├── node_modules/              # مكتبات Node.js
├── .vscode/                   # إعدادات Visual Studio Code
├── package.json              # معلومات المشروع والتبعيات
├── package-lock.json         # قفل إصدارات التبعيات
├── vite.config.js            # إعدادات Vite
├── tailwind.config.js        # إعدادات Tailwind CSS
├── postcss.config.js         # إعدادات PostCSS
├── eslint.config.js          # قواعد ESLint
├── index.html                # ملف HTML الرئيسي
└── README.md                 # توثيق المشروع
