package com.tutorials.studyworld.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.tutorials.studyworld.model.Instructor;
import com.tutorials.studyworld.service.InstructorService;

import java.util.List;

@RestController
@RequestMapping("/api/instructors")
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    // Get all instructors
    @GetMapping
    public List<Instructor> getAllInstructors() {
        return instructorService.getAllInstructors();
    }

    // Get an instructor by ID
    @GetMapping("/{id}")
    public Instructor getInstructorById(@PathVariable Long id) {
        return instructorService.getInstructorById(id);
    }

    // Get instructors by name (case-insensitive search)
    @GetMapping("/search/{name}")
    public List<Instructor> getInstructorsByName(@PathVariable String name) {
        return instructorService.getInstructorsByName(name);
    }

    // Create a new instructor
    @PostMapping
    public Instructor createInstructor(@RequestBody Instructor instructor) {
        return instructorService.createInstructor(instructor);
    }

    // Update an existing instructor
    @PutMapping("/{id}")
    public Instructor updateInstructor(@PathVariable Long id, @RequestBody Instructor instructorDetails) {
        return instructorService.updateInstructor(id, instructorDetails);
    }

    // Delete an instructor
    @DeleteMapping("/{id}")
    public void deleteInstructor(@PathVariable Long id) {
        instructorService.deleteInstructor(id);
    }
}
