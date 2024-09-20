package com.tutorials.studyworld.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tutorials.studyworld.model.Enrollment;
import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {

    // Find enrollments by user ID
    List<Enrollment> findByUserId(Long userId);

    // Find enrollments by course ID
    List<Enrollment> findByCourseId(Long courseId);
}
