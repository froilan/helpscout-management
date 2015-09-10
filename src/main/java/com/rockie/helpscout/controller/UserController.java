package com.rockie.helpscout.controller;

import com.rockie.helpscout.model.User;
import com.rockie.helpscout.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by len on 9/9/2015.
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(method= RequestMethod.POST, consumes="application/json")
    public @ResponseBody User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
