package com.rockie.helpscout.service;

import com.rockie.helpscout.model.HelpscoutLogin;
import com.rockie.helpscout.model.User;

import java.util.List;

/**
 * Created by len on 9/14/2015.
 */
public interface HelpscoutLoginService {

    public List<HelpscoutLogin> getHelpscoutLogins();
    public HelpscoutLogin getHelpscoutLoginById(long id);
    public HelpscoutLogin createHelpscoutLogin(HelpscoutLogin helpscoutLogin);
    public HelpscoutLogin updateHelpscoutLogin(HelpscoutLogin helpscoutLogin);
    public void deleteHelpscoutLogin(HelpscoutLogin helpscoutLogin);
    public HelpscoutLogin getHelpscoutLoginByUser(long userId);
}
