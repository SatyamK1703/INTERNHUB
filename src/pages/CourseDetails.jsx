import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);

  // In a real application, this would be fetched from an API
  const course = {
    id: parseInt(id),
    title: 'Web Development Bootcamp',
    description:
      'Learn full-stack web development from scratch. This comprehensive course covers everything from HTML and CSS to advanced JavaScript, React, Node.js, and database management.',
    price: 99.99,
    duration: '12 weeks',
    level: 'Beginner',
    instructor: 'John Doe',
    instructorBio:
      'John is a senior web developer with over 10 years of experience in building scalable web applications.',
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Web Development',
        topics: [
          'Understanding the web',
          'HTML basics',
          'CSS fundamentals',
          'Responsive design principles',
        ],
      },
      {
        week: 2,
        title: 'JavaScript Fundamentals',
        topics: [
          'Variables and data types',
          'Functions and scope',
          'DOM manipulation',
          'Event handling',
        ],
      },
      {
        week: 3,
        title: 'Advanced JavaScript',
        topics: [
          'ES6+ features',
          'Asynchronous programming',
          'API integration',
          'Error handling',
        ],
      },
    ],
    requirements: [
      'Basic computer knowledge',
      'Dedication to learn',
      'A computer with internet access',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In a real application, this would handle payment processing
    alert('Enrollment successful! Redirecting to payment...');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Course Header */}
          <div className="relative h-96">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl">{course.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                  <p className="text-gray-600">{course.description}</p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Curriculum</h2>
                  <div className="space-y-6">
                    {course.curriculum.map((week) => (
                      <div key={week.week} className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Week {week.week}: {week.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {week.topics.map((topic, index) => (
                            <li key={index} className="text-gray-600">
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2">
                    {course.requirements.map((requirement, index) => (
                      <li key={index} className="text-gray-600">
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      ${course.price}
                    </div>
                    <div className="text-gray-500 mb-4">
                      {course.duration} • {course.level}
                    </div>
                    {!isEnrolled ? (
                      <button
                        onClick={handleEnroll}
                        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
                      >
                        Enroll Now
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium cursor-not-allowed"
                      >
                        Enrolled
                      </button>
                    )}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Instructor</h3>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                      <div>
                        <div className="font-medium">{course.instructor}</div>
                        <div className="text-sm text-gray-500">
                          {course.instructorBio}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lifetime access
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Certificate of completion
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Downloadable resources
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Q&A support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; 