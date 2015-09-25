package com.rockie.helpscout.service;

import com.rockie.helpscout.dao.HelpscoutLoginDao;
import com.rockie.helpscout.model.HelpscoutLogin;
import com.rockie.helpscout.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by len on 9/14/2015.
 */
@Service
@Transactional
public class HelpscoutLoginServiceImpl implements HelpscoutLoginService {

    @Autowired
    private HelpscoutLoginDao helpscoutLoginDao;

    @Override
    public List<HelpscoutLogin> getHelpscoutLogins() {
        return helpscoutLoginDao.getHelpscoutLogins();
    }

    @Override
    public HelpscoutLogin getHelpscoutLoginById(long id) {
        return helpscoutLoginDao.getHelpscoutLoginById(id);
    }

    @Override
    public HelpscoutLogin createHelpscoutLogin(HelpscoutLogin helpscoutLogin) {
        System.out.println("******TRY: " + getHelpscoutLoginById(helpscoutLogin.getHelpscoutLoginId()));
        if(getHelpscoutLoginById(helpscoutLogin.getHelpscoutLoginId()) == null) {
            helpscoutLoginDao.addHelpscoutLogin(helpscoutLogin);
        }
        else {
            updateHelpscoutLogin(helpscoutLogin);
        }
        return helpscoutLogin;
    }

    @Override
    public HelpscoutLogin updateHelpscoutLogin(HelpscoutLogin helpscoutLogin) {
        helpscoutLoginDao.updateHelpscoutLogin(helpscoutLogin);
        return helpscoutLogin;
    }

    @Override
    public void deleteHelpscoutLogin(HelpscoutLogin helpscoutLogin) {
        helpscoutLoginDao.deleteHelpscoutLogin(helpscoutLogin);
    }

    @Override
    public HelpscoutLogin getHelpscoutLoginByUser(long user) {
        return helpscoutLoginDao.getHelpscoutLoginByUser(user);
    }

}
