package com.rockie.helpscout.dao;

import com.rockie.helpscout.model.MailboxSettings;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by len on 9/22/2015.
 */
@Repository
public class MailboxSettingsDaoImpl implements MailboxSettingsDao {

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public List<MailboxSettings> getMailboxSettings() {
        List<MailboxSettings> mailboxSettingsList = getSession().createQuery("from MailboxSettings").list();
        return mailboxSettingsList;
    }

    @Override
    public MailboxSettings getMailboxSettingsById(long id) {
        return (MailboxSettings) getSession().get(MailboxSettings.class, id);
    }

    @Override
    public void addMailboxSettings(MailboxSettings mailboxSettings) {
        getSession().persist(mailboxSettings);
    }

    @Override
    public void updateMailboxSettings(MailboxSettings mailboxSettings) {
        getSession().merge(mailboxSettings);
    }

    @Override
    public void deleteMailboxSettings(MailboxSettings mailboxSettings) {
        getSession().delete(mailboxSettings);
    }

    @Override
    public List<MailboxSettings> getMailboxSettingsForUser(long userId) {
        Query getMailboxSettingsForUserQuery =
                getSession().createQuery("from MailboxSettings ms where ms.user.userId = :userId");
        getMailboxSettingsForUserQuery.setLong("userId", userId);

        List<MailboxSettings> helpscoutLoginList = getMailboxSettingsForUserQuery.list();

        return helpscoutLoginList;
    }
}
