package com.example.backendeduwiz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backendeduwiz.model.User;
import com.example.backendeduwiz.repository.UserRepository;

import java.util.Optional;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(String name, String email, String password) throws Exception {
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            throw new Exception("User already exists with this email");
        }

        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        return userRepository.save(user);
    }

    public User authenticateUser(String email, String password) throws Exception {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user.get();
        }
        throw new Exception("Invalid email or password");
    }
}

