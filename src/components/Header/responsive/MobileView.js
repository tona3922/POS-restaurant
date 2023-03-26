import React from "react";
import TextLogo from "assets/logo/TextLogo/logo-removebg_1.png";
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
import { DrawerContent } from "constants/drawerContent";
import { useViewport } from "utils/useViewport";

function MobileView() {
  const width = useViewport();
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
      <div className="header--mobile">
        <React.Fragment>
          <IconButton onClick={toggleDrawer(true)}>
            <ViewHeadlineIcon fontSize="large" color="black" />
          </IconButton>
          {/* <Button>{anchor}</Button> */}
          <Drawer anchor="left" open={showNav} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      </div>
      <div className="header-logo--mobile">
        <img src={TextLogo} height="60px" />
      </div>
      <div className="header-right--mobile">
        <IconButton>
          <AccountCircleIcon fontSize="large" color="black" />
        </IconButton>
        <IconButton>
          <AddShoppingCartIcon fontSize="large" color="black" />
        </IconButton>
      </div>
    </>
  );
}

export default MobileView;
