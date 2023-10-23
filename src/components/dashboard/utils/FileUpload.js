import React, { useState } from 'react';
import api from '../../../services/Api';
import './ReportTable.css';
import AlertDialog from '../../alerts/AlertDialog';
function FileUpload({ callback }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await api.uploadFile(formData);
        if (response.status == true){
          setAlertMessage('File uploaded successfully: ' + response.message);
          callback()
        }else{
          setAlertMessage('File upload error: ' + response.message);
        }
        
      } catch (error) {
        setAlertMessage('File upload error: ' + error.message);
      }
    } else {
      setAlertMessage( 'No file selected for upload');
    }    
    setAlertOpen(true);
  }

  const closeAlert = () => {
    setAlertOpen(false);
  }

  return (
    <div className="file-upload-container">
      <input type="file" accept=".csv, .json, .xls" onChange={handleFileChange} />
      <button onClick={handleFileUpload} style={{ backgroundColor: "gray", marginLeft: "10px" }}>Upload</button>

      <AlertDialog open={alertOpen} message={alertMessage} onClose={closeAlert} />
    </div>
  );
}

export default FileUpload;
