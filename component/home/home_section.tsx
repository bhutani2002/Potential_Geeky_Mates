import SearchIcon from "@mui/icons-material/Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Drawer from "@mui/material/Drawer";
import Logo from "../../public/Images/Logo.png";
import styles from "../../styles/Home.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import backImage1 from "../../public/Images/1.png";
import backImage2 from "../../public/Images/home_back_img2.png";
import React from "react";
import profileIcon from "../../public/Images/Male User red.svg";
import { SlideData } from "./slide_data";
import {
  Container,
  Divider,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const drawerWidth = 240;
const pages = ["home", "about Us", "plans", "Services", "Contact Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Home_section = () => {
  var slideSettings = {
    centerPadding: "40px",
    infinite: true,
    centerMode: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          component={"img"}
          src={Logo.src}
          alt="Logo1"
          sx={{ height: "100%", width: { xs: "155px", md: "255px" } }}
        />
      </Typography>
      <Divider />
      <List>
        <Link href={"/"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/about"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/products"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="Plans" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href={"/contact"} className="navLink">
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  bgcolor: "#B12930",
                  color: "#fff",
                },
                textAlign: "center",
                color: "#000",
                fontFamily: "Inria Serif",
                textTransform: "capitalize",
              }}
            >
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Navbar */}
      <AppBar
        component="nav"
        className={styles.Header_AppBar}
        sx={{ pt: "5vh", position: "static" }}
      >
        <Toolbar>
          <Grid container display={"flex"} alignItems={"center"} pb="10px">
            <Grid item xs={1} sm={0} display={{ xs: "block", sm: "none" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon sx={{ color: "#000" }} />
              </IconButton>
            </Grid>
            <Grid item xs={7} sm={3}>
              <Typography
                // variant="h6"
                component="div"
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  src={Logo.src}
                  alt="Logo1"
                  sx={{ height: "100%", width: { xs: "155px", md: "255px" } }}
                ></Box>
              </Typography>
            </Grid>
            <Grid item xs={0} sm={6.5} textAlign={"center"}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Link href={"/"}>
                  <Button
                    sx={{
                      "&:hover": {
                        color: "#B12930",
                        borderColor: "#B12930",
                        backgroundColor: "rgb(255,255,255,0)",
                      },
                      fontWeight: 550,
                      color: "#000",
                      px: { sm: 1, md: 2, lg: 4 },
                      border: "1px solid rgb(255,255,255,0)",
                      // borderRadius: "25px",
                      fontSize: { sm: "", md: "18px", lg: "20px" },
                      fontFamily: "Inria Serif",
                      textTransform: "capitalize",
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link href={"/about"}>
                  <Button
                    sx={{
                      "&:hover": {
                        color: "#B12930",
                        borderColor: "#B12930",
                        backgroundColor: "rgb(255,255,255,0)",
                      },
                      fontWeight: 550,
                      color: "#000",
                      px: { sm: 1, md: 2, lg: 4 },
                      border: "1px solid rgb(255,255,255,0)",
                      // borderRadius: "25px",
                      fontSize: { sm: "", md: "18px", lg: "20px" },
                      fontFamily: "Inria Serif",
                      textTransform: "capitalize",
                    }}
                  >
                    About Us
                  </Button>
                </Link>
                <Link href={"/products"}>
                  <Button
                    sx={{
                      "&:hover": {
                        color: "#B12930",
                        borderColor: "#B12930",
                        backgroundColor: "rgb(255,255,255,0)",
                      },
                      fontWeight: 550,
                      color: "#000",
                      px: { sm: 1, md: 2, lg: 4 },
                      border: "1px solid rgb(255,255,255,0)",
                      // borderRadius: "25px",
                      fontSize: { sm: "", md: "18px", lg: "20px" },
                      fontFamily: "Inria Serif",
                      textTransform: "capitalize",
                    }}
                  >
                    Plans
                  </Button>
                </Link>

                <Link href={"/contact"}>
                  <Button
                    sx={{
                      "&:hover": {
                        color: "#B12930",
                        borderColor: "#B12930",
                        backgroundColor: "rgb(255,255,255,0)",
                      },
                      fontWeight: 550,
                      color: "#000",
                      px: { sm: 1, md: 2, lg: 4 },
                      border: "1px solid rgb(255,255,255,0)",
                      // borderRadius: "25px",
                      fontSize: { sm: "", md: "18px", lg: "20px" },
                      fontFamily: "Inria Serif",
                      textTransform: "capitalize",
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              md={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "6px",
                  overflow: "hidden",
                  width: { xs: 50, md: "auto" },
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, display: { xs: "none", md: "block" } }}
                  placeholder="Search Plans"
                />
                <Button
                  variant="contained"
                  sx={{
                    "&:hover": {
                      bgcolor: "hsl(357, 62%, 55%)",
                    },
                    bgcolor: "#B12930",
                    minWidth: 5,
                  }}
                >
                  {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>Search</Box>{" "} */}
                  <SearchIcon fontSize="small" sx={{ m: 0, p: 0 }} />
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={0.5} textAlign={"center"}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={profileIcon.src}
                      sx={{
                        width: { xs: 34, md: 44 },
                        height: { xs: 34, md: 44 },
                      }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
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
                    <MenuItem
                      key={setting}
                      onClick={handleCloseUserMenu}
                      sx={{
                        "&:hover": {
                          bgcolor: "#B12930",
                          color: "#fff",
                        },
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
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

      {/* Background Images */}
      <Box
        component={"img"}
        src={backImage1.src}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "-1",
          opacity: 0.3,
          filter: "drop-shadow(12px 12px 4px #000)",
          height: { xs: "50%", sm: "55%", md: "90%", lg: "100%" },
          width: { xs: "90%", sm: "80%", md: "50%", lg: "40%" },
        }}
      />
      <Box
        component={"img"}
        src={backImage2.src}
        sx={{
          position: "absolute",
          display: { xs: "none", md: "block" },
          bottom: { xs: 0 },
          top: { md: 0 },
          right: 0,
          zIndex: "-1",
          opacity: 0.3,
          filter: "drop-shadow(-12px -12px 4px #000)",
          height: { xs: "50%", sm: "55%", md: "90%", lg: "100%" },
          width: { xs: "95%", md: "40%" },
        }}
      />

      {/* Home Section */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: { xs: 1, sm: 5, md: 6, lg: 10 },
        }}
      >
        <Grid item xs={12} sm={10} md={4}>
          <Box
            sx={{
              pt: { xs: 2, md: 5 },
              pl: { xs: 3, md: 5 },
              pb: { xs: 5, sm: 10, md: 15 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.5rem",
                  md: "2.9rem",
                  lg: "4.5rem",
                },
                pr: { xs: 7, sm: 12, md: 0 },
                fontFamily: "Jacques Francois",
              }}
              gutterBottom
            >
              Dolor sit amet, consectetur adipiscing elit. Curabitur
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", lg: "1.5rem" },
                pr: { xs: 7, sm: 12, md: 0 },
                mt: { xs: 6 },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              consequat.
            </Typography>
            <Typography mt={{ xs: 5, sm: 10, md: 5, lg: 10 }}>
              <Button
                variant="contained"
                sx={{
                  "&:hover": { backgroundColor: "#000" },
                  backgroundColor: "#222",
                  px: { xs: 3, sm: 5, md: 5, lg: 7 },
                  py: { xs: 2, md: 2, lg: 3 },
                  fontSize: { xs: "0.8rem", md: "0.8rem", lg: "1rem" },
                  // borderRadius: 12,
                }}
              >
                Join us now
              </Button>
            </Typography>
          </Box>
        </Grid>

        {/* Carousel Slider */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ px: 3.1, mt: { xs: 10, sm: 30, md: 0 } }}
        >
          <Box sx={{ width: "100%", height: { xs: "50%", lg: "100%" } }}>
            <Slider {...slideSettings}>
              {SlideData?.map((item) => {
                return (
                  <Box
                    sx={{
                      // objectFit: "cover",
                      height: {
                        xs: "350px",
                        sm: "500px",
                        md: "550px",
                        lg: "600px",
                      },
                    }}
                    // component={"div"}
                    key={item.id}
                  >
                    <Image
                      src={item.imgSrc.src}
                      height={600}
                      width={750}
                      // fill
                      layout="intrinsic"
                      objectFit="contain"
                      alt="slider_image"
                      quality={100}
                      priority={true}
                      // sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home_section;
