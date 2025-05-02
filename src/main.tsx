import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import CreativeCoders from './pages/CreativeCoders.tsx';
import AIForGood from './pages/AIForGood.tsx';
import CodeCraftLab from './pages/CodeCraftLab.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creative-coders" element={<CreativeCoders />} />
        <Route path="/ai-for-good" element={<AIForGood />} />
        <Route path="/codecraft-lab" element={<CodeCraftLab />} />
      </Routes>
    </Router>
  </StrictMode>
);