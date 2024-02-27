import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterBar />
    </div>
  );
};

export default App;