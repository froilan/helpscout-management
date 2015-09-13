package com.rockie.helpscout.dao;

import com.rockie.helpscout.model.User;

import java.util.List;

/**
 * Created by len on 9/9/2015.
 */
public interface UserDao {
    public List<User> getUsers();
    public User getUserById(long id);
    public void addUser(User user);
    public void updateUser(User user);
    public void deleteUser(User user);
    public User getUserByEmail(String email);
}
