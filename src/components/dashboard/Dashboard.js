import React from 'react';
import FileUpload from './utils/FileUpload';
import ReportTable from './utils/ReportTable';
import { Navigate } from 'react-router-dom'; 

function Dashboard() {

  const token = localStorage.getItem('token');

  if (!token) {
    // If token is not present, redirect to the login page
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <FileUpload />
      <ReportTable />
    </div>
  );
}

export default Dashboard;
