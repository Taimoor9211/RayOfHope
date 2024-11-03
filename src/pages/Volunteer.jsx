// src/pages/Volunteer.js
import { useState, useEffect } from "react";
import image8 from "../assets/image8.avif";

export default function Volunteer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const opportunities = [
    {
      title: "Skills Training Instructor",
      location: "Karachi",
      commitment: "4 hours/week",
      requirements: [
        "Teaching experience",
        "Relevant skill expertise",
        "Urdu speaking",
      ],
      description:
        "Share your expertise by teaching vocational skills to women.",
    },
    {
      title: "Community Outreach",
      location: "Lahore",
      commitment: "6 hours/week",
      requirements: [
        "Communication skills",
        "Local language",
        "Transportation",
      ],
      description: "Help us connect with communities and spread awareness.",
    },
    {
      title: "Event Coordinator",
      location: "Islamabad",
      commitment: "Project-based",
      requirements: [
        "Event management",
        "Organization skills",
        "Team leadership",
      ],
      description: "Organize and manage community events and fundraisers.",
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
          className="rounded-3xl overflow-hidden relative h-[500px] shadow-lg" // Added shadow for depth
          style={{
            backgroundImage: `url(${image8})`, // Ensure you have the correct image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-50"></div>

          {/* Content Wrapper */}
          <div className="relative mt-20 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8 z-10">
            {" "}
            {/* Added z-10 for layering */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Join Our Volunteer Community
              </h1>
              <p className="mt-6 text-xl text-green-100 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                Make a difference in your community by volunteering your time
                and skills.
              </p>
              <button className="mt-8 bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-green-50  transition-transform duration-300 hover:shadow-lg hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            stat: "500+",
            label: "Active Volunteers",
            description: "People actively helping in our community.",
          },
          {
            stat: "10,000+",
            label: "Volunteer Hours",
            description: "Hours dedicated by our volunteers.",
          },
          {
            stat: "20+",
            label: "Cities",
            description: "Cities where our volunteers are active.",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <div className="h-12 w-12 text-green-600 mx-auto">
              <span role="img" aria-label="group">
                👥
              </span>{" "}
              {/* Placeholder for icon */}
            </div>
            <div className="mt-4 text-3xl font-bold text-gray-900">
              {stat.stat}
            </div>
            <div className="mt-2 text-gray-600">{stat.label}</div>
            <p className="mt-2 text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Volunteer Opportunities */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Current Opportunities
        </h2>
        <div className="space-y-6">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {opportunity.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="flex items-center text-gray-500">
                      {/* Replaced LocationMarkerIcon with text */}
                      <span role="img" aria-label="location">
                        📍
                      </span>{" "}
                      {opportunity.location}
                    </span>
                    <span className="flex items-center text-gray-500">
                      {/* Replaced CalendarIcon with text */}
                      <span role="img" aria-label="commitment">
                        🗓️
                      </span>{" "}
                      {opportunity.commitment}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {opportunity.description}
                  </p>
                </div>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Apply
                </button>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900">Requirements:</h4>
                <ul className="mt-2 space-y-2">
                  {opportunity.requirements.map((req) => (
                    <li key={req} className="flex items-center text-gray-600">
                      <span role="img" aria-label="check">
                        ✔️
                      </span>{" "}
                      {/* Replaced CheckCircleIcon with text */}
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits of Volunteering */}
      <div className="bg-green-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Volunteer With Us?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Make an Impact",
              description:
                "Directly contribute to improving lives in your community.",
            },
            {
              title: "Gain Experience",
              description:
                "Develop new skills and enhance your professional experience.",
            },
            {
              title: "Join a Community",
              description:
                "Connect with like-minded individuals passionate about change.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="h-12 w-12 text-green-600 mx-auto">
                <span role="img" aria-label="heart">
                  ❤️
                </span>{" "}
                {/* Placeholder for icon */}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Volunteer Stories
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "Fatima Khan",
              role: "Skills Trainer",
              quote:
                "Teaching women new skills and watching them succeed has been incredibly rewarding.",
            },
            {
              name: "Ali Hassan",
              role: "Community Outreach",
              quote:
                "Being able to connect with and help my community has given me a new perspective.",
            },
            {
              name: "Zara Ahmed",
              role: "Event Coordinator",
              quote:
                "Organizing events that bring positive change is both challenging and fulfilling.",
            },
          ].map((testimonial) => (
            <div key={testimonial.name} className="bg-green-50 rounded-xl p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full mb-4"></div>
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="font-medium text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-green-600">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Join our community of volunteers and help create positive change.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors">
            Apply Now
          </button>
          <button className="bg-green-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-400 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
