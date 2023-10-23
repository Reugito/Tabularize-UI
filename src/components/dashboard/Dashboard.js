import React from 'react';
import FileUpload from './utils/FileUpload';
import ReportTable from './utils/ReportTable';
import { Navigate } from 'react-router-dom';
import LeftMenu from '../menu/LeftMenu';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './style.css'
import Header from '../menu/Header';

function Dashboard() {
  const token = localStorage.getItem('token');

  if (!token) {
    // If token is not present, redirect to the login page
    return <Navigate to="/" />;
  }

  return (
    <div className="dashboard-container">
      <ProSidebarProvider>
        <LeftMenu />
        
      </ProSidebarProvider>
      <div className="main-content">
      <Header/>
        <ReportTable />
      </div>
    </div>
  );
}

export default Dashboard;
