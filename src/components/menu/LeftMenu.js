import React from 'react';
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Dashboard, LoginOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LeftMenu = () => {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Sidebar style={{ height: "110vh", backgroundColor: "gray" }}>
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{ textAlign: "center" }}
        ></MenuItem>

        <MenuItem icon={<Dashboard/>}>Dashboard</MenuItem>

        <MenuItem icon={<LoginOutlined/>} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default LeftMenu;
