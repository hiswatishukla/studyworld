package com.tutorials.studyworld.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.tutorials.studyworld.model.Lesson;
import com.tutorials.studyworld.service.LessonService;

import java.util.List;

@RestController
@RequestMapping("/api/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    // Get all lessons
    @GetMapping
    public List<Lesson> getAllLessons() {
        return lessonService.getAllLessons();
    }

    // Get a lesson by ID
    @GetMapping("/{id}")
    public Lesson getLessonById(@PathVariable Long id) {
        return lessonService.getLessonById(id);
    }

    // Get lessons by course ID
    @GetMapping("/course/{courseId}")
    public List<Lesson> getLessonsByCourseId(@PathVariable Long courseId) {
        return lessonService.getLessonsByCourseId(courseId);
    }

    // Create a new lesson for a course
    @PostMapping("/course/{courseId}")
    public Lesson createLesson(@PathVariable Long courseId, @RequestBody Lesson lesson) {
        return lessonService.createLesson(courseId, lesson);
    }

    // Update a lesson
    @PutMapping("/{id}")
    public Lesson updateLesson(@PathVariable Long id, @RequestBody Lesson lessonDetails) {
        return lessonService.updateLesson(id, lessonDetails);
    }

    // Delete a lesson
    @DeleteMapping("/{id}")
    public void deleteLesson(@PathVariable Long id) {
        lessonService.deleteLesson(id);
    }
}
