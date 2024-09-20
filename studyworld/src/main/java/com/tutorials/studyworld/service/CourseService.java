package com.tutorials.studyworld.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tutorials.studyworld.model.Course;
import com.tutorials.studyworld.repository.CourseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(Long id, Course courseDetails) {
        Course course = courseRepository.findById(id).orElse(null);
        if (course != null) {
            course.setTitle(courseDetails.getTitle());
            course.setDescription(courseDetails.getDescription());
            // Add any additional fields you want to update
            return courseRepository.save(course);
        }
        return null;
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
