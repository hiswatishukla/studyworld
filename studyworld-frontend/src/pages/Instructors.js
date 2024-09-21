import React, { useState, useEffect } from 'react';
import instructorService from '../services/instructorService';
import './Instructors.css'; // Adding CSS for styling

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [newInstructor, setNewInstructor] = useState({ name: '', email: '', bio: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = async () => {
        try {
            const response = await instructorService.getAllInstructors();
            setInstructors(response);
        } catch (error) {
            console.error('Failed to fetch instructors:', error);
        }
    };

    const handleChange = (e) => {
        setNewInstructor({ ...newInstructor, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newInstructor.name || !newInstructor.email || !newInstructor.bio) {
            setMessage('Please fill all the fields.');
            return;
        }
        try {
            await instructorService.createInstructor(newInstructor);
            setMessage('Instructor added successfully!');
            fetchInstructors();
            setNewInstructor({ name: '', email: '', bio: '' });
        } catch (error) {
            console.error('Error adding instructor:', error);
            setMessage('Failed to add instructor.');
        }
    };

    return (
        <div className="instructors-container">
            <h2>Instructors</h2>
            <form onSubmit={handleSubmit} className="instructor-form">
                <input
                    type="text"
                    name="name"
                    value={newInstructor.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={newInstructor.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <textarea
                    name="bio"
                    value={newInstructor.bio}
                    onChange={handleChange}
                    placeholder="Bio"
                    required
                />
                <button type="submit">Add Instructor</button>
            </form>
            {message && <p className="message">{message}</p>}
            <ul className="instructor-list">
                {instructors.map((instructor) => (
                    <li key={instructor.id}>
                        <strong>{instructor.name}</strong> - {instructor.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Instructors;
