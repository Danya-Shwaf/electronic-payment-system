import './App.css'
import AppRouter from './Routes/AppRouter';
import { useTranslation } from "react-i18next";
import { useEffect  } from 'react';
import "./i18n"; 



function App() {
  
  const { i18n } = useTranslation();
  useEffect(() => {
    const savedLang =
      localStorage.getItem("appLanguage") || navigator.language || "en";
    i18n.changeLanguage(savedLang);
  }, [i18n]);

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
