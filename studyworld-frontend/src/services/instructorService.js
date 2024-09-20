import axios from 'axios';

const API_URL = 'http://localhost:8080/api/instructors';

const instructorService = {
    // Fetch all instructors
    getAllInstructors: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    // Create a new instructor
    createInstructor: async (instructor) => {
        await axios.post(API_URL, instructor);
    },

    // Get an instructor by ID
    getInstructorById: async (instructorId) => {
        const response = await axios.get(`${API_URL}/${instructorId}`);
        return response.data;
    },

    // Update an existing instructor
    updateInstructor: async (instructorId, updatedInstructor) => {
        await axios.put(`${API_URL}/${instructorId}`, updatedInstructor);
    },

    // Delete an instructor
    deleteInstructor: async (instructorId) => {
        await axios.delete(`${API_URL}/${instructorId}`);
    }
};

export default instructorService;
