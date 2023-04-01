import React from "react";
import "./index.css";
import { Divider } from "@mui/material";
import { useViewport } from "utils/useViewport.js";
import MobileView from "./responsive/MobileView";
import DesktopView from "./responsive/DesktopView";

function Footer() {
  const width = useViewport();

  return (
    <div className="footer">
      <div className="footer-container">
        {width <= 991 ? <MobileView></MobileView> : <DesktopView></DesktopView>}
        <Divider sx={{ borderColor: "white" }}></Divider>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <h2 className="footer-name">
              CÔNG TY LIÊN DOANH TNHH FLAVOR VIỆT NAM
            </h2>
            <div>
              Số 292 Bà Triệu, P. Lê Đại Hành, Q. Hai Bà Trưng, TP. Hà Nội.
            </div>
            <div>Điện thoại: (028) 38489828</div>
            <div>Email: lienhe@flavorvietnam.com.vn</div>
            <div>Mã số thuế: 0100773885</div>
            <div>Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế Thành Phố Hà Nội</div>
          </div>
          <div className="footer-bottom-right">
            <img
              src="https://kfcvn-static.cognizantorderserv.com/images/email/logo_footer.png"
              alt="gov"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
