// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.avif";
import image14 from "../assets/image14.avif";
import image15 from "../assets/image15.avif";
import image16 from "../assets/image16.avif";
import image17 from "../assets/image17.avif";
import image18 from "../assets/image18.avif";
import image19 from "../assets/image19.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: "Students Educated", value: "10,000+" },
    { label: "Skills Training Graduates", value: "5,000+" },
    { label: "Families Supported", value: "15,000+" },
    { label: "Job Placements", value: "3,000+" },
  ];

  const programs = [
    {
      title: "Free Education",
      description: "Providing quality education to underprivileged children.",
      link: "/education",
    },
    {
      title: "Skills Training",
      description: "Empowering girls through sewing and vocational training.",
      link: "/skills-training",
    },
    {
      title: "Monthly Ration",
      description: "Supporting families with essential food supplies.",
      link: "/ration-program",
    },
    {
      title: "Employment Support",
      description: "Connecting people with job opportunities.",
      link: "/employment",
    },
  ];

  const stories = [
    {
      id: 1,
      title: "A Journey of Hope",
      image: image14,
      description:
        "After losing everything, Sarah found solace in our community support program, helping her regain her confidence and purpose.",
    },
    {
      id: 2,
      title: "Transforming Lives",
      image: image15,
      description:
        "Through dedicated training and mentorship, Ali was able to turn his passion for cooking into a thriving catering business.",
    },
    {
      id: 3,
      title: "Education for All",
      image: image16,
      description:
        "With the help of our educational programs, children in remote areas are now accessing quality education and resources..............................!",
    },
    {
      id: 4,
      title: "Empowering Women",
      image: image17,
      description:
        "The sewing initiative has empowered hundreds of women, allowing them to become financially independent and support their families.",
    },
    {
      id: 5,
      title: "A Vision Realized",
      image: image18,
      description:
        "After receiving vocational training, Raj successfully opened his own mechanic shop, becoming a role model in his community.",
    },
    {
      id: 6,
      title: "Building Futures",
      image: image19,
      description:
        "Thanks to our program, kids like Fatima are no longer limited by their circumstances. They are now dreaming big and achieving more.",
    },
  ];

  return (
    <div className="space-y-16">
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="relative rounded-3xl overflow-hidden h-[500px]"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-700 opacity-50" />
          <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center py-24 px-6 sm:py-32 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105 text-center">
              Empowering Communities
              <br />
              <span className="text-indigo-200">Building Better Futures</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl text-indigo-100 transition-transform duration-300 ease-in-out transform hover:scale-105 text-center">
              Join us in our mission to provide education, skills training, and
              support to those in need. Together, we can make a difference.
            </p>
            <div className="mt-10 flex gap-6 justify-center">
              <Link
                to="/donate"
                className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-indigo-800 shadow-md hover:bg-indigo-100 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                to="/volunteer"
                className="rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-indigo-600">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <Link
              key={program.title}
              to={program.link}
              className="group relative rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {program.title}
              </h3>
              <p className="mt-2 text-gray-600">{program.description}</p>
              <span className="mt-4 inline-block text-indigo-600 group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-2xl p-10 md:p-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Impact Stories
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="py-8"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 pb-10">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{story.description}</p>
                  <Link
                    to={`/story/${story.id}`}
                    className="mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
                  >
                    Read full story →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute top-56 w-full flex justify-between">
            <button className="prevBtn relative z-50">
              <FaChevronLeft size={30} className="hidden sm:block" />
            </button>
            <button className="nextBtn relative z-50">
              <FaChevronRight size={30} className="hidden sm:block" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
