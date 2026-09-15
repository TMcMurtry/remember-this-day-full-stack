package com.launchcode.remember_this_day_backend.controllers;

import com.launchcode.remember_this_day_backend.models.Entry;
import com.launchcode.remember_this_day_backend.repositories.EntryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/entries")
public class EntryController {
    private final EntryRepository entryRepository;

    public EntryController(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    @GetMapping
    public List<Entry> getAllItems() { return entryRepository.findAll();   }

    @GetMapping("/{id}")
    public Entry getItem(@PathVariable int id) {
        return entryRepository.findById(id).orElse(null);
    }

    @GetMapping("/user/{user}")
    public List<Entry> getEntriesByUserId(@PathVariable int user) {
        return entryRepository.findByUserId(user);
    }

    @PostMapping
    public Entry addItem(@RequestBody Entry entry) {
        return entryRepository.save(entry);
    }

    @PutMapping("/{id}")
    public Entry updateItem(@PathVariable int id, @RequestBody Entry entry) {
        entry.setId(id);
        return entryRepository.save(entry);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable int id) {
        entryRepository.deleteById(id);
    }

}
