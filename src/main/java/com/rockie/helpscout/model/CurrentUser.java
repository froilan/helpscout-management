package com.rockie.helpscout.model;

import java.util.ArrayList;

/**
 * Created by len on 9/14/2015.
 */
public class CurrentUser extends org.springframework.security.core.userdetails.User {

    private User user;

    public CurrentUser(User user) {
        super(user.getEmail(), user.getPassword(),new ArrayList());
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public Long getId() {
        return user.getUserId();
    }

}