import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const Home = () => {
  const [courses, setCourses] = useState([]);

  // Fetch courses from the backend (replace with your actual API endpoint)
  useEffect(() => {
    axios.get('/api/courses/upcoming') // Replace this with your actual endpoint
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="home">
      <h2>Welcome to StudyWorld</h2>
      <p>Check out our upcoming courses below!</p>
      <div className="courses-container">
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h3>{course.title}</h3>
              </div>
              <div className="course-body">
                <p>{course.description}</p>
              </div>
              <div className="course-footer">
                <p><strong>Start Date:</strong> {new Date(course.startDate).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No upcoming courses at the moment. Please check back later!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
