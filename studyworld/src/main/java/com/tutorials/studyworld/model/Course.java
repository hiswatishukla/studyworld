package com.tutorials.studyworld.model;

import jakarta.persistence.*;



@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description; // Add description field

    @ManyToOne
    @JoinColumn(name = "instructor_id", nullable = false)
    private Instructor instructor;

    // Default constructor
    public Course() {}

    // Parameterized constructor
    public Course(String title, String description, Instructor instructor) {
        this.title = title;
        this.description = description; // Initialize description
        this.instructor = instructor;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {  // Add getDescription() method
        return description;
    }

    public void setDescription(String description) {  // Add setDescription() method
        this.description = description;
    }

    public Instructor getInstructor() {
        return instructor;
    }

    public void setInstructor(Instructor instructor) {
        this.instructor = instructor;
    }
}
