import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, OnBoarding, Timer, Mypage, OnShortForm, OnTimer, OnCheck, OnLogin } from './pages';
import { Example } from './components/example';
import { Navbar } from './components/Navbar';
import OnCategory from './pages/OnCategory';

function App() {
  const location = useLocation();
  const noNavRoutes = ['/onboard', '/ontimer', '/onshortform', '/oncheck', '/onlogin'];
  return (
    <>
      {!noNavRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/onshortform" element={<OnShortForm />} />
        <Route path="/ontimer" element={<OnTimer />} />
        <Route path="/oncheck" element={<OnCheck />} />
        <Route path="/onlogin" element={<OnLogin />} />
        <Route path="/onboard" element={<OnCategory />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </>
  );
}

export default App;
