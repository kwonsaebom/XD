import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, OnBoarding, Timer, Mypage, OnShortForm, OnTimer, OnCheck, OnLogin } from './pages';
import { Example } from './components/example';
import { Navbar } from './components/Navbar';
import OnCategory from './pages/OnCategory';
import { useEffect, useState } from 'react';
function App() {
  const location = useLocation();
  const noNavRoutes = ['/onboard', '/ontimer', '/onshortform', '/oncheck', '/onlogin'];
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const handleMessage = (event) => {
      const receivedUserId = event.data;
      setUserId(receivedUserId);
      console.log('Received userId from WebView:', receivedUserId);
    };

    window.addEventListener('message', handleMessage);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

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
