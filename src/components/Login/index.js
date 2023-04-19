import React from "react";
import "./index.css";
import Banner from "assets/logo/Banner.png";
import {
  TextField,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { darken } from "@mui/material";

export const SubmitButton = styled(Button)({
  color: "white",
  backgroundColor: "#133B3D",
  "&:hover": {
    backgroundColor: darken("#133B3D", 0.1),
  },
  borderRadius: "2em",
  padding: "10px",
  boxShadow:
    "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
});

export function Login() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="page-container">
      <div className="left-block" style={{ backgroundImage: `url(${Banner})` }}>
        <img src={Banner} alt="" />
      </div>
      <div className="right-block">
        <div className="form-area">
          <h1 className="big-title">Đăng nhập</h1>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="login-content"
          >
            <TextField
              id="standard-basic"
              label="Địa chỉ email của bạn"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Mật khẩu"
              variant="standard"
              type="password"
            />
          </Box>
          <div className="forget-password-link">
            <Button
              variant="text"
              onClick={handleClickOpen}
              sx={{ textTransform: "none", fontSize: "16px", color: "black" }}
            >
              Bạn quên mật khẩu?
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogActions>
                <IconButton onClick={handleClose}>
                  <CloseIcon></CloseIcon>
                </IconButton>
              </DialogActions>
              <DialogTitle sx={{ paddingTop: "0" }}>
                <div className="forget-password-title">Bạn quên mật khẩu?</div>
                <div className="forget-password-title title-small">
                  Đừng lo lắng, bạn có thể đặt lại dễ dàng
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Chúng tôi sẽ gửi cho bạn một email có liên kết để đặt lại mật
                  khẩu của bạn.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Địa chỉ email của bạn"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions sx={{ padding: "0 24px 40px 24px" }}>
                <SubmitButton fullWidth variant="text" onClick={handleClose}>
                  Gửi Email đặt lại mật khẩu
                </SubmitButton>
              </DialogActions>
            </Dialog>
          </div>
          <SubmitButton sx={{ width: "100%", marginTop: "20px" }}>
            Đăng nhập
          </SubmitButton>
          <div className="signup-link">Bạn chưa có tài khoản?</div>
          <Link to={"/signup"}>
            <SubmitButton
              sx={{
                width: "100%",
                backgroundColor: "#D2D79F",
                "&:hover": {
                  backgroundColor: darken("#D2D79F", 0.1),
                },
              }}
            >
              Đăng ký
            </SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
