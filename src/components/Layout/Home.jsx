import Banner from "../pages/Banner";
import CustomerTestimonials from "../pages/CustomerTestimonials";
import FeaturedBrands from "../pages/Subscription";
import Gallery from "../pages/Gallery";
import ShopByCategory from "../pages/ShopByCategory";
import Subscription from "../pages/Subscription";

export default function Home() {

  return (
    <>
      <Banner />
      <ShopByCategory/>
      <Gallery/>
      <CustomerTestimonials/>
      <Subscription/>

    </>
  );
}
