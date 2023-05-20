import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../pages/Banner";
import CustomerTestimonials from "../pages/CustomerTestimonials";
import ProductSlider from "../pages/FeatureProducts/ProductSlider";
import Gallery from "../pages/Gallery";
import ShopByCategory from "../pages/ShopByCategory";
import Subscription from "../pages/Subscription";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>VroomBox</title>
      </Helmet>
      <Banner />
      <Gallery />
      <ShopByCategory />
      <CustomerTestimonials />
      <ProductSlider />
      <Subscription />
    </>
  );
}
