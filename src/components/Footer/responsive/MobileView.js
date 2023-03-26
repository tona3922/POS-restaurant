import { List, ListItemButton, ListItemText } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { DrawerContent } from "constants/drawerContent";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import React from "react";

function MobileView() {
  // let current = "";
  const [open, setOpen] = React.useState(true);

  const handleClick = (title) => () => {
    if (open == title) setOpen("");
    else setOpen(title);
  };

  return (
    <>
      <div className="footer-top--mobile">
        <List>
          {DrawerContent.map((each) => (
            <>
              <ListItemButton onClick={handleClick(each.title)}>
                <ListItemText
                  primary={each.title}
                  className="bottom-section-title"
                />
                {open == each.title ? (
                  <ExpandLess sx={{ color: "white" }} />
                ) : (
                  <ExpandMore sx={{ color: "white" }} />
                )}
              </ListItemButton>
              <Collapse in={open == each.title} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {each.list.map((link) => (
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={link} sx={{ color: "#ababab" }} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
          <ListItemButton onClick={handleClick("Download App")}>
            <ListItemText
              primary="Download App"
              className="bottom-section-title"
            />
            {open == "Download App" ? (
              <ExpandLess sx={{ color: "white" }} />
            ) : (
              <ExpandMore sx={{ color: "white" }} />
            )}
          </ListItemButton>
          <Collapse in={open == "Download App"} timeout="auto" unmountOnExit>
            <div className="download-photo">
              <img
                src="https://kfcvn-static.cognizantorderserv.com/images/web/logo_appstore.png"
                alt="ios"
              />
              <img
                src="https://kfcvn-static.cognizantorderserv.com/images/web/logo_playstore.png"
                alt="android"
              />
            </div>
          </Collapse>
        </List>
      </div>
      <div className="footer-middle--mobile">
        <div className="footer-social-icons">
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
        <div style={{ color: "#ababab" }}>Copyright © 2023 FLAVOR Vietnam</div>
      </div>
    </>
  );
}

export default MobileView;
