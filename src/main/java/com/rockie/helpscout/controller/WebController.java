package com.rockie.helpscout.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by len on 9/8/2015.
 */
@Controller
public class WebController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showDashboard() {
        return "/pages/index.html";
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String showRegisterPage() {
        return "/pages/register.html";
    }
}
