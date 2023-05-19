import Banner from "../pages/Banner";
import CustomerTestimonials from "../pages/CustomerTestimonials";
import FeaturedBrands from "../pages/Subscription";
import Gallery from "../pages/Gallery";
import ShopByCategory from "../pages/ShopByCategory";
import Subscription from "../pages/Subscription";
import { Helmet } from "react-helmet-async";

export default function Home() {

  return (
    <>
    <Helmet>
    <title>VroomBox</title>
  </Helmet>
      <Banner />
      <ShopByCategory/>
      <Gallery/>
      <CustomerTestimonials/>
      <Subscription/>

    </>
  );
}
