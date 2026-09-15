package com.launchcode.remember_this_day_backend.repositories;

import com.launchcode.remember_this_day_backend.models.Entry;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface EntryRepository extends JpaRepository<Entry, Integer> {
    List<Entry> findByUserId(int user);

}
