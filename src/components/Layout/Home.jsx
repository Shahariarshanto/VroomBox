import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../pages/Banner";
import CustomerTestimonials from "../pages/CustomerTestimonials";
import Gallery from "../pages/Gallery";
import ProductSlider from "../pages/ProductSlider";
import ShopByCategory from "../pages/ShopByCategory";
import Subscription from "../pages/Subscription";

export default function Home() {

  return (
    <>
      <Helmet>
        <title>VroomBox</title>
      </Helmet>
      <Banner />
      <ProductSlider />
      <ShopByCategory />
      <Gallery />
      <CustomerTestimonials />
      <Subscription />
      
    </>
  );
}
