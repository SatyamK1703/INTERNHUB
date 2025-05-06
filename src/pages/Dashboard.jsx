import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      progress: 75,
      lastAccessed: '2 days ago',
      nextLesson: 'React Hooks and State Management',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 30,
      lastAccessed: '1 week ago',
      nextLesson: 'Data Visualization with Python',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: 'January 2024',
    completedCourses: 3,
    certificates: 2,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                {userProfile.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {userProfile.name}
                </h2>
                <p className="text-sm text-gray-500">{userProfile.email}</p>
                <p className="text-sm text-gray-500">
                  Member since {userProfile.joinDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('courses')}
                className={`${
                  activeTab === 'courses'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                My Courses
              </button>
              <button
                onClick={() => setActiveTab('progress')}
                className={`${
                  activeTab === 'progress'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                Progress
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`${
                  activeTab === 'certificates'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                Certificates
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`${
                  activeTab === 'settings'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
              >
                Settings
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Enrolled Courses
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <div className="relative h-48">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          {course.title}
                        </h4>
                        <div className="mt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Progress
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">
                            Last accessed: {course.lastAccessed}
                          </p>
                          <p className="text-sm text-gray-500">
                            Next lesson: {course.nextLesson}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Link
                            to={`/courses/${course.id}`}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Continue Learning
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Learning Progress
                </h3>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    <li className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Completed Courses
                          </p>
                          <p className="text-sm text-gray-500">
                            {userProfile.completedCourses} courses completed
                          </p>
                        </div>
                        <div className="text-sm text-gray-500">
                          {userProfile.completedCourses} certificates earned
                        </div>
                      </div>
                    </li>
                    <li className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Current Streak
                          </p>
                          <p className="text-sm text-gray-500">5 days</p>
                        </div>
                        <div className="text-sm text-gray-500">
                          Best: 15 days
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Certificates
                </h3>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    <li className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Web Development Bootcamp
                          </p>
                          <p className="text-sm text-gray-500">
                            Completed on January 15, 2024
                          </p>
                        </div>
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          View Certificate
                        </button>
                      </div>
                    </li>
                    <li className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Data Science Fundamentals
                          </p>
                          <p className="text-sm text-gray-500">
                            Completed on February 1, 2024
                          </p>
                        </div>
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          View Certificate
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Account Settings
                </h3>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <div className="px-6 py-4">
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          defaultValue={userProfile.name}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          defaultValue={userProfile.email}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 