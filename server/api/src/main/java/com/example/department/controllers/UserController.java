package com.example.department.controllers;

import com.example.department.DTO.UserDTO;
import com.example.department.entity.User;
import com.example.department.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
  private final UserService userService;

  @PostMapping
  public ResponseEntity<User> create(@RequestBody UserDTO dto) {
    return new ResponseEntity<>(userService.create(dto), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<List<User>> readAll() {
    return new ResponseEntity<>(userService.readAll(), HttpStatus.OK);
  }

  @PutMapping
  public ResponseEntity<User> update(@RequestBody User user) {
    return new ResponseEntity<>(userService.update(user), HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public HttpStatus delete(@PathVariable Long id) {
    userService.delete(id);
    return HttpStatus.OK;
  }
}
