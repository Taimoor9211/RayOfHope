import { useState, useEffect } from "react";
import image8 from "../assets/image8.avif";

const stats = [
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
];

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
    description: "Share your expertise by teaching vocational skills to women.",
  },
  {
    title: "Community Outreach",
    location: "Lahore",
    commitment: "6 hours/week",
    requirements: ["Communication skills", "Local language", "Transportation"],
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

const benefits = [
  {
    title: "Make an Impact",
    description: "Directly contribute to improving lives in your community.",
    icon: "❤️",
  },
  {
    title: "Gain Experience",
    description: "Develop new skills and enhance your professional experience.",
    icon: "🎯",
  },
  {
    title: "Join a Community",
    description:
      "Connect with like-minded individuals passionate about change.",
    icon: "🤝",
  },
];

const testimonials = [
  {
    Image: image8,
    name: "Fatima Khan",
    role: "Skills Trainer",
    quote:
      "Teaching women new skills and watching them succeed has been incredibly rewarding.",
  },
  {
    Image: image8,
    name: "Ali Hassan",
    role: "Community Outreach",
    quote:
      "Being able to connect with and help my community has given me a new perspective.",
  },
  {
    Image: image8,
    name: "Zara Ahmed",
    role: "Event Coordinator",
    quote:
      "Organizing events that bring positive change is both challenging and fulfilling.",
  },
];

export default function Volunteer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    availability: "",
    motivation: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleApply = (role) => {
    setSelectedRole(role);
    setFormData({ ...formData, role: role });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setShowModal(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      experience: "",
      availability: "",
      motivation: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-12 px-4 py-8">
      {/* Hero Section */}
      <div
        className={`rounded-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="rounded-3xl relative h-[500px] shadow-2xl"
          style={{
            backgroundImage: `url(${image8})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-60 rounded-3xl" />
          <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-transform hover:scale-105">
              Join Our Volunteer Community
            </h1>
            <p className="text-xl text-white max-w-2xl mb-8">
              Make a difference in your community by volunteering your time and
              skills.
            </p>
            <button
              onClick={() => handleApply("General Volunteer")}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 hover:scale-105 transition-all shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl text-green-600 mb-4">👥</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {stat.stat}
            </div>
            <div className="text-gray-600 font-medium mb-2">{stat.label}</div>
            <p className="text-gray-500">{stat.description}</p>
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
              className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {opportunity.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      📍 {opportunity.location}
                    </span>
                    <span className="flex items-center gap-1">
                      🗓️ {opportunity.commitment}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    {opportunity.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <span>✔️</span> {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => handleApply(opportunity.title)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-green-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Why Volunteer With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Volunteer Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Display the testimonial's picture */}
              <img
                src={testimonial.Image}
                alt={`${testimonial.name}'s picture`}
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
              />
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <div className="font-medium text-gray-900 text-center">
                {testimonial.name}
              </div>
              <div className="text-green-600 text-center">
                {testimonial.role}
              </div>
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
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleApply("General Volunteer")}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
          >
            Apply Now
          </button>
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-all shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>

      {/* Application Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Volunteer Application: {selectedRole}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Availability *
                    </label>
                    <select
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Describe your relevant experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivation to Volunteer *
                  </label>
                  <textarea
                    name="motivation"
                    required
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Tell us why you want to volunteer..."
                  />
                </div>

                <div className="flex items-center justify-end space-x-4 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
