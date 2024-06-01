import { Route, Routes } from 'react-router-dom';
import { Home, OnBoarding, Timer, Mypage, OnShortForm, OnTimer, OnCheck, OnLogin } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onshortform" element={<OnShortForm />} />
        <Route path="/ontimer" element={<OnTimer />} />
        <Route path="/oncheck" element={<OnCheck />} />
        <Route path="/onlogin" element={<OnLogin />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </>
  );
}

export default App;
