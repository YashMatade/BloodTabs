import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home/Home'));
const ReceiverForm = lazy(() => import('./Pages/Home/Components/ReceiverForm/ReceiverForm.jsx'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step" element={<ReceiverForm/>} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
