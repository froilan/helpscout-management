package com.rockie.helpscout.controller;

import com.rockie.helpscout.model.CurrentUser;
import com.rockie.helpscout.model.User;
import com.rockie.helpscout.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by len on 9/18/2015.
 */
@Controller
@RequestMapping("/api/authenticate")
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    User authenticate() {
        CurrentUser currentUser = (CurrentUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return currentUser.getUser();
    }
}
