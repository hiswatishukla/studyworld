package com.tutorials.studyworld.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tutorials.studyworld.model.Instructor;
import com.tutorials.studyworld.repository.InstructorRepository;

import java.util.List;

@Service
public class InstructorService {

    @Autowired
    private InstructorRepository instructorRepository;

    public List<Instructor> getAllInstructors() {
        return instructorRepository.findAll();
    }

    public Instructor getInstructorById(Long id) {
        return instructorRepository.findById(id).orElse(null);
    }

    public List<Instructor> getInstructorsByName(String name) {
        return instructorRepository.findByNameContainingIgnoreCase(name);
    }

    public Instructor createInstructor(Instructor instructor) {
        return instructorRepository.save(instructor);
    }

    public Instructor updateInstructor(Long id, Instructor instructorDetails) {
        Instructor instructor = instructorRepository.findById(id).orElse(null);
        if (instructor != null) {
            instructor.setName(instructorDetails.getName());
            instructor.setEmail(instructorDetails.getEmail());
            instructor.setBio(instructorDetails.getBio());
            return instructorRepository.save(instructor);
        }
        return null;
    }

    public void deleteInstructor(Long id) {
        instructorRepository.deleteById(id);
    }
}
