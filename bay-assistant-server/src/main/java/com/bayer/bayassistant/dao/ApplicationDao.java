package com.bayer.bayassistant.dao;

import com.bayer.bayassistant.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public interface ApplicationDao extends JpaRepository<Application, Long>, Serializable {


}
