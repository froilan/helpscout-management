package com.rockie.helpscout.dao;

import com.rockie.helpscout.model.HelpscoutLogin;
import com.rockie.helpscout.model.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by len on 9/14/2015.
 */
@Repository
public class HelpscoutLoginDaoImpl implements HelpscoutLoginDao {
    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public List<HelpscoutLogin> getHelpscoutLogins() {
        List<HelpscoutLogin> helpscoutLoginList = getSession().createQuery("from HelpscoutLogin").list();
        return helpscoutLoginList;
    }

    @Override
    public HelpscoutLogin getHelpscoutLoginById(long id) {
        return (HelpscoutLogin) getSession().get(HelpscoutLogin.class, id);
    }

    @Override
    public void addHelpscoutLogin(HelpscoutLogin helpscoutLogin) {
        getSession().persist(helpscoutLogin);
    }

    @Override
    public void updateHelpscoutLogin(HelpscoutLogin helpscoutLogin) {
        getSession().merge(helpscoutLogin);
    }

    @Override
    public void deleteHelpscoutLogin(HelpscoutLogin helpscoutLogin) {
        getSession().delete(helpscoutLogin);
    }

    @Override
    public HelpscoutLogin getHelpscoutLoginByUser(long userId) {
        Query getHelpscoutLoginByUserQuery =
                getSession().createQuery("from HelpscoutLogin hl where hl.user.userId = :userId");
        getHelpscoutLoginByUserQuery.setLong("userId", userId);

        List<HelpscoutLogin> helpscoutLoginList = getHelpscoutLoginByUserQuery.list();

        if(helpscoutLoginList.size() < 1) {
            return null;
        }

        return helpscoutLoginList.get(0);
    }
}
