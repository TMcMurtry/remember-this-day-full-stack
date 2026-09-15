package com.launchcode.remember_this_day_backend.controllers;

import com.launchcode.remember_this_day_backend.models.User;
import com.launchcode.remember_this_day_backend.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAllItems() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getItem(@PathVariable int id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping
    public User addItem(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public User updateItem(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        return userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable int id) {
        userRepository.deleteById(id);
    }

}
