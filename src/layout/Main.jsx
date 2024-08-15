import { Outlet } from "react-router-dom";
import Navber from "../Shard/Navber/Navber";
import Footer from "../Shard/Footer/Footer";
import { useState } from "react";

const Main = () => {
  const [isOn, setIsOn] = useState(false);
  const [Theme, setTheme] = useState("light");

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setTheme(Theme === "light" ? "dark" : "light");
  };

  return (
    <div data-theme={Theme} className="bg-zinc-300">
      <Navber toggleSwitch={toggleSwitch} />
      <div className="w-11/12 mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
