// src/pages/Education.js
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import image2 from "../assets/image2.avif";
import {
  BookOpenIcon,
  AcademicCapIcon,
  ClipboardDocumentIcon,
  ClockIcon,
} from "@heroicons/react/24/outline"; // Import Heroicons

export default function Education() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      title: "Primary Education",
      level: "Basic",
      duration: "12 months",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      description:
        "Foundational education program for children aged 6-12 years.",
    },
    {
      title: "Secondary Education",
      level: "Intermediate",
      duration: "24 months",
      subjects: [
        "Advanced Math",
        "Physics",
        "Chemistry",
        "Biology",
        "Literature",
      ],
      description:
        "Comprehensive education program for students aged 13-16 years.",
    },
    {
      title: "Digital Literacy",
      level: "All Levels",
      duration: "6 months",
      subjects: [
        "Computer Basics",
        "Internet Usage",
        "Digital Tools",
        "Online Safety",
      ],
      description:
        "Essential computer and internet skills for the digital age.",
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
            backgroundImage: `url(${image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-50"></div>
          <div className="relative mt-20 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                Free Education Program
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-2xl mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105">
                Providing quality education to underprivileged children. Our
                program focuses on comprehensive learning and personal
                development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Features */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Quality Curriculum",
            description:
              "Structured learning programs aligned with national standards",
            icon: (
              <BookOpenIcon className="text-indigo-600 h-16 w-16 mx-auto" />
            ),
          },
          {
            title: "Expert Teachers",
            description:
              "Dedicated educators with years of teaching experience",
            icon: (
              <AcademicCapIcon className="text-indigo-600 h-16 w-16 mx-auto" />
            ),
          },
          {
            title: "Free Resources",
            description: "All study materials and supplies provided at no cost",
            icon: (
              <ClipboardDocumentIcon className="text-indigo-600 h-16 w-16 mx-auto" />
            ),
          },
          {
            title: "Flexible Schedule",
            description:
              "Morning and afternoon classes to accommodate all students",
            icon: <ClockIcon className="text-indigo-600 h-16 w-16 mx-auto" />,
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
          >
            {feature.icon} {/* Render the icon */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Course Catalog */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Available Courses
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="border border-gray-200 rounded-xl p-6 hover:border-indigo-500 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Level:</span>
                  <span className="ml-2">{course.level}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Duration:</span>
                  <span className="ml-2">{course.duration}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{course.description}</p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900">Subjects:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-6 w-full bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 transition-colors">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Student Portal Preview */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Student Portal
        </h2>
        <Tab.Group onChange={setSelectedTab}>
          <Tab.List className="flex space-x-1 rounded-xl bg-indigo-100 p-1">
            {["Dashboard", "Learning Materials", "Progress", "Support"].map(
              (category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                    ${
                      selected
                        ? "bg-white text-indigo-700 shadow"
                        : "text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-700"
                    }`
                  }
                >
                  {category}
                </Tab>
              )
            )}
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Student Dashboard
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">
                    Upcoming Classes
                  </h4>
                  <ul className="mt-2 space-y-2">
                    <li className="text-gray-600">
                      Mathematics - Monday 9:00 AM
                    </li>
                    <li className="text-gray-600">
                      Science - Tuesday 10:30 AM
                    </li>
                    <li className="text-gray-600">
                      English - Wednesday 9:00 AM
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900">
                    Recent Activities
                  </h4>
                  <ul className="mt-2 space-y-2">
                    <li className="text-gray-600">Completed Math Quiz - 85%</li>
                    <li className="text-gray-600">Submitted Science Project</li>
                    <li className="text-gray-600">Attended English Class</li>
                  </ul>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Learning Materials
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Mathematics", "Science", "English"].map((subject) => (
                    <div key={subject} className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900">{subject}</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="text-gray-600">📚 Textbook</li>
                        <li className="text-gray-600">📝 Worksheets</li>
                        <li className="text-gray-600">🎥 Video Lectures</li>
                        <li className="text-gray-600">📊 Practice Tests</li>
                      </ul>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 transition-colors">
                  Download All Materials
                </button>
              </div>
            </Tab.Panel>

            <Tab.Panel className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Progress Tracking
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">
                      Overall Performance
                    </h4>
                    <div className="mt-4 space-y-4">
                      {[
                        { subject: "Mathematics", progress: 85 },
                        { subject: "Science", progress: 78 },
                        { subject: "English", progress: 92 },
                      ].map((item) => (
                        <div key={item.subject}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-600">
                              {item.subject}
                            </span>
                            <span className="text-gray-900">
                              {item.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">Achievements</h4>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🏆</span>
                        <span className="text-gray-600">
                          Perfect Attendance - March
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🌟</span>
                        <span className="text-gray-600">Top Math Student</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">📚</span>
                        <span className="text-gray-600">
                          Reading Challenge Winner
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Support Center
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">
                      Contact Teachers
                    </h4>
                    <div className="mt-4 space-y-4">
                      {[
                        { name: "Mrs. Smith", subject: "Mathematics" },
                        { name: "Mr. Johnson", subject: "Science" },
                        { name: "Ms. Davis", subject: "English" },
                      ].map((teacher) => (
                        <div
                          key={teacher.name}
                          className="flex justify-between items-center"
                        >
                          <div>
                            <p className="text-gray-900">{teacher.name}</p>
                            <p className="text-gray-600 text-sm">
                              {teacher.subject}
                            </p>
                          </div>
                          <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-200 transition-colors">
                            Message
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">
                      Help Resources
                    </h4>
                    <div className="mt-4 space-y-2">
                      <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50">
                        📋 FAQs
                      </button>
                      <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50">
                        📚 Study Guidelines
                      </button>
                      <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50">
                        🎥 Tutorial Videos
                      </button>
                      <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-50">
                        📞 Technical Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Registration CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Learning?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join our free education program today and take the first step towards
          a brighter future.
        </p>
        <button className="bg-white text-indigo-600 rounded-md px-8 py-3 font-semibold hover:bg-indigo-50 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}
