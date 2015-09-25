package com.rockie.helpscout.dao;

import com.rockie.helpscout.model.MailboxSettings;

import java.util.List;

/**
 * Created by len on 9/22/2015.
 */
public interface MailboxSettingsDao {
    public List<MailboxSettings> getMailboxSettings();
    public MailboxSettings getMailboxSettingsById(long id);
    public void addMailboxSettings(MailboxSettings mailboxSettings);
    public void updateMailboxSettings(MailboxSettings mailboxSettings);
    public void deleteMailboxSettings(MailboxSettings mailboxSettings);
    public List<MailboxSettings> getMailboxSettingsForUser(long userId);
}
