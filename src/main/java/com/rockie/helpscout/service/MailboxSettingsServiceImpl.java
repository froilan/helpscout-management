package com.rockie.helpscout.service;

import com.rockie.helpscout.dao.MailboxSettingsDao;
import com.rockie.helpscout.model.MailboxSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by len on 9/22/2015.
 */
@Service
@Transactional
public class MailboxSettingsServiceImpl implements MailboxSettingsService {

    @Autowired
    private MailboxSettingsDao mailboxSettingsDao;

    @Override
    public List<MailboxSettings> getMailboxSettings() {
        return mailboxSettingsDao.getMailboxSettings();
    }

    @Override
    public MailboxSettings getMailboxSettingsById(long id) {
        return mailboxSettingsDao.getMailboxSettingsById(id);
    }

    @Override
    public MailboxSettings createMailboxSettings(MailboxSettings mailboxSettings) {
        if(getMailboxSettingsById(mailboxSettings.getMailboxSettingsId()) == null) {
            mailboxSettingsDao.addMailboxSettings(mailboxSettings);
        }
        else {
            updateMailboxSettings(mailboxSettings);
        }
        return mailboxSettings;
    }

    @Override
    public MailboxSettings updateMailboxSettings(MailboxSettings mailboxSettings) {
        mailboxSettingsDao.updateMailboxSettings(mailboxSettings);
        return mailboxSettings;
    }

    @Override
    public void deleteMaiboxSettings(MailboxSettings mailboxSettings) {
        mailboxSettingsDao.deleteMailboxSettings(mailboxSettings);
    }

    @Override
    public List<MailboxSettings> getMailboxSettingsForUser(long userId) {
        return mailboxSettingsDao.getMailboxSettingsForUser(userId);
    }
}
