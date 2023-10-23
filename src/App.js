import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/login/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeftMenu from "./components/menu/LeftMenu";
import { ProSidebarProvider } from "react-pro-sidebar";

// Import necessary components and libraries

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

function DashboardLayout() {
  return (
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
  );
}

export default App;

