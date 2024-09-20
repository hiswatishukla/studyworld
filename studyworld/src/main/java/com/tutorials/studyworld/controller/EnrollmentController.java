package com.tutorials.studyworld.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.tutorials.studyworld.model.Enrollment;
import com.tutorials.studyworld.service.EnrollmentService;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    // Get all enrollments
    @GetMapping
    public List<Enrollment> getAllEnrollments() {
        return enrollmentService.getAllEnrollments();
    }

    // Get enrollment by ID
    @GetMapping("/{id}")
    public Enrollment getEnrollmentById(@PathVariable Long id) {
        return enrollmentService.getEnrollmentById(id);
    }

    // Get enrollments by user ID
    @GetMapping("/user/{userId}")
    public List<Enrollment> getEnrollmentsByUserId(@PathVariable Long userId) {
        return enrollmentService.getEnrollmentsByUserId(userId);
    }

    // Get enrollments by course ID
    @GetMapping("/course/{courseId}")
    public List<Enrollment> getEnrollmentsByCourseId(@PathVariable Long courseId) {
        return enrollmentService.getEnrollmentsByCourseId(courseId);
    }

    // Enroll a user in a course
    @PostMapping("/user/{userId}/course/{courseId}")
    public Enrollment enrollUserInCourse(@PathVariable Long userId, @PathVariable Long courseId) {
        return enrollmentService.enrollUserInCourse(userId, courseId);
    }

    // Unenroll a user from a course
    @DeleteMapping("/{id}")
    public void unenrollUserFromCourse(@PathVariable Long id) {
        enrollmentService.unenrollUserFromCourse(id);
    }
}
