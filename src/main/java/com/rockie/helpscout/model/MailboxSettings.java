package com.rockie.helpscout.model;


import javax.persistence.*;

/**
 * Created by len on 9/22/2015.
 */
@Entity
@Table(name = "mailbox_settings")
public class MailboxSettings {
    @Id
    @Column(name = "mailbox_settings_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long mailboxSettingsId;

    @JoinColumn(name = "user_id", nullable = false)
    @ManyToOne
    private User user;

    @Column(name = "mailbox_id", nullable = false)
    private long mailboxId;

    @Column(name = "mailbox_name", nullable = false)
    private String mailboxName;

    @Column(name = "show_pending_sw", nullable = false)
    private boolean shouldShowPending;

    @Column(name = "show_active_sw", nullable = false)
    private boolean shouldShowActive;

    @Column(name = "show_closed_sw", nullable = false)
    private boolean shouldShowClosed;

    public MailboxSettings() {

    }

    public long getMailboxSettingsId() {
        return this.mailboxSettingsId;
    }

    public User getUser() {
        return this.user;
    }

    public long getMailboxId() {
        return this.mailboxId;
    }

    public String getMailboxName() {
        return this.mailboxName;
    }

    public boolean getShouldShowPending() {
        return this.shouldShowPending;
    }

    public boolean getShouldShowActive() {
        return this.shouldShowActive;
    }

    public boolean getShouldShowClosed() {
        return this.shouldShowClosed;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setMailboxId(long mailboxId) {
        this.mailboxId = mailboxId;
    }

    public void setMailboxName(String mailboxName) {
        this.mailboxName = mailboxName;
    }

    public void setShouldShowPending(boolean shouldShowPending) {
        this.shouldShowPending = shouldShowPending;
    }

    public void setShouldShowActive(boolean shouldShowActive) {
        this.shouldShowActive = shouldShowActive;
    }

    public void setShouldShowClosed(boolean shouldShowClosed) {
        this.shouldShowClosed = shouldShowClosed;
    }
}
