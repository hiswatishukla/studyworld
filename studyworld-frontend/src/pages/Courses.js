import React, { useState, useEffect } from 'react';
import courseService from '../services/courseService';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        const response = await courseService.getAllCourses();
        setCourses(response);
    };

    const handleChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await courseService.createCourse(newCourse);
        fetchCourses();
        setNewCourse({ title: '', description: '' });
    };

    return (
        <div>
            <h2>Courses</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" value={newCourse.title} onChange={handleChange} placeholder="Title" required />
                <textarea name="description" value={newCourse.description} onChange={handleChange} placeholder="Description" required />
                <button type="submit">Add Course</button>
            </form>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.title} - {course.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
