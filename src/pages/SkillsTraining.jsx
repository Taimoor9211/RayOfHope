// src/pages/SkillsTraining.js
import { useState, useEffect } from "react";
import image3 from "../assets/image3.avif";
import image20 from "../assets/image20.avif";
import image21 from "../assets/image21.avif";
import image22 from "../assets/image22.avif";

export default function SkillsTraining() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Sewing & Tailoring",
      duration: "6 months",
      schedule: "Mon-Fri, 9AM-1PM",
      seats: 30,
      skills: [
        "Basic Stitching",
        "Pattern Making",
        "Garment Construction",
        "Machine Operation",
      ],
      certification: "Professional Tailoring Certificate",
      image: image20,
    },
    {
      title: "Computer Skills",
      duration: "4 months",
      schedule: "Mon-Fri, 2PM-5PM",
      seats: 25,
      skills: [
        "MS Office",
        "Internet Usage",
        "Basic Programming",
        "Digital Marketing",
      ],
      certification: "Digital Literacy Certificate",
      image: image21,
    },
    {
      title: "Beauty & Aesthetics",
      duration: "3 months",
      schedule: "Tue-Sat, 10AM-2PM",
      seats: 20,
      skills: ["Hair Styling", "Skin Care", "Makeup Application", "Nail Art"],
      certification: "Beauty Professional Certificate",
      image: image22,
    },
  ];

  const successStories = [
    {
      image: image20,
      name: "Sarah Khan",
      program: "Sewing & Tailoring",
      story:
        "After completing the program, I started my own boutique and now employ three other women.",
      achievement: "Business Owner",
    },
    {
      image: image21,
      name: "Fatima Ali",
      program: "Computer Skills",
      story:
        "The digital skills I learned helped me secure a job as a data entry specialist.",
      achievement: "Employed Professional",
    },
    {
      image: image22,
      name: "Amina Hussain",
      program: "Beauty & Aesthetics",
      story:
        "I now run a successful home-based beauty salon serving my community.",
      achievement: "Entrepreneur",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div
        className={`rounded-3xl overflow-hidden transition-transform duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="rounded-3xl overflow-hidden relative h-[500px]"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-50"></div>
          <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8 relative mt-14 z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Skills Training Program
              </h1>
              <p className="mt-6 text-xl text-purple-100 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                Empowering women through vocational training and skill
                development. Build your career and achieve financial
                independence.
              </p>
              <button
                className="mt-8 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold shadow-md 
              hover:bg-purple-100 hover:text-purple-700 transition-all duration-300 ease-in-out 
              transform hover:scale-105 hover:shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Program Benefits */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            title: "Expert Training",
            description: "Learn from experienced professionals in the field",
          },
          {
            title: "Certification",
            description: "Receive recognized certification upon completion",
          },
          {
            title: "Job Placement",
            description: "Get assistance in finding employment opportunities",
          },
        ].map((benefit) => (
          <div
            key={benefit.title}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {benefit.title}
            </h3>
            <p className="mt-2 text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Training Programs */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Available Programs
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">🗓️</span>
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">⏰</span>
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">👥</span>
                    <span>{program.seats} seats available</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900">Skills Covered:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {successStories.map((story) => (
            <div key={story.name} className="bg-white rounded-xl shadow-md p-6">
              <img
                src={story.image}
                alt={story.name}
                className="h-20 w-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {story.name}
              </h3>
              <p className="text-purple-600 text-center mb-4">
                {story.achievement}
              </p>
              <p className="text-gray-600 text-center">{story.story}</p>
              <p className="text-sm text-gray-500 text-center mt-4">
                Graduate of {story.program}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Process */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How to Join
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {[
            {
              step: 1,
              title: "Submit Application",
              description:
                "Fill out the online application form with your details",
              icon: "✍️", // You can use a relevant icon or image
            },
            {
              step: 2,
              title: "Assessment",
              description:
                "Complete a basic assessment to determine your suitable program",
              icon: "📋",
            },
            {
              step: 3,
              title: "Enrollment",
              description:
                "Complete enrollment process and receive program schedule",
              icon: "📝",
            },
            {
              step: 4,
              title: "Join Training",
              description:
                "Attend classes and start your skills training journey!",
              icon: "🎓",
            },
          ].map((process) => (
            <div
              key={process.title}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{process.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {process.step}. {process.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
