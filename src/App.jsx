import './App.css'
import AppRouter from './Routes/AppRouter';
import {Outlet} from 'react-router-dom'



function App() {
  return (
    <div className="w-full md:w-2/3 mx-auto sm:shadow-lg box-border">
      <AppRouter />
    </div>
  );
}

export default App
