package com.tutorials.studyworld.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tutorials.studyworld.model.Enrollment;
import com.tutorials.studyworld.model.User;
import com.tutorials.studyworld.model.Course;
import com.tutorials.studyworld.repository.EnrollmentRepository;
import com.tutorials.studyworld.repository.UserRepository;
import com.tutorials.studyworld.repository.CourseRepository;

import java.util.List;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Enrollment getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id).orElse(null);
    }

    public List<Enrollment> getEnrollmentsByUserId(Long userId) {
        return enrollmentRepository.findByUserId(userId);
    }

    public List<Enrollment> getEnrollmentsByCourseId(Long courseId) {
        return enrollmentRepository.findByCourseId(courseId);
    }

    public Enrollment enrollUserInCourse(Long userId, Long courseId) {
        User user = userRepository.findById(userId).orElse(null);
        Course course = courseRepository.findById(courseId).orElse(null);
        if (user != null && course != null) {
            Enrollment enrollment = new Enrollment();
            enrollment.setUser(user);
            enrollment.setCourse(course);
            return enrollmentRepository.save(enrollment);
        }
        return null;
    }

    public void unenrollUserFromCourse(Long id) {
        enrollmentRepository.deleteById(id);
    }
}
