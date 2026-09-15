package com.launchcode.remember_this_day_backend.repositories;

import com.launchcode.remember_this_day_backend.models.Prompt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PromptRepository extends JpaRepository<Prompt, Integer> {
    List<Prompt> findByCategoryId(int category);

}
