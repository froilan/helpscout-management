package com.rockie.helpscout.controller;

import com.rockie.helpscout.model.HelpscoutLogin;
import com.rockie.helpscout.model.MailboxSettings;
import com.rockie.helpscout.service.MailboxSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by len on 9/24/2015.
 */
@Controller
@RequestMapping("/api/mailboxSetting")
public class MailboxSettingsController {

    @Autowired
    private MailboxSettingsService mailboxSettingService;

    @RequestMapping(method = RequestMethod.POST, consumes="application/json")
    public @ResponseBody MailboxSettings createMailboxSetting(
            @RequestBody MailboxSettings mailboxSetting) {

        //helpscoutLogin.setUser(getCurrentUser());
        return mailboxSettingService.createMailboxSettings(mailboxSetting);
    }

    @RequestMapping(value = "/user/{userId}", method = RequestMethod.GET)
    public @ResponseBody List<MailboxSettings> getMailboxSettingsForUser(@PathVariable("userId") long userId) {
        return mailboxSettingService.getMailboxSettingsForUser(userId);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteMailboxSetting(@PathVariable("id") long id) {
        MailboxSettings mailboxSetting = mailboxSettingService.getMailboxSettingsById(id);
        if(mailboxSetting != null) {
            mailboxSettingService.deleteMaiboxSettings(mailboxSetting);
        };
    }
}
