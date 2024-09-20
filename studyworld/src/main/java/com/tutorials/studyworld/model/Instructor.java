package com.tutorials.studyworld.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "instructors")
public class Instructor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String bio;  // Add bio field

    @OneToMany(mappedBy = "instructor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Course> courses = new ArrayList<>();

    // Default constructor
    public Instructor() {}

    // Parameterized constructor
    public Instructor(String name, String email, String bio) {
        this.name = name;
        this.email = email;
        this.bio = bio;  // Initialize bio
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBio() {  // Add getBio() method
        return bio;
    }

    public void setBio(String bio) {  // Add setBio() method
        this.bio = bio;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    // Add a method to add a course
    public void addCourse(Course course) {
        this.courses.add(course);
        course.setInstructor(this);  // Set the instructor for the course
    }
}
