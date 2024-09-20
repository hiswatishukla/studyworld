package com.tutorials.studyworld.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tutorials.studyworld.model.Lesson;
import java.util.List;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

    // Find lessons by course ID
    List<Lesson> findByCourseId(Long courseId);
}
