package com.tutorials.studyworld.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tutorials.studyworld.model.Lesson;
import com.tutorials.studyworld.model.Course;
import com.tutorials.studyworld.repository.LessonRepository;
import com.tutorials.studyworld.repository.CourseRepository;

import java.util.List;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    public Lesson getLessonById(Long id) {
        return lessonRepository.findById(id).orElse(null);
    }

    public List<Lesson> getLessonsByCourseId(Long courseId) {
        return lessonRepository.findByCourseId(courseId);
    }

    public Lesson createLesson(Long courseId, Lesson lesson) {
        Course course = courseRepository.findById(courseId).orElse(null);
        if (course != null) {
            lesson.setCourse(course);
            return lessonRepository.save(lesson);
        }
        return null;
    }

    public Lesson updateLesson(Long id, Lesson lessonDetails) {
        Lesson lesson = lessonRepository.findById(id).orElse(null);
        if (lesson != null) {
            lesson.setTitle(lessonDetails.getTitle());
            lesson.setContent(lessonDetails.getContent());
            return lessonRepository.save(lesson);
        }
        return null;
    }

    public void deleteLesson(Long id) {
        lessonRepository.deleteById(id);
    }
}
