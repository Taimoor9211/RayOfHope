// src/pages/Contact.js
import { useEffect, useState } from "react";
import image13 from "../assets/image13.avif";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

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
            backgroundImage: `url(${image13})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-40"></div>
          <div className="relative mt-20 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Get in Touch
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                We're here to help. Reach out to us with any questions or
                concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            title: "Phone",
            details: ["+92 370 9171729", "+92 21 34567890"],
            action: "Call us",
          },
          {
            title: "Email",
            details: ["rayofhope@gmail.com", "rayofhope2@gmail.com"],
            action: "Email us",
          },
          {
            title: "Office",
            details: ["123 Main Street", "Sargodha, Pakistan"],
            action: "Get directions",
          },
        ].map((contact) => (
          <div
            key={contact.title}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {contact.title}
            </h3>
            {contact.details.map((detail) => (
              <p key={detail} className="mt-2 text-gray-600">
                {detail}
              </p>
            ))}
            <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
              {contact.action} →
            </button>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md px-4 py-3 font-medium hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How can I volunteer?",
                answer:
                  "You can apply through our volunteer page or contact us directly.",
              },
              {
                question: "How are donations used?",
                answer:
                  "Donations directly support our programs and operational costs.",
              },
              {
                question: "Do you offer internships?",
                answer: "Yes, we offer internships throughout the year.",
              },
              {
                question: "How can organizations partner with you?",
                answer: "Contact us to discuss partnership opportunities.",
              },
            ].map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Chat */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors">
          Live Chat
        </button>
      </div>
    </div>
  );
}
