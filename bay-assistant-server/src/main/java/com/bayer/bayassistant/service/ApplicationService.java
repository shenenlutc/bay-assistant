package com.bayer.bayassistant.service;


import com.bayer.bayassistant.dao.ApplicationDao;
import com.bayer.bayassistant.entity.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    ApplicationDao applicationDao;

    public List<Application> findAll(){
        return applicationDao.findAll();
    }

    public List<Application> findAllBhcApp(){
        return applicationDao.findAll();
    }

    public List<Application> findByMarkForDelete(){
        return applicationDao.findByMarkForDelete(false);
    }
    public List<Application> findByAppCategoryId(long appCategoryId){
        return applicationDao.findByAppCategoryIdAndMarkForDelete(appCategoryId,false);
    }

    public List<Application> findByAppCategoryIdAndName(long appCategoryId,String name){
        return applicationDao.findByAppCategoryIdAndAppNameOrAppEname(appCategoryId,false,name);
    }

    public List<Application> findByName(String name){
        return applicationDao.findByAppNameOrAppEname(false,name);
    }

}
