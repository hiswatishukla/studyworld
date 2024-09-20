import axios from 'axios';

const API_URL = 'http://localhost:8080/api/courses';

const courseService = {
    // Fetch all courses
    getAllCourses: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    // Create a new course
    createCourse: async (course) => {
        await axios.post(API_URL, course);
    },

    // Get a course by ID
    getCourseById: async (courseId) => {
        const response = await axios.get(`${API_URL}/${courseId}`);
        return response.data;
    },

    // Update an existing course
    updateCourse: async (courseId, updatedCourse) => {
        await axios.put(`${API_URL}/${courseId}`, updatedCourse);
    },

    // Delete a course
    deleteCourse: async (courseId) => {
        await axios.delete(`${API_URL}/${courseId}`);
    }
};

export default courseService;
