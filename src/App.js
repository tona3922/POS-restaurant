import "./App.css";
import { Cart } from "./components/MenuDetail/cart/cart";
import { MenuDetail } from "./components/MenuDetail/MenuDetail/MenuDetail";
import { Menuslidetab } from "./components/MenuDetail/tabs/menuslide-tab/menuslide_tab";
import { Sashimi } from "./components/MenuDetail/tabs/tabs-list/sashimi";
import { Sake } from "./components/MenuDetail/tabs/tabs-list/sake";
import { CHEFBOX } from "./components/MenuDetail/tabs/storage/chefbox";
import { SALAD } from "./components/MenuDetail/tabs/storage/salad";
import { NOODLE } from "./components/MenuDetail/tabs/storage/udon";
import { Standard } from "./components/MenuDetail/tabs/standard/standard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <MenuDetail />
        <Menuslidetab />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/salad"
            element={<Standard props={SALAD} title={"Salad"} />}
          />
          <Route path="/sake" element={<Sake />} />
          <Route path="/sashimi" element={<Sashimi />} />
          <Route
            path="/chefbox"
            element={<Standard props={CHEFBOX} title={"Chef's box"} />}
          />
          <Route
            path="/noodle"
            element={<Standard props={NOODLE} title={"Noodle"} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
