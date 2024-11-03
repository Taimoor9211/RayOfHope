import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image6 from "../assets/image6.avif";
import {
  HandRaisedIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function EmpowermentPrograms() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    why_interested: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleApplyNow = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      experience: "",
      why_interested: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { program: selectedProgram, ...formData });
    handleCloseModal();
  };

  const programs = [
    {
      title: "Street Food Cart Initiative",
      type: "Food Business",
      investment: "Rs. 25,000 - 35,000",
      location: "Karachi",
      description:
        "Help individuals start their own food cart business selling local snacks and beverages",
      requirements: [
        "Basic cooking skills",
        "Willingness to learn",
        "Food safety understanding",
      ],
      support: ["Equipment", "Training", "Location Setup", "Initial Inventory"],
    },
    {
      title: "Small Shop Program",
      type: "Retail Business",
      investment: "Rs. 40,000 - 50,000",
      location: "Lahore",
      description:
        "Support families in setting up small grocery or general stores in their communities",
      requirements: [
        "Basic numeracy",
        "Community connection",
        "Space availability",
      ],
      support: [
        "Shop Setup",
        "Inventory Management Training",
        "Supplier Connections",
      ],
    },
    {
      title: "Handicraft Enterprise",
      type: "Artisan Business",
      investment: "Rs. 20,000 - 30,000",
      location: "Islamabad",
      description:
        "Enable skilled artisans to start their own handicraft business",
      requirements: [
        "Crafting skills",
        "Creative ability",
        "Basic business interest",
      ],
      support: [
        "Materials",
        "Design Training",
        "Market Access",
        "Marketing Support",
      ],
    },
  ];

  const successStories = [
    {
      name: "Fatima Bibi",
      business: "Samosa Cart",
      location: "Karachi",
      story: "Started with a small cart, now runs three successful food stalls",
      impact: "Supporting family of 5 and employing 2 workers",
    },
    {
      name: "Ahmed Khan",
      business: "Corner Shop",
      location: "Lahore",
      story: "Transformed unused space into thriving neighborhood store",
      impact: "Providing essential items to local community",
    },
    {
      name: "Zainab Malik",
      business: "Handicraft Shop",
      location: "Peshawar",
      story: "Turned traditional embroidery skills into sustainable business",
      impact: "Training other women in the community",
    },
  ];

  const steps = [
    {
      icon: (
        <HandRaisedIcon className="h-10 w-10 text-green-600 transition-transform duration-300 hover:scale-110" />
      ),
      title: "Apply for Support",
      description: "Fill out the application form to be part of our programs.",
    },
    {
      icon: (
        <ShoppingBagIcon className="h-10 w-10 text-green-600 transition-transform duration-300 hover:scale-110" />
      ),
      title: "Receive Business Kit",
      description: "Get essential resources to kickstart your business.",
    },
    {
      icon: (
        <UserGroupIcon className="h-10 w-10 text-green-600 transition-transform duration-300 hover:scale-110" />
      ),
      title: "Training & Mentorship",
      description:
        "Participate in our training programs for skills development.",
    },
    {
      icon: (
        <HeartIcon className="h-10 w-10 text-green-600 transition-transform duration-300 hover:scale-110" />
      ),
      title: "Start Your Business",
      description:
        "Launch your business and join our community of entrepreneurs!",
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
          className="relative rounded-3xl overflow-hidden h-[500px]"
          style={{
            backgroundImage: `url(${image6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-50" />
          <div className="relative max-w-7xl mx-auto py-24 px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Empower Through Enterprise
              </h1>
              <p className="mt-6 text-xl text-green-100 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                Helping underprivileged individuals build sustainable
                livelihoods through small business initiatives
              </p>
            </div>
            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={() => handleApplyNow(programs[0])}
                className="bg-white text-green-700 px-8 py-3 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
              >
                Apply for Support
              </button>
              <Link
                to="/donate"
                className="bg-green-700 text-white px-8 py-3 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
          Business Support Programs
        </h2>
        <div className="space-y-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="relative border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-green-500 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.type}</p>
                  <p className="mt-2 text-gray-700">{program.description}</p>
                  <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <span className="flex items-center text-gray-500">
                      Investment: {program.investment}
                    </span>
                    <span className="flex items-center text-gray-500">
                      Location: {program.location}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900">Requirements:</h4>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      {program.requirements.map((req) => (
                        <li key={req}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900">We Provide:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {program.support.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 transition-all hover:bg-green-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleApplyNow(program)}
                  className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-green-700 transition-all mt-4 sm:mt-0 lg:absolute lg:top-4 lg:right-4"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story) => (
            <div
              key={story.name}
              className="border border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {story.name}
              </h3>
              <p className="text-green-600 font-medium">{story.business}</p>
              <p className="text-gray-500">{story.location}</p>
              <p className="mt-4 text-gray-700">{story.story}</p>
              <p className="mt-4 text-green-700 font-medium">
                Impact: {story.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl shadow-2xl p-12 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center tracking-wide">
          How It Works
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-green-700 rounded-full p-3">
                {step.icon}
              </div>
              <p className="text-2xl font-semibold tracking-wide">
                {step.title}
              </p>
              <p className="text-center max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {showModal && selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-4 md:p-8 max-w-lg md:max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
            <div className="flex justify-between items-center mb-4 md:mb-8 border-b pb-4">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                  {selectedProgram.title}
                </h2>
                <p className="text-green-600">{selectedProgram.type}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <XMarkIcon className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Personal Information Section */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Full Name
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Email Address
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Phone Number
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Address
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300"
                      placeholder="Enter your complete address"
                    />
                  </div>
                </div>

                {/* Experience Section */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Relevant Experience
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300 resize-none"
                      placeholder="Tell us about your relevant experience..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Why are you interested?
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      name="why_interested"
                      value={formData.why_interested}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300 resize-none"
                      placeholder="Why do you want to join this program?"
                    />
                  </div>
                </div>
              </div>

              {/* Program Details Summary */}
              <div className="mt-4 md:mt-6 bg-green-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Program Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Investment Required:</p>
                    <p className="font-medium text-gray-800">
                      {selectedProgram.investment}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Location:</p>
                    <p className="font-medium text-gray-800">
                      {selectedProgram.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 md:pt-6">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Submit Application
                </button>
                <p className="text-center text-xs md:text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
