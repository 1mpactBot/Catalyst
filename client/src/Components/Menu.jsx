import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import FolderIcon from "@mui/icons-material/Folder";

function Menu() {
  return (
    <>
      <Box
        component="section"
        sx={{ p: "8px", border: "1px solid #d6dee5", borderRadius: 1.4 }}
      >
        <nav aria-label="menu items">
          <List sx={{ p: 0 }}>
            <ListItem disablePadding sx={{ mb: "8px" }}>
              <ListItemButton
                disableRipple
                sx={{ ":hover": { borderRadius: "5px" } }}
              >
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding sx={{ my: "8px" }}>
              <ListItemButton
                disableRipple
                sx={{ ":hover": { borderRadius: "5px" } }}
              >
                <ListItemIcon>
                  <ChecklistRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="My Tasks" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding sx={{ mt: "8px" }}>
              <ListItemButton
                disableRipple
                sx={{ ":hover": { borderRadius: "5px" } }}
              >
                <ListItemIcon>
                  <AdminPanelSettingsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Admin Panel" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box
        component="section"
        sx={{ mt: 4, border: "1px solid #d6dee5", borderRadius: 1.4 }}
      >
        <List sx={{ p: 0 }}>
          <ListItem
            disablePadding
            sx={{
              borderRadius: "5px",
              borderBottom: "1px solid #0000001f",
            }}
          >
            <ListItemButton
              disableRipple
              sx={{
                cursor: "default",
                ":hover": { borderRadius: "5px", cursor: "default" },
              }}
            >
              <ListItemText primary="Projects" />
              <ListItemIcon>
                <AddCircleRoundedIcon
                  sx={{ ":hover": { cursor: "pointer" } }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <section style={{ padding: "8px" }}>
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                sx={{ ":hover": { borderRadius: "5px" } }}
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Project XXX" />
              </ListItemButton>
            </ListItem>
            {/* <Divider />
            <ListItem disablePadding sx={{ mt: "8px" }}>
              <ListItemButton
                disableRipple
                sx={{ ":hover": { borderRadius: "5px" } }}
              >
                <ListItemIcon>
                  <AdminPanelSettingsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Admin Panel" />
              </ListItemButton>
            </ListItem> */}
          </section>
        </List>
      </Box>
    </>
  );
}

export default Menu;
