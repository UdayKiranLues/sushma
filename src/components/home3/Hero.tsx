'use client'
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    appendDots: (dots: any) => (
      <div className="zirox-hero__slider__dots">
        <ul>{dots}</ul>
      </div>
    ),
  };
  return (
    <section className="zirox-hero-section hero-3">
      <Slider {...settings} className="zirox-hero__slider">
        {/* <!-- Slider Item --> */}
        <div className="zirox-hero__slider-item zirox-hero">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 d-flex align-items-center">
                <div className="zirox-hero__left">
                  <div className="zirox-hero__left__content">
                    <h1 data-aos="fade-up" className=" text-white">
                      Smart Bussiness Solutions
                    </h1>
                    <Link href="/contact" className="zirox-button zirox-button-primary ">
                      Get Solution
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="zirox-hero__right">
                  <Image width={1238} height={697} sizes="100vw" src="/img/home-1/hero-right.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Item End --> */}

        {/* <!-- Slider Item --> */}
        <div className="zirox-hero__slider-item zirox-hero">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 d-flex align-items-center">
                <div className="zirox-hero__left">
                  <div className="zirox-hero__left__content">
                    <h1 data-aos="fade-up" className=" text-white">
                      Creative Bussiness Solutions
                    </h1>
                    <div data-aos="fade-up" data-aos-delay="300">
                      <Link href="/contact" className="zirox-button zirox-button-primary ">
                        Get Solution
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="zirox-hero__right">
                  <Image width={1238} height={697} sizes="100vw" src="/img/home-1/hero-right.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Item End --> */}
      </Slider>
    </section>
  );
};

export default Hero;
