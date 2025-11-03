'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const [filterKey, setFilterKey] = useState("all");

  const portfolioItems = [
    { id: 1, category: "web-design", title: "Web Design", image: "/img/latest-project/latest-project-1.jpg" },
    { id: 2, category: "branding", title: "Branding", image: "/img/latest-project/latest-project-2.jpg" },
    { id: 3, category: "photography", title: "photography", image: "/img/latest-project/latest-project-3.jpg" },
    { id: 4, category: "branding", title: "Branding", image: "/img/latest-project/latest-project-4.jpg" },
  ];


  const filterItems = [
    {
      category: 'all',
      title: 'All'
    }
  ]

  portfolioItems.forEach((item) => {
    const exists = filterItems.some(({ category }) => category === item.category)
    if (!exists) {
      filterItems.push({
        category: item.category,
        title: item.title
      })
    }
  })

  // Filter portfolio items based on the selected filterKey
  const filteredPortfolioItems = filterKey === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filterKey);

  return (
    <section className="zirox-latest-projects zirox-section">
      <div className="container position-relative z-1">
        <div className="zirox-latest-projects__header">
          <div className="zirox-latest-projects__header-left">
            <h6 data-aos="fade-up" className="text-center text-xl-start">
              Latest Projects
            </h6>
            <h2 data-aos="fade-up" data-aos-delay="200" className="text-center text-xl-start text-white">
              Explore Our Best Recently Completed Projects
            </h2>
          </div>
          <div className="zirox-latest-projects__header-right">
            <ul className="zirox-latest-projects__header-right__tab">
              {filterItems.map(({ category, title }) => (
                <li key={category} onClick={() => setFilterKey(category)}>
                  <button className={`zirox-latest-projects__header-right__tab-link filter ${filterKey == category && "active"}`}>
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row position-relative z-1">
          {filteredPortfolioItems.map(({ id, category, image, title }) => (
            <div key={id} className={`col-12 col-md-6 col-lg-3 filter-item ${category}`}>
              <Link href="/portfolio-details">
                <div className="zirox-latest-projects-item">
                  <div className="zirox-latest-projects-item-img">
                    <Image width={408} height={408} sizes="100vw" style={{ width: "100%", height: "auto" }} src={image} alt="" className="img-fluid" />
                  </div>
                  <div className="zirox-latest-projects-item-info">
                    <h3>{title}</h3>
                    <p>Marketing, Consultant</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
