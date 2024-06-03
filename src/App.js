import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeRoutes } from './Routes/HomeRoutes';
import HeaderLayout from './Component/HeaderLayout';

function App() {
  return (
    <>
      <HeaderLayout />
      <Routes>
          <Route path="*" element={<HomeRoutes />} />
      </Routes>
    </>
  ); 
}

export default App;
