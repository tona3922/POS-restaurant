import React from "react";

import { useViewport } from "utils/useViewport";
import "./index.css";
import MobileView from "./responsive/MobileView";
import DesktopView from "./responsive/DesktopView";

function Header() {
  const width = useViewport();

  return (
    <header>
      <div className="header-common">
        {width <= 767 ? <MobileView></MobileView> : <DesktopView></DesktopView>}
      </div>
    </header>
  );
}

export default Header;
