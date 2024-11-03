import { useState, useEffect } from "react";
import image9 from "../assets/image9.avif"; // Ensure the path is correct
import { UsersIcon, HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import image15 from "../assets/image15.avif";
import taimoor from "../assets/taimoor.jpg";
// Ensure the path is correct

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            backgroundImage: `url(${image9})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-40"></div>
          <div className="relative mt-28 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Our Story
              </h1>
              <p className="mt-6 text-xl text-purple-100 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                Empowering women and transforming communities since 2010.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower women through education, skills training, and economic
            opportunities, enabling them to become self-reliant and contribute
            to their communities.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            A world where every woman has the opportunity to reach her full
            potential and create positive change in her community.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {[
            {
              title: "Empowerment",
              description:
                "We believe in enabling individuals to take control of their lives.",
              icon: <UsersIcon className="h-12 w-12 text-purple-600 mx-auto" />,
            },
            {
              title: "Inclusivity",
              description:
                "We welcome and support all members of our community.",
              icon: <UsersIcon className="h-12 w-12 text-purple-600 mx-auto" />,
            },
            {
              title: "Compassion",
              description:
                "We act with kindness and understanding in all our work.",
              icon: <HeartIcon className="h-12 w-12 text-purple-600 mx-auto" />,
            },
            {
              title: "Excellence",
              description:
                "We strive for the highest standards in everything we do.",
              icon: <StarIcon className="h-12 w-12 text-purple-600 mx-auto" />,
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <div className="mx-auto">{value.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Journey
        </h2>
        <div className="space-y-8">
          {[
            {
              year: "2010",
              title: "Foundation",
              description: "Started with a small team and big dreams.",
            },
            {
              year: "2015",
              title: "Growth",
              description:
                "Expanded to 5 cities and launched skills training program.",
            },
            {
              year: "2018",
              title: "Impact",
              description: "Reached milestone of supporting 5,000 women.",
            },
            {
              year: "2020",
              title: "Innovation",
              description:
                "Launched digital literacy programs and online training.",
            },
          ].map((milestone) => (
            <div key={milestone.year} className="flex gap-8">
              <div className="w-24 flex-shrink-0 text-right">
                <div className="text-2xl font-bold text-purple-600">
                  {milestone.year}
                </div>
              </div>
              <div className="flex-1 relative pb-8">
                <div className="absolute top-0 left-0 w-px h-full bg-gray-200"></div>
                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              image: taimoor,
              name: "Taimoor Fayyaz",
              role: "Executive Director",
              bio: "15 years of experience in non-profit management and empowerment.",
            },
            {
              image: image15,
              name: "Kahaf Ali",
              role: "Programs Director",
              bio: "Passionate about creating impactful educational programs.",
            },
            {
              image: image15,
              name: "Hamza Attiq",
              role: "Community Relations",
              bio: "Dedicated to building strong community partnerships.",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-purple-50 rounded-xl p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover" // Ensure the image is styled as a circle
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <div className="text-purple-600 mb-2">{member.role}</div>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Want to Learn More?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Get in touch with us to learn more about our work and how you can get
          involved.
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  );
}
