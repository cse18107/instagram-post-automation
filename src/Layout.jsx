import React, { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Tooltip,
  Stack,
} from '@mui/material';

// ↘️  Material‑UI Icons
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InstagramPostMock from './InstagramPostMock';
import AutomateWorkSteps from './AutomateWorkSteps';

const menuItems = [
  { label: 'Home', icon: <HomeIcon fontSize="small" /> },
  { label: 'Analytics', icon: <BarChartIcon fontSize="small" /> },
  { label: 'Profile', icon: <PersonIcon fontSize="small" /> },
  { label: 'Settings', icon: <SettingsIcon fontSize="small" /> },
];

const Layout = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [tab, setTab] = useState(1);

  return (
    <Box sx={{display: "flex", height: "100vh", bgcolor: "#eeeeee"}}>
      {/* ---------- Sidebar ---------- */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 50,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 50,
            boxSizing: "border-box",
            backgroundColor: "#eeeeee",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <List disablePadding>
          {menuItems.map(({label, icon}) => (
            <ListItem
              key={label}
              disablePadding
              sx={{justifyContent: "center"}}
            >
              <Tooltip title={label} placement="right">
                <ListItemButton
                  onClick={() =>
                    setActiveItem(activeItem === label ? null : label)
                  }
                  sx={{
                    flexDirection: "column",
                    py: 2,
                    color:
                      activeItem === label ? "primary.main" : "text.secondary",
                  }}
                >
                  {icon}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ---------- Expanding panel ---------- */}
      {activeItem && (
        <Box
          sx={{
            width: 380,
            backgroundColor: "white",
            p: 2,
            transition: "width 0.3s ease-in-out",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <AutomateWorkSteps />
        </Box>
      )}

      {/* ---------- Main content ---------- */}
      <Box sx={{flexGrow: 1, p: 2, position: "relative"}}>
        {/* Top‑right “Go Live” button */}
        <Box sx={{position: "absolute", top: 16, right: 16}}>
          <Button variant="contained" color="error">
            Go Live
          </Button>
        </Box>

        <InstagramPostMock tab={tab} setTab={setTab} />

        {/* Post / Comments / DM buttons */}
        {/* <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="outlined" onClick={() => setTab(1)}>
            Post
          </Button>
          <Button variant="outlined" onClick={() => setTab(2)}>
            Comments
          </Button>
          <Button variant="outlined" onClick={() => setTab(3)}>
            DM
          </Button>
        </Stack> */}
        <Stack direction="row" justifyContent="center" mt={2}>
          {/* Pill Background */}
          <Box
            sx={{
              display: "flex",
              bgcolor: "#e0e0e0",
              borderRadius: "999px",
              padding: "4px",
            }}
          >
            {/* Post */}
            <Button
              onClick={() => setTab(1)}
              disableRipple
              sx={{
                textTransform: "none",
                borderRadius: "999px",
                px: 2,
                py: 0.5,
                minWidth: "unset",
                color: tab === 1 ? "#000" : "#666",
                bgcolor: tab === 1 ? "#fff" : "transparent",
                fontWeight: tab === 1 ? 600 : 500,
                fontSize: 14,
                boxShadow: tab === 1 ? 1 : "none",
              }}
            >
              Post
            </Button>

            {/* Comments */}
            <Button
              onClick={() => setTab(2)}
              disableRipple
              sx={{
                textTransform: "none",
                borderRadius: "999px",
                px: 2,
                py: 0.5,
                minWidth: "unset",
                color: tab === 2 ? "#000" : "#666",
                bgcolor: tab === 2 ? "#fff" : "transparent",
                fontWeight: tab === 2 ? 600 : 500,
                fontSize: 14,
                boxShadow: tab === 2 ? 1 : "none",
              }}
            >
              Comments
            </Button>

            {/* DM */}
            <Button
              onClick={() => setTab(3)}
              disableRipple
              sx={{
                textTransform: "none",
                borderRadius: "999px",
                px: 2,
                py: 0.5,
                minWidth: "unset",
                color: tab === 3 ? "#000" : "#666",
                bgcolor: tab === 3 ? "#fff" : "transparent",
                fontWeight: tab === 3 ? 600 : 500,
                fontSize: 14,
                boxShadow: tab === 3 ? 1 : "none",
              }}
            >
              DM
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Layout;
