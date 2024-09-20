import React, { useState, useEffect } from 'react';
import instructorService from '../services/instructorService';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [newInstructor, setNewInstructor] = useState({ name: '', email: '', bio: '' });

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = async () => {
        const response = await instructorService.getAllInstructors();
        setInstructors(response);
    };

    const handleChange = (e) => {
        setNewInstructor({ ...newInstructor, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await instructorService.createInstructor(newInstructor);
        fetchInstructors();
        setNewInstructor({ name: '', email: '', bio: '' });
    };

    return (
        <div>
            <h2>Instructors</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={newInstructor.name} onChange={handleChange} placeholder="Name" required />
                <input name="email" value={newInstructor.email} onChange={handleChange} placeholder="Email" required />
                <textarea name="bio" value={newInstructor.bio} onChange={handleChange} placeholder="Bio" required />
                <button type="submit">Add Instructor</button>
            </form>
            <ul>
                {instructors.map((instructor) => (
                    <li key={instructor.id}>{instructor.name} - {instructor.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Instructors;
