package com.example.experiment62.repository;
import org.springframework.data.jpa.repository.Query;
import com.example.experiment62.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM users ORDER BY name", nativeQuery = true)
    List<User> findUsersUsingNativeQuery();
    @Query("SELECT u FROM User u JOIN FETCH u.department")
    List<User> findUsersWithDepartment();
}