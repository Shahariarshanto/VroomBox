import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/NavBar";
import Banner from "../pages/Banner";
import Gallery from "../pages/Gallery";

export default function Home() {

  return (
    <>
      <Banner/>
      <Gallery/>

    </>
  );
}
