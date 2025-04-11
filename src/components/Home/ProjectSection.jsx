import React from "react";
import HeaderSection from "../HeaderSection";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from "/image/project1.png";
import project2 from "/image/project2.png";
import project3 from "/image/project3.png";

const ProjectSection = () => {
  // Custom arrow components
  const NextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        aria-label="Next Slide"
        className=" absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <MdChevronRight size={30} className="text-gray-700" />
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        aria-label="Previous Slide"
        className=" absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <MdChevronLeft size={30} className="text-gray-700" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const projects = [
    {
      id: 1,
      image: project2,
      title: "E-commerce Store",
      builtWith: "React, Node.js, MongoDB",
      link: "#",
    },
    {
      id: 2,
      image: project1,
      title: "Portfolio Website – Designed in Minutes",
      builtWith: "React, Tailwind CSS",
      link: "#",
    },
    {
      id: 3,
      image: project3,
      title: "Business Website – Fully Responsive & SEO-Friendly",
      builtWith: "React Native, Firebase",
      link: "#",
    },
    {
      id: 4,
      image: project1,
      title: "Mobile App – Chat Application",
      builtWith: "Next.js, Contentful",
      link: "#",
    },
    {
      id: 5,
      image: project2,
      title: "Dashboard UI",
      builtWith: "Vue.js, Chart.js",
      link: "#",
    },
    {
      id: 6,
      image: project3,
      title: "Landing Page",
      builtWith: "HTML, CSS, JavaScript",
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <HeaderSection title="See What We've Built" />
        <div className="mt-10 relative">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-3 " data-aos="fade-up">
                <div className=" rounded-lg overflow-hidden  transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Built with {project.builtWith}
                    </p>
                    <a
                      href={project.link}
                      className="inline-block bg-[#35367E] hover:bg-[#25255E] text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
