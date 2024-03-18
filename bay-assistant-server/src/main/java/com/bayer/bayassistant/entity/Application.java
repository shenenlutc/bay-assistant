package com.bayer.bayassistant.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name = "p_application")
public class Application extends AuditModel {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id",nullable=false)
    private Long id;

    @Column(name="app_name")
    private String appName;

    @Column(name="app_ename")
    private String appEname;

    @Column(name="app_category_id")
    private Long appCategoryId;

    @Column(name="app_ver")
    private String appVer;

    @Column(name="app_type")
    private String appType;

    @Column(name="app_url")
    private String appUrl;

    @Column(name="app_source")
    private String appSource;

    @Column(name="app_right")
    private String appRight;

    @Column(name="description")
    private String description;

    @Column(name="app_description")
    private String appDescription;

    @Column(name="app_icon")
    private Long appIcon;

}
