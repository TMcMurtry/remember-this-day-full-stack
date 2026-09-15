package com.launchcode.remember_this_day_backend.controllers;

import com.launchcode.remember_this_day_backend.models.Prompt;
import com.launchcode.remember_this_day_backend.repositories.PromptRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prompts")
public class PromptController {
    private final PromptRepository promptRepository;

    public PromptController(PromptRepository promptRepository) {
        this.promptRepository = promptRepository;
    }

    @GetMapping
    public List<Prompt> getAllItems() {
        return promptRepository.findAll();
    }

    @GetMapping("/{id}")
    public Prompt getItem(@PathVariable int id) {
        return promptRepository.findById(id).orElse(null);
    }

    @GetMapping("/category/{category}")
    public List<Prompt> getPromptsByCategoryId(@PathVariable int category) {
        return promptRepository.findByCategoryId(category);
    }

    @PostMapping
    public Prompt addItem(@RequestBody Prompt prompt) {
        return promptRepository.save(prompt);
    }

    @PutMapping("/{id}")
    public Prompt updateItem(@PathVariable int id, @RequestBody Prompt prompt) {
        prompt.setId(id);
        return promptRepository.save(prompt);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable int id) {
        promptRepository.deleteById(id);
    }

}
