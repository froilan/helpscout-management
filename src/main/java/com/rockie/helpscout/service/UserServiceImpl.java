package com.rockie.helpscout.service;

import com.rockie.helpscout.dao.UserDao;
import com.rockie.helpscout.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by len on 9/9/2015.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public List<User> getUsers() {
        return userDao.getUsers();
    }

    @Override
    public User getUserById(long id) {
        return userDao.getUserById(id);
    }

    @Override
    public User createUser(User user) {
        userDao.addUser(user);
        return user;
    }

    @Override
    public User updateUser(User user) {
        userDao.updateUser(user);
        return user;
    }

    @Override
    public void deleteUser(User user) {
        userDao.deleteUser(user);
    }
}
