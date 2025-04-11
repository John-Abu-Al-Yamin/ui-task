import React from "react";
import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "/image/imgavatar.png";
import HeaderSection from "../HeaderSection";

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

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      name: "Clara",
      title: "Web Developer",
      image: avatar,
    },
    {
      id: 2,
      content:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.",
      name: "Alex",
      title: "UI Designer",
      image: avatar,
    },
    {
      id: 3,
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      name: "Sarah",
      title: "Product Manager",
      image: avatar,
    },
    {
      id: 4,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Michael",
      title: "Marketing Specialist",
      image: avatar,
    },
    {
      id: 5,
      content:
        "Using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      name: "Clara",
      title: "Web Developer",
      image: avatar,
    },
    {
      id: 6,
      content:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.",
      name: "Alex",
      title: "UI Designer",
      image: avatar,
    },
    {
      id: 7,
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      name: "Sarah",
      title: "Product Manager",
      image: avatar,
    },
    {
      id: 8,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Michael",
      title: "Marketing Specialist",
      image: avatar,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-4 py-12 max-w-7xl">
      <HeaderSection
        title="What They Say"
        subtitle="T Their opinion about the perceived goodinvest with the experience they
        gone through."
      />

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4" data-aos="fade-up">
            <div className="bg-gray-100 rounded-lg p-8 shadow-lg transition-transform duration-300 hover:scale-105 h-full min-h-[400px] flex flex-col">
              <div className="flex flex-col items-center text-center flex-grow">
                <div className="w-24 h-24 overflow-hidden rounded-full bg-yellow-100 mb-6 border-4 border-yellow-200">
                  <img
                    src={testimonial.image || "/default-profile.png"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-800 mb-6 text-lg flex-grow">
                  {testimonial.content}
                </p>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
