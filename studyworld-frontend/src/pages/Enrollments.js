import React, { useState, useEffect } from 'react';
import enrollmentService from '../services/enrollmentService';

const Enrollments = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [userId, setUserId] = useState('');
    const [courseId, setCourseId] = useState('');

    useEffect(() => {
        fetchEnrollments();
    }, []);

    const fetchEnrollments = async () => {
        const response = await enrollmentService.getAllEnrollments();
        setEnrollments(response);
    };

    const handleEnroll = async () => {
        await enrollmentService.enrollUserInCourse(userId, courseId);
        fetchEnrollments();
        setUserId('');
        setCourseId('');
    };

    return (
        <div>
            <h2>Enrollments</h2>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
            <input value={courseId} onChange={(e) => setCourseId(e.target.value)} placeholder="Course ID" required />
            <button onClick={handleEnroll}>Enroll User</button>
            <ul>
                {enrollments.map((enrollment) => (
                    <li key={enrollment.id}>{enrollment.user.name} enrolled in {enrollment.course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Enrollments;
