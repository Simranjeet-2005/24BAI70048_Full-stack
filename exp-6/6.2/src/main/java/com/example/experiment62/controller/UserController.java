package com.example.experiment62.controller;

import com.example.experiment62.entity.User;
import com.example.experiment62.repository.UserRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    // Normal Query
    @GetMapping
    public List<User> getUsers() {
        return repository.findAll();
    }

    // Normal Query with execution time
    @GetMapping("/normal")
    public Map<String, Object> normalQuery() {

        long start = System.nanoTime();

        List<User> users = repository.findAll();

        long end = System.nanoTime();

        return createResponse(users, start, end);
    }

    // JOIN FETCH Query
    @GetMapping("/join-fetch")
    public Map<String, Object> joinFetchQuery() {

        long start = System.nanoTime();

        List<User> users = repository.findUsersWithDepartment();

        long end = System.nanoTime();

        return createResponse(users, start, end);
    }

    // Cached Query
    @Cacheable("users")
    @GetMapping("/cached")
    public Map<String, Object> cachedQuery() {

        long start = System.nanoTime();

        System.out.println("Fetching users from database...");

        List<User> users = repository.findAll();

        long end = System.nanoTime();

        return createResponse(users, start, end);
    }

    // Native SQL Query
    @GetMapping("/native")
    public Map<String, Object> nativeQuery() {

        long start = System.nanoTime();

        List<User> users = repository.findUsersUsingNativeQuery();

        long end = System.nanoTime();

        return createResponse(users, start, end);
    }

    // Add User
    @PostMapping
    public User addUser(@RequestBody User user) {
        return repository.save(user);
    }

    // Delete User
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        repository.deleteById(id);
    }

    // Create common response
    private Map<String, Object> createResponse(
            List<User> users, long start, long end) {

        Map<String, Object> response = new LinkedHashMap<>();

        double timeMs = (end - start) / 1_000_000.0;

        response.put("executionTimeMs", timeMs);
        response.put("users", users);

        return response;
    }
}