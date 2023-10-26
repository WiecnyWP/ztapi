package com.history.controller;

import com.history.entity.User;
import com.history.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @GetMapping("/getAll")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Collection<User>> getAll() {
        return ResponseEntity.ok(userService.getAll());
    }

    @GetMapping("/getCurrentUserInfo")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> getCurrentLoggedUser(Authentication authentication) {
        return ResponseEntity.ok(userService.getUserByName(authentication.getName()));
    }
}
