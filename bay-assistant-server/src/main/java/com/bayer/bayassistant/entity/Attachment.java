package com.bayer.bayassistant.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "p_app_attachment")
public class Attachment extends AuditModel {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id",nullable=false)
    private Long id;

    @Column(name="app_id")
    private Long appId;

    @Column(name="filenet_id")
    private Long filenetId;


}
