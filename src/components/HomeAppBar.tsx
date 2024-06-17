import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Typography from "@mui/material/Typography";

export default function HomeAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        top: 0,
        width: "100vw",
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          sx={{ justifyContent: "flex-end", alignItems: "center", gap: "12px" }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuRoundedIcon sx={{ color: "#E4BE6A" }} />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "12px",
            }}
          >
            <Typography className="button-menu" sx={{ color: "#E4BE6A" }}>
              About Us
            </Typography>
            <Typography className="button-menu" sx={{ color: "#E4BE6A" }}>
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
