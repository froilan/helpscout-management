package com.rockie.helpscout.model;

import javax.persistence.*;

/**
 * Created by len on 9/14/2015.
 */
@Entity
@Table(name = "helpscout_login")
public class HelpscoutLogin {

    @Id
    @Column(name = "helpscout_login_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long helpscoutLoginId;

    @JoinColumn(name = "user_id", nullable = false, unique=true)
    @OneToOne
    private User user;

    @Column(name = "helpscout_key", nullable = false)
    private String helpscoutKey;

    @Column(name = "helpscout_pass", nullable = false)
    private String helpscoutPassword;

    public HelpscoutLogin() {

    }

    public long getHelpscoutLoginId() {
        return this.helpscoutLoginId;
    }

    public User getUser() {
        return this.user;
    }

    public String getHelpscoutKey() {
        return this.helpscoutKey;
    }

    public String getHelpscoutPassword() {
        return this.helpscoutPassword;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setHelpscoutKey(String helpscoutKey) {
        this.helpscoutKey = helpscoutKey;
    }

    public void setHelpscoutPassword(String helpscoutPassword) {
        this.helpscoutPassword = helpscoutPassword;
    }
}
