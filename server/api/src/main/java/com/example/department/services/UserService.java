package com.example.department.services;

import com.example.department.DTO.UserDTO;
import com.example.department.entity.User;
import com.example.department.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
  private final UserRepository userRepository;

  public User create(UserDTO dto) {
    User user = User.builder()
        .username(dto.getUsername())
        .password(dto.getPassword())
        .build();
    return userRepository.save(user);
  }

  public List<User> readAll() {
    return userRepository.findAll();
  }

  public User update(User user) {
    return userRepository.save(user);
  }

  public void delete (Long id) {
    userRepository.deleteById(id);
  }
}
