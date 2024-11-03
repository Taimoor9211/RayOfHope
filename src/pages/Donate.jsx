// src/pages/Donate.js
import { useState, useEffect } from "react";
import image7 from "../assets/image7.avif";
import {
  UserGroupIcon,
  CurrencyRupeeIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const impactMetrics = [
    {
      amount: "Rs. 1,000",
      impact: "Provides food rations for one family for a week",
    },
    {
      amount: "Rs. 5,000",
      impact: "Sponsors vocational training for one woman",
    },
    {
      amount: "Rs. 10,000",
      impact: "Supports education expenses for two children",
    },
    {
      amount: "Rs. 25,000",
      impact: "Helps establish a micro-business",
    },
  ];

  return (
    <div className="space-y-12 p-6 lg:p-12">
      {/* Hero Section */}
      <div
        className={`rounded-3xl overflow-hidden transition-transform duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="rounded-3xl overflow-hidden relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${image7})`, // replace with your image path
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-70"></div>
          <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8 relative mt-20 z-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Make a Difference Today
              </h1>
              <p className="mt-6 text-xl text-purple-100 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                Your donation helps us empower women and support families in
                need. Every contribution creates lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Make a Donation
          </h2>

          {/* Donation Type */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Donation Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setDonationType("one-time")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  donationType === "one-time"
                    ? "bg-rose-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  donationType === "monthly"
                    ? "bg-rose-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Select Amount
            </label>
            <div className="grid grid-cols-2 gap-4">
              {["1000", "2000", "5000", "10000"].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    donationAmount === amount
                      ? "bg-rose-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Rs. {amount}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="number"
                placeholder="Other Amount"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              />
            </div>
          </div>

          <button className="mt-6 w-full bg-rose-600 text-white rounded-md px-4 py-3 font-medium hover:bg-rose-700 transition-colors">
            Proceed to Payment
          </button>
        </div>

        {/* Impact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Your Impact
            </h3>
            <div className="space-y-4">
              {impactMetrics.map((metric) => (
                <div
                  key={metric.amount}
                  className="flex items-start p-4 bg-rose-50 rounded-lg"
                >
                  <span className="h-6 w-6 text-rose-600 mr-4 flex-shrink-0">
                    ❤️
                  </span>
                  <div>
                    <div className="font-medium text-gray-900">
                      {metric.amount}
                    </div>
                    <div className="text-gray-600">{metric.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Other Ways to Help
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Volunteer",
                  description: "Join our community of dedicated volunteers",
                },
                {
                  title: "Corporate Partnerships",
                  description: "Partner with us for sustainable impact",
                },
                {
                  title: "In-kind Donations",
                  description: "Donate supplies and materials",
                },
              ].map((way) => (
                <div
                  key={way.title}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-rose-500 transition-colors cursor-pointer"
                >
                  <div>
                    <div className="font-medium text-gray-900">{way.title}</div>
                    <div className="text-gray-600">{way.description}</div>
                  </div>
                  <span className="h-5 w-5 text-rose-600">➡️</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-rose-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Your Support Makes a Difference
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              label: "Lives Impacted",
              stat: "10,000+",
              icon: (
                <UserGroupIcon className="h-12 w-12 text-rose-400 mx-auto mb-4" />
              ),
            },
            {
              label: "Donations Received",
              stat: "Rs. 2 Crore+",
              icon: (
                <CurrencyRupeeIcon className="h-12 w-12 text-rose-400 mx-auto mb-4" />
              ),
            },
            {
              label: "Projects Completed",
              stat: "150+",
              icon: (
                <HeartIcon className="h-12 w-12 text-rose-400 mx-auto mb-4" />
              ),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              {item.icon}
              <div className="text-2xl font-bold text-gray-900">
                {item.stat}
              </div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
