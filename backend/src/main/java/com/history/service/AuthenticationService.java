package com.history.service;

import com.history.entity.UserData;
import com.history.repository.UserDataRepository;
import com.history.service.security.auth.AuthenticateRequest;
import com.history.service.security.auth.AuthenticationResponse;
import com.history.service.security.auth.RegisterRequest;
import com.history.entity.enums.UserRole;
import com.history.entity.User;
import com.history.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserDataRepository userDataRepository;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .userRole(UserRole.USER)
                .build();
        var userData = UserData.builder()
                .name(request.getName())
                .surname(request.getSurname())
                .build();
        UserData userDataFromDb = userDataRepository.save(userData);
        user.setUserData(userDataFromDb);
        repository.save(user);

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = repository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
