import './App.css'
import AppRouter from './Routes/AppRouter';
import { useTranslation } from "react-i18next";
import "./i18n"; 



function App() {
  const { i18n } = useTranslation();
  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="w-full md:w-2/3 mx-auto box-border"
    >
      <AppRouter />
    </div>
  );
}

export default App
