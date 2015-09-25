package com.rockie.helpscout.service;

import com.rockie.helpscout.model.MailboxSettings;

import java.util.List;

/**
 * Created by len on 9/22/2015.
 */
public interface MailboxSettingsService {
    public List<MailboxSettings> getMailboxSettings();
    public MailboxSettings getMailboxSettingsById(long id);
    public MailboxSettings createMailboxSettings(MailboxSettings mailboxSettings);
    public MailboxSettings updateMailboxSettings(MailboxSettings mailboxSettings);
    public void deleteMaiboxSettings(MailboxSettings mailboxSettings);
    public List<MailboxSettings> getMailboxSettingsForUser(long userId);
}
