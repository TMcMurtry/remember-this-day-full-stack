package com.launchcode.remember_this_day_backend.repositories;

import com.launchcode.remember_this_day_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}

