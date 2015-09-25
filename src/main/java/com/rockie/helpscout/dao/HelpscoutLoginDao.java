package com.rockie.helpscout.dao;

import com.rockie.helpscout.model.HelpscoutLogin;
import com.rockie.helpscout.model.User;

import java.util.List;

/**
 * Created by len on 9/14/2015.
 */
public interface HelpscoutLoginDao {
    public List<HelpscoutLogin> getHelpscoutLogins();
    public HelpscoutLogin getHelpscoutLoginById(long id);
    public void addHelpscoutLogin(HelpscoutLogin helpscoutLogin);
    public void updateHelpscoutLogin(HelpscoutLogin helpscoutLogin);
    public void deleteHelpscoutLogin(HelpscoutLogin helpscoutLogin);
    public HelpscoutLogin getHelpscoutLoginByUser(long userId);
}
