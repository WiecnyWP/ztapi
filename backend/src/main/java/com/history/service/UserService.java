package com.history.service;

import com.history.entity.User;
import com.history.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void add(User user){
        userRepository.save(user);
    }

    public Collection<User> getAll(){
        return userRepository.findAll();
    }
}
