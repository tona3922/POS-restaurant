import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { DrawerContent } from "constants/drawerContent";

function DesktopView() {
  return (
    <>
      <div className="footer-top">
        <Grid container spacing={2}>
          {DrawerContent.map((each) => (
            <Grid xs>
              <p className="bottom-section-title"> {each.title}</p>
              <List sx={{ color: "#ababab" }}>
                {each.list.map((link) => (
                  <ListItem disablePadding>
                    <ListItemText primary={link} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
          <Grid xs>
            <p className="bottom-section-title"> Download App</p>
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
          </Grid>
        </Grid>
      </div>
      <div className="footer-middle">
        <Grid container spacing={2} alignItems="center">
          <Grid xs={3}></Grid>
          <Grid xs={6} sx={{ color: "#ababab" }} textAlign="center">
            Copyright © 2023 FLAVOR Vietnam
          </Grid>
          <Grid xs={3} textAlign="right">
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
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DesktopView;
