import React from 'react';
import FileUpload from './utils/FileUpload';
import ReportTable from './utils/ReportTable';

function Dashboard() {
  return (
    <div>
      <FileUpload />
      <ReportTable />
    </div>
  );
}

export default Dashboard;
