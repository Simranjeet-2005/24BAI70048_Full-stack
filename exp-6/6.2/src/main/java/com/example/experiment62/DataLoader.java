package com.example.experiment62;

import com.example.experiment62.entity.Department;
import com.example.experiment62.entity.User;
import com.example.experiment62.repository.DepartmentRepository;
import com.example.experiment62.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final DepartmentRepository departmentRepository;

    public DataLoader(UserRepository userRepository,
                      DepartmentRepository departmentRepository) {
        this.userRepository = userRepository;
        this.departmentRepository = departmentRepository;
    }

    @Override
    public void run(String... args) {

        Department cse = departmentRepository.save(new Department("CSE"));
        Department aiml = departmentRepository.save(new Department("AIML"));
        Department ece = departmentRepository.save(new Department("ECE"));

        userRepository.save(new User("E20451", "Nitish", "Chandigarh", "India", cse));
        userRepository.save(new User("E20452", "Shriya", "Mohali", "India", aiml));
        userRepository.save(new User("E20453", "Prabhjot", "Ropar", "India", cse));
        userRepository.save(new User("E20454", "Lovleen", "Chandigarh", "India", aiml));
        userRepository.save(new User("E20455", "Kriti", "Delhi", "India", ece));
        userRepository.save(new User("E20456", "Harpreet", "Amritsar", "India", cse));
        userRepository.save(new User("E20457", "Simran", "Mohali", "India", aiml));
        userRepository.save(new User("E20458", "Aman", "Ludhiana", "India", ece));
        userRepository.save(new User("E20459", "Navjot", "Patiala", "India", cse));
        userRepository.save(new User("E20460", "Manpreet", "Jalandhar", "India", aiml));
    }
}