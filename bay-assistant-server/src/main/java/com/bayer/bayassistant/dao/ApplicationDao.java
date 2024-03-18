package com.bayer.bayassistant.dao;

import com.bayer.bayassistant.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface ApplicationDao extends JpaRepository<Application,Integer>, Serializable {


}
