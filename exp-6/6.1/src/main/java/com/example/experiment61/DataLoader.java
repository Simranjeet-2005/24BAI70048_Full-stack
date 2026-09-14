package com.example.experiment61;

import com.example.experiment61.entity.User;
import com.example.experiment61.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository repository;

    public DataLoader(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {

        repository.save(new User("E20451", "Nitish"));
        repository.save(new User("E20452", "Shriya"));
        repository.save(new User("E20453", "Prabhjot"));
        repository.save(new User("E20454", "Lovleen"));
        repository.save(new User("E20467", "Kriti"));
        repository.save(new User("E20468", "Harpreet"));
        repository.save(new User("E20469", "Simran"));
        repository.save(new User("E20470", "Aman"));
        repository.save(new User("E20471", "Navjot"));
        repository.save(new User("E20472", "Manpreet"));
    }
}