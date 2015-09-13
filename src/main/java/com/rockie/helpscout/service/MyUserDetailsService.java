package com.rockie.helpscout.service;

import com.rockie.helpscout.dao.UserDao;
import com.rockie.helpscout.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

/**
 * Created by len on 9/12/2015.
 */
@Service
@Transactional
public class MyUserDetailsService implements UserDetailsService {

    UserDao userDao;

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.getUserByEmail(username.trim());
//        User user = new User();
//        user.setEmail("test");
//        user.setPassword("test");

        if(user == null) {
            throw new UsernameNotFoundException("Username not found");
        }

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                new ArrayList());
    }
}
