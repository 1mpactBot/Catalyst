import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Logo from "../assets/Logo.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: " #e7f3ff" }} position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: "3rem" }}
            alt="Logo"
            src={Logo}
          />
          <Box
            component="img"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, width: "3rem" }}
            alt="Logo"
            src={Logo}
          />
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="outlined"
              endIcon={<ExpandMoreRoundedIcon />}
              onClick={handleOpenUserMenu}
              sx={{
                py: 0,
                px: 1,
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "50px",
                color: "#000000",
                ":hover": {
                  backgroundColor: "#ffffff",
                  border: "none",
                },
              }}
              disableRipple
            >
              <strong>Saransh</strong>
            </Button>
            <Menu
              sx={{ mt: "30px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
