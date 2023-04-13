import React from "react";
import FullLogo from "assets/logo/GradientLogo/logo-removebg_1.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Drawer,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/system";
import { DrawerContent } from "constants/drawerContent";
import Button from "@mui/material/Button";
import { useViewport } from "utils/useViewport";
import { Link } from "react-router-dom";

function DesktopView() {
  const width = useViewport();
  const HeaderButton = styled(Button)({
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: width <= 991 ? "1rem" : "1.2rem",
    fontWeight: "500",
    fontFamily: "'Roboto', sans-serif",
  });

  const [showNav, setShowNav] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowNav(open);
  };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="drawer-top">
        <IconButton>
          <CloseIcon></CloseIcon>
        </IconButton>
      </div>
      <Divider></Divider>
      <div className="drawer-below">
        {DrawerContent.map((each) => (
          <>
            <div className="drawer-below-section">
              <p>{each.title}</p>
              <List>
                {each.list.map((link) => (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
            <Divider></Divider>
          </>
        ))}
      </div>
      <div className="drawer-media">
        <IconButton>
          <FacebookIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <YouTubeIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <TwitterIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      </div>
    </Box>
  );
  return (
    <>
      <div className="header-nav">
        <IconButton sx={{ paddingX: "2px", paddingY: "2px" }}>
          <img alt="logo" src={FullLogo} className="full-logo-header" />
        </IconButton>

        <Link to={"/menu"}>
          <HeaderButton>Thực đơn</HeaderButton>
        </Link>

        <HeaderButton>Khuyến mãi</HeaderButton>
        <HeaderButton>Hệ thống nhà hàng</HeaderButton>
        <HeaderButton>Blog</HeaderButton>
      </div>
      <div className="header-right">
        <Link to={"/login"}>
          <IconButton>
            <AccountCircleIcon
              fontSize={width <= 991 ? "medium" : "large"}
              color="black"
            />
          </IconButton>
        </Link>

        <Link to={"/cart"}>
          <IconButton>
            <AddShoppingCartIcon
              fontSize={width <= 991 ? "medium" : "large"}
              color="black"
            />
          </IconButton>
        </Link>

        <React.Fragment>
          <IconButton onClick={toggleDrawer(true)}>
            <ViewHeadlineIcon
              fontSize={width <= 991 ? "medium" : "large"}
              color="black"
            />
          </IconButton>
          {/* <Button>{anchor}</Button> */}
          <Drawer anchor="right" open={showNav} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}

export default DesktopView;
