package com.bayer.bayassistant.dao;

import com.bayer.bayassistant.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface ApplicationDao extends JpaRepository<Application, Long>, Serializable {
        List<Application> findByMarkForDelete(boolean flag);

        List<Application> findByAppCategoryIdAndMarkForDelete(long appCategoryId,boolean flag);



}
