import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDataFetching } from "../../store";

const drawerWidth = 240;
const navItems = [
  { name: "إدارة الطلبات", link: "/admin/orders" },
  { name: "السجل التجاري", link: "/admin/register" },
  { name: "التسجيل الضريبي", link: "/admin/tax" },
  { name: "الخدمات", link: "/admin/services" },
  { name: "المدن", link: "/admin/city" },
  { name: "الشعار والتصميم", link: "/admin/logo" },
  { name: "التوظيف", link: "/admin/employment" },
  { name: "الشكاوى والتعديل", link: "/admin/support" },
];

function AdminHeader() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { data } = useDataFetching();

  const [show, setShow] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img
          src={data.logo?.url}
          alt="logo"
          style={{
            maxWidth: "50px",
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "right" }}
              onClick={() => navigate(item.link)}
            >
              {/* <ListItemText primary={item} sx={{ fontFamily: "pun-bold" }} /> */}
              <div style={{ fontFamily: "pun" }}>{item.name}</div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ bgcolor: "transparent", backdropFilter: "blur(20px)" }}
      >
        <Toolbar
          sx={{
            justifyContent: { sm: "space-around" },
            display: "flex",
            backgroundColor: show ? "rgba(255, 255, 255, 0.5)" : "#fff",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#1f1f1f" }} />
          </IconButton>
          <Box
            sx={{
              display: { sm: "none" },
              mr: 1,
            }}
          >
            <Box
              sx={{
                width: "70vw",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              <img
                src={data.logo?.url}
                alt="logo"
                style={{
                  maxWidth: "60px",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              maxWidth: "60px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img src={data.logo?.url} alt="logo" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: "#1f1f1f",
                  fontFamily: "pun-bold",
                  fontSize: "1rem",
                }}
                onClick={() => navigate(item.link)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={window.document.body}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

AdminHeader.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminHeader;
