import axios from 'axios';

const API_URL = 'http://localhost:8080/api/enrollments';

const enrollmentService = {
    // Fetch all enrollments
    getAllEnrollments: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    // Enroll a user in a course
    enrollUserInCourse: async (userId, courseId) => {
        const response = await axios.post(`${API_URL}/user/${userId}/course/${courseId}`);
        return response.data;
    },

    // Get enrollments by user ID
    getEnrollmentsByUserId: async (userId) => {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    },

    // Get enrollments by course ID
    getEnrollmentsByCourseId: async (courseId) => {
        const response = await axios.get(`${API_URL}/course/${courseId}`);
        return response.data;
    },

    // Delete an enrollment
    deleteEnrollment: async (enrollmentId) => {
        await axios.delete(`${API_URL}/${enrollmentId}`);
    }
};

export default enrollmentService;
