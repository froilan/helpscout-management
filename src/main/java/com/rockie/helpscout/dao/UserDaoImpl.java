package com.rockie.helpscout.dao;

import com.rockie.helpscout.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by len on 9/9/2015.
 */
@Repository
public class UserDaoImpl implements UserDao{

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<User> getUsers() {
        List<User> userList = getSession().createQuery("from user").list();
        return userList;
    }

    @Override
    public User getUserById(long id ) {
        return (User) getSession().get(User.class, id);
    }

    @Override
    public void addUser(User user) {
        getSession().persist(user);
    }

    @Override
    public void updateUser(User user) {
        getSession().update(user);
    }

    @Override
    public void deleteUser(User user) {
        getSession().delete(user);
    }
}
