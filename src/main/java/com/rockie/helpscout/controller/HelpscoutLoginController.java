package com.rockie.helpscout.controller;

import com.rockie.helpscout.model.CurrentUser;
import com.rockie.helpscout.model.HelpscoutLogin;
import com.rockie.helpscout.model.User;
import com.rockie.helpscout.service.HelpscoutLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by len on 9/14/2015.
 */
@Controller
@RequestMapping("/api/helpscoutLogin")
public class HelpscoutLoginController {

    @Autowired
    private HelpscoutLoginService helpscoutLoginService;

    @RequestMapping(method = RequestMethod.POST, consumes="application/json")
    public @ResponseBody HelpscoutLogin createHelpscoutLogin(
            @RequestBody HelpscoutLogin helpscoutLogin) {

        //helpscoutLogin.setUser(getCurrentUser());
        return helpscoutLoginService.createHelpscoutLogin(helpscoutLogin);
    }

    @RequestMapping(value= "/{id1}", method = RequestMethod.GET)
    public @ResponseBody HelpscoutLogin getHelpscoutLogin(@PathVariable("id1") long id) {
        return helpscoutLoginService.getHelpscoutLoginByUser(id);
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth == null || auth.getPrincipal() == null) {
            return null;
        }
        System.out.println(auth.getPrincipal());
        CurrentUser currentUser = (CurrentUser) auth.getPrincipal();
        return currentUser.getUser();
    }
}
