package com.tutorials.studyworld.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tutorials.studyworld.model.Instructor;
import java.util.List;

public interface InstructorRepository extends JpaRepository<Instructor, Long> {

    // Find instructors by name (case-insensitive search)
    List<Instructor> findByNameContainingIgnoreCase(String name);
}
