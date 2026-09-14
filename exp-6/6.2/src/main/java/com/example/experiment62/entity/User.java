package com.example.experiment62.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")

public class User {
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String uid;
    private String name;
    private String city;
    private String country;
    public User() {
    }
    public User(String uid, String name, String city, String country, Department department) {
        this.uid = uid;
        this.name = name;
        this.city = city;
        this.country = country;
        this.department = department;
    }

    public User(String uid, String name, String city, String country) {
        this.uid = uid;
        this.name = name;
        this.city = city;
        this.country = country;
    }

    public Long getId() {
        return id;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}