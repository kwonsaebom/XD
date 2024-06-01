import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/onboard" element={<div>onBoarding</div>} />
        <Route path="/timer" element={<div>timer</div>} />
        <Route path="/mypage" element={<div>mypage</div>} />
      </Routes>
    </>
  );
}

export default App;
