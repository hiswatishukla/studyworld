package com.tutorials.studyworld.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.tutorials.studyworld.model.Course;
import com.tutorials.studyworld.model.Instructor;
import com.tutorials.studyworld.service.CourseService;
import com.tutorials.studyworld.service.InstructorService;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private InstructorService instructorService;

    // Get all courses
    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    // Get a course by ID
    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    // Create a new course
    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseService.createCourse(course);
    }

    // Update a course
    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable Long id, @RequestBody Course courseDetails) {
        return courseService.updateCourse(id, courseDetails);
    }

    // Delete a course
    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
    }

    // Get courses by instructor
    @GetMapping("/instructor/{instructorId}")
    public List<Course> getCoursesByInstructor(@PathVariable Long instructorId) {
        Instructor instructor = instructorService.getInstructorById(instructorId);
        return instructor.getCourses();
    }
}
