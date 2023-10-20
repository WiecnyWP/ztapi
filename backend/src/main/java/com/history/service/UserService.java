package com.history.service;

import com.history.entity.User;
import com.history.entity.UserData;
import com.history.repository.UserDataRepository;
import com.history.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final UserDataRepository userDataRepository;

    public void add(User user){
        UserData userData = user.getUserData();
        userDataRepository.save(userData);
        userRepository.save(user);

    }

    public Collection<User> getAll(){
        return userRepository.findAll();
    }

}

