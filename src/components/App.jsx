import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <div>Some Footer</div>
    </div>
  );
};

export default App;