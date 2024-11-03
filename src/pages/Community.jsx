import { useState, useEffect } from "react";
import image4 from "../assets/image4.avif";
import image10 from "../assets/image10.avif"; // Ensure this import is present
import image11 from "../assets/image11.avif";
import image12 from "../assets/image12.avif";

function Community() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const communityEvents = [
    {
      id: 1,
      title: "Monthly Gatherings",
      description: "Join us for regular community meetups",
    },
    {
      id: 2,
      title: "Volunteer Programs",
      description: "Make a difference in your community",
    },
    { id: 3, title: "Skill Workshops", description: "Learn and grow together" },
    {
      id: 4,
      title: "Fundraising Events",
      description: "Support our community initiatives",
    },
  ];

  const galleryImages = [
    {
      src: image10,
      alt: "Community Meeting",
      description: "Monthly community gathering",
    },
    {
      src: image11,
      alt: "Outdoor Activity",
      description: "Team building exercise",
    },
    {
      src: image12,
      alt: "Volunteer Work",
      description: "Community service day",
    },
  ];

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className={`rounded-3xl overflow-hidden transition-transform duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="rounded-3xl overflow-hidden relative h-[500px]"
          style={{
            backgroundImage: `url(${image4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-500 opacity-60"></div>
          <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8 relative mt-20 z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Welcome to Our Community
              </h1>
              <p className="mt-6 text-lg text-purple-200 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                Join us in building a stronger, more connected community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12 text-purple-700">
          Community Activities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communityEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-600">
                {event.title}
              </h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
            Become Part of Our Community
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "message"].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Enter your ${field}`}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Enter your ${field}`}
                    required
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
            >
              Join Our Community
            </button>
          </form>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12 text-purple-700">
          Community Gallery
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white text-center px-4">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl mx-4 relative">
            <button
              className="absolute -top-10 right-0 text-white text-xl hover:text-purple-400 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="rounded-lg max-h-[80vh] w-auto shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Community;
