package com.tutorials.studyworld.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tutorials.studyworld.model.Course;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    // Find all courses by the instructor's ID
    List<Course> findByInstructorId(Long instructorId);

    // Find all courses with a specific title (case-insensitive)
    List<Course> findByTitleIgnoreCase(String title);

    // Find all courses containing a keyword in the title (case-insensitive)
    List<Course> findByTitleContainingIgnoreCase(String keyword);

    // Find courses by description containing a specific keyword (case-insensitive)
    List<Course> findByDescriptionContainingIgnoreCase(String keyword);

    // Find courses where the description length exceeds a certain number of characters
    @Query("SELECT c FROM Course c WHERE LENGTH(c.description) > ?1")
    List<Course> findByDescriptionLengthGreaterThan(int length);
}
