import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Lists from './pages/Lists';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lists" element={<Lists />} />
    </Routes>
  );
}

export default App;
