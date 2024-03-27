package com.bayer.bayassistant.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "p_message")
public class Message extends AuditModel {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id",nullable=false)
    private Long id;

    @Column(name="msg_content")
    private String msgContent;

    @Column(name="user_group")
    private String userGroup;

    @Column(name="push_status")
    private String pushStatus;
}
