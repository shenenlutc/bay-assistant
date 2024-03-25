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
@Table(name = "p_filenet")
public class Filenet extends AuditModel {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "file_type")
    private String fileType;
    @Column(name = "file_path")
    private String filePath;

    @Column(name = "file_size")
    private String fileSize;
    @Column(name = "file_version")
    private String fileVersion;

    @Column(name = "file_digest")
    private String fileDigest;
    @Column(name = "file_length")
    private String fileLength;

    @Column(name = "file_tmp")
    private String fileTmp;

    @Column(name = "file_key")
    private String fileKey;
}
