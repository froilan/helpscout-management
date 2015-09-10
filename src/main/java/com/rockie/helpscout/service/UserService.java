package com.rockie.helpscout.service;

import com.rockie.helpscout.model.User;

import java.util.List;

/**
 * Created by len on 9/9/2015.
 */
public interface UserService {

    public List<User> getUsers();
    public User getUserById(long id);
    public User createUser(User user);
    public User updateUser(User user);
    public void deleteUser(User user);

}
