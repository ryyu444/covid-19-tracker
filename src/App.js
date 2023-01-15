import Home from './pages/home/home'
import Overview from './pages/overview/overview'
import CaseByCountry from './pages/search/search';
import About from './pages/about/about'
import NotFound from './pages/notFound/not_found'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/overview" element={<Overview/>} />
      <Route path="/search" element={<CaseByCountry />} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
