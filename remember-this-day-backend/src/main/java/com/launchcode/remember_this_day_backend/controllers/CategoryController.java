package com.launchcode.remember_this_day_backend.controllers;

import com.launchcode.remember_this_day_backend.models.Category;
import com.launchcode.remember_this_day_backend.repositories.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public List<Category> getAllItems() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Category getItem(@PathVariable int id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Category addItem(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    @PutMapping("/{id}")
    public Category updateItem(@PathVariable int id, @RequestBody Category category) {
        category.setId(id);
        return categoryRepository.save(category);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable int id) {
        categoryRepository.deleteById(id);
    }

}
