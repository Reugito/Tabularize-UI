import * as React from "react"; 
  
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import Button from "@mui/material/Button"; 
import IconButton from "@mui/material/IconButton"; 
import MenuIcon from "@mui/icons-material/Menu"; 
import { Navigate } from "react-router-dom";
  
export default function Header() { 
  const token = localStorage.getItem('username');

  if (!token) {
    // If token is not present, redirect to the login page
    return <Navigate to="/" />;
  }
  return ( 
      <AppBar position="static" style={{backgroundColor:"grey"}}> 
        <Toolbar> 
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}> 
            Dashboard 
          </Typography> 
          <Button color="inherit">{token}</Button> 
        </Toolbar> 
      </AppBar> 
  ); 
}