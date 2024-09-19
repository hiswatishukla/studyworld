package com.tutorials.studyworld.repository;

import com.tutorials.studyworld.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Find a user by their username
    Optional<User> findByUsername(String username);

    // Find a user by their email
    Optional<User> findByEmail(String email);

    // Find a user by their ID
    Optional<User> findById(Long id);

    // Delete a user by their ID (inherited from JpaRepository)
    // No need to define this method explicitly; JpaRepository provides it.
}
