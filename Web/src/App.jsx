import { Route, Routes } from 'react-router-dom';
import {Home, OnBoarding, Timer, Mypage, OnShortForm } from './pages';


function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/onshortform" element={<OnShortForm />} />
        <Route path="/" element={<OnBoarding/>} />
        <Route path="/timer" element={<Timer/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </>
  );
}

export default App;
