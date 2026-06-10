import Header from "@/components/layout/header";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TopSuppliers from "@/components/home/TopSuppliers";
import LatestRFQ from "@/components/home/LatestRFQ";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import LatestBlogs from "@/components/home/LatestBlogs";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Header />   
      <Navbar />
      <Hero />  
      <Categories />
      <FeaturedProducts />
      <TopSuppliers />
      <LatestRFQ />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <LatestBlogs />
      <CTA />

    </>
  );
}