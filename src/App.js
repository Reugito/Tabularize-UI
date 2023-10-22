import Dashboard from "./components/dashboard/Dashboard";

import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import FrontPages from "./components/login/FrontPages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<FrontPages />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
