import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

// The Courses component displays online courses or certifications in a card-based layout.
const Courses = () => {
  // Placeholder data for courses. You can replace this with your actual courses.
  const courses = [
    {
      title: "Complete Web Development Course With Programming Hero",
      provider: "Programming Hero",
      period: "January 2025 - July 2025",
      description: "This comprehensive course focused on building modern, dynamic web applications with a strong emphasis on React.js. It provided hands-on experience in full-stack development and project-based learning.",
    },
    {
      title: "Data Science Certificate Program",
      provider: "Ostad",
      period: "June 2024 - November 2024",
      description: "This certificate program provided a strong foundation in data science, from basic Python and data analysis to core concepts in machine learning.",
    },
  ];

  return (
    <section id="courses" className="w-full flex justify-center pt-7 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[91.666667%]">
        <div className="flex items-center justify-center mb-12">
          <FaBookOpen className="text-3xl text-accent mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-base-200 shadow-xl p-6 rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                {course.title}
              </h3>
              <p className="text-base-content text-lg mb-2">
                <span className="font-medium text-accent">Provider:</span> {course.provider}
              </p>
              <p className="text-base-content text-lg mb-2">
                <span className="font-medium text-accent">Period:</span> {course.period}
              </p>
              <p className="text-base-content text-sm sm:text-base">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
