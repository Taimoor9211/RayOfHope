// src/pages/RationProgram.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image5 from "../assets/image5.avif";

export default function RationProgram() {
  const [activeTab, setActiveTab] = useState("eligibility");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const rationItems = [
    { name: "Rice", quantity: "5kg", households: 1000 },
    { name: "Flour", quantity: "5kg", households: 1000 },
    { name: "Pulses", quantity: "2kg", households: 1000 },
    { name: "Sugar", quantity: "2kg", households: 1000 },
    { name: "Cooking Oil", quantity: "3L", households: 1000 },
    { name: "Tea", quantity: "500g", households: 1000 },
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
            backgroundImage: `url(${image5})`, // Ensure you have the correct image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-50"></div>

          {/* Content Wrapper */}
          <div className="relative max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8 z-10">
            {" "}
            {/* Added z-10 for layering */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl drop-shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                {" "}
                {/* Added drop-shadow for better readability */}
                Monthly Ration Program
              </h1>
              <p className="mt-6 text-xl text-green-100 max-w-2xl mx-auto drop-shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                Supporting families in need with essential food supplies. Help
                us ensure no family goes hungry.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-100 hover:text-green-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                  Register for Ration
                </button>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:from-green-600 hover:to-green-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                  Donate to Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Program Stats */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {[
          {
            stat: "1,000+",
            label: "Families Supported",
          },
          {
            stat: "5,000+",
            label: "Monthly Rations",
          },
          {
            stat: "12",
            label: "Distribution Centers",
          },
          {
            stat: "500+",
            label: "Regular Donors",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <div className="h-12 w-12 text-green-600 mx-auto font-bold">
              {item.label === "Families Supported"
                ? "👨‍👩‍👧‍👦"
                : item.label === "Monthly Rations"
                ? "🛒"
                : item.label === "Distribution Centers"
                ? "📍"
                : item.label === "Regular Donors"
                ? "❤️"
                : ""}
            </div>
            <div className="mt-4 text-3xl font-bold text-gray-900">
              {item.stat}
            </div>
            <div className="mt-2 text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Ration Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Monthly Ration Package
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {rationItems.map((item) => (
            <div
              key={item.name}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Quantity:</span>
                  <span className="ml-2">{item.quantity}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Beneficiaries:</span>
                  <span className="ml-2">{item.households} households</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Information Tabs */}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {[
              { id: "eligibility", label: "Eligibility" },
              { id: "process", label: "Distribution Process" },
              { id: "locations", label: "Distribution Centers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-8 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-b-2 border-green-500 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-8">
          {activeTab === "eligibility" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {[
                  "Monthly household income below poverty line",
                  "Resident of program service area",
                  "Valid identification documents",
                  "No other source of regular income",
                ].map((criterion) => (
                  <li key={criterion} className="flex items-start">
                    <span className="h-6 w-6 text-green-500 mr-2 flex-shrink-0">
                      ✔️
                    </span>
                    <span className="text-gray-600">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Distribution Process
              </h3>
              <p className="text-gray-600">
                Our distribution process is designed to ensure that aid reaches
                those in need efficiently and effectively. Here’s how it works:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-gray-600">
                {[
                  "Application Submission: Eligible individuals submit their applications online or in-person at designated locations.",
                  "Verification: Submitted applications are reviewed by our team to verify eligibility criteria.",
                  "Notification: Applicants are notified of their application status via email or SMS.",
                  "Distribution: Successful applicants are invited to the distribution centers on specified dates.",
                  "Feedback: We encourage recipients to provide feedback to continuously improve our services.",
                ].map((step) => (
                  <li key={step} className="">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {activeTab === "locations" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Distribution Centers
              </h3>
              <p className="text-gray-600">
                Our distribution centers are strategically located to serve the
                communities most in need. Here are some of our main locations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {[
                  "Center 1: Address 1, City 1",
                  "Center 2: Address 2, City 2",
                  "Center 3: Address 3, City 3",
                  "Center 4: Address 4, City 4",
                ].map((location) => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
