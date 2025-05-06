import { useState } from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'all',
    'web-development',
    'data-science',
    'design',
    'business',
    'marketing',
  ];

  const levels = ['all', 'beginner', 'intermediate', 'advanced'];

  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn full-stack web development from scratch',
      price: 99.99,
      duration: '12 weeks',
      level: 'beginner',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Master the basics of data science and analytics',
      price: 149.99,
      duration: '16 weeks',
      level: 'intermediate',
      category: 'data-science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      description: 'Create beautiful and functional user interfaces',
      price: 79.99,
      duration: '8 weeks',
      level: 'all',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      description: 'Learn modern digital marketing techniques',
      price: 89.99,
      duration: '10 weeks',
      level: 'intermediate',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      title: 'Business Analytics',
      description: 'Make data-driven business decisions',
      price: 129.99,
      duration: '14 weeks',
      level: 'advanced',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 6,
      title: 'Advanced JavaScript',
      description: 'Deep dive into modern JavaScript concepts',
      price: 69.99,
      duration: '6 weeks',
      level: 'advanced',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const categoryMatch =
      selectedCategory === 'all' || course.category === selectedCategory;
    const levelMatch =
      selectedLevel === 'all' || course.level === selectedLevel;
    const searchMatch = 
      searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && levelMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Courses
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Browse our comprehensive collection of courses designed to help you advance your career
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Courses
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                id="level"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="mt-12">
          {filteredCourses.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900">No courses found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses; 
