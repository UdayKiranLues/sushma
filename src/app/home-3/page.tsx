import AboutUs3 from "@/components/home3/About";
import Blogs from "@/components/home3/Blogs";
import Contact from "@/components/home3/Contact";
import Customer from "@/components/home3/Customer";
import Hero from "@/components/home3/Hero";
import Projects from "@/components/home3/Projects";
import PopularServices from "@/components/home3/Services";
import Team from "@/components/home3/Team";
import Testimonial from "@/components/home3/Testimonial";
import WhyUs from "@/components/home3/WhyUs";
import WorkingProcess from "@/components/home3/WorkingProcess";

const HomeThree = () => {
  return (
    <>
      <Hero />
      <AboutUs3 />
      <PopularServices />
      <div className="pt-120">
        <Projects />
      </div>
      <WorkingProcess />
      <Team />
      <WhyUs />
      <Testimonial />
      <Blogs />
      <Contact />
      <Customer />
    </>
  );
};

export default HomeThree;
