import React, { useState } from 'react';
import api from '../../../services/Api';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      console.log("File data ", formData)
  
      try {
        const response = await api.uploadFile(formData);
        // Handle successful file upload
        console.log('File uploaded successfully:', response);
      } catch (error) {
        // Handle upload error
        console.error('File upload error:', error);
      }
    } else {
      // Handle case where no file is selected
      console.error('No file selected for upload');
    }
  }
  

  return (
    <div>
      <input type="file" accept=".csv, .json, .xls" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
