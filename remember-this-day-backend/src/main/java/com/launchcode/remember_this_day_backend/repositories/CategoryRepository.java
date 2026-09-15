package com.launchcode.remember_this_day_backend.repositories;

import com.launchcode.remember_this_day_backend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
