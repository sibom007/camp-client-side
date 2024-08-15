import Banner from "../Banner/Banner";
import Extrasection from "../ExtraSection/Extrasection";
import HomeClassdata from "../Class/HomeClassdata";
import Instackhome from "../Instacktorhome/Instackhome";
import { Helmet } from "react-helmet-async";

import "./Home.css";
import Carcel from "../Carcel/Carcel";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Adventure Campus || Home</title>
      </Helmet>
      <Banner />
      <Carcel />
      <HomeClassdata />
      <Extrasection />
      <Instackhome />
    </div>
  );
};

export default Home;
