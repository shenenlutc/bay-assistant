package com.bayer.bayassistant.service;


import com.bayer.bayassistant.dao.ApplicationDao;
import com.bayer.bayassistant.entity.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
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
        List<String> appRights = new ArrayList<>();
        appRights.add("All");
        appRights.add("2");//BHC
        return applicationDao.findByMarkForDelete(appRights,false);
    }
    public List<Application> findByAppCategoryId(long appCategoryId){
        List<String> appRights = new ArrayList<>();
        switch ((int) appCategoryId){
            case 1:
                //报销及人事
                appRights.add("All");
                break;
            case 2:
                //我的常用
                break;
            case 3:
                //市场及营销
                appRights.add("2");//BHC
                break;
            case 4:
                //办公助手
                appRights.add("All");
                appRights.add("2");//BHC
                break;
            default:
                //所有应用
                appRights.add("All");
                appRights.add("2");//BHC

        }
        List<Application> getApplicationByAppCategoryId ;
        if(!CollectionUtils.isEmpty(appRights)){
            getApplicationByAppCategoryId = applicationDao.findByAppCategoryIdInAppRightAndMarkForDelete(appCategoryId, appRights, false);
        }else {
            getApplicationByAppCategoryId = applicationDao.findByAppCategoryIdAndMarkForDelete(appCategoryId, false);
        }
        return getApplicationByAppCategoryId;
    }

    public List<Application> findByAppCategoryIdAndName(long appCategoryId,String name){
        return applicationDao.findByAppCategoryIdAndAppNameOrAppEname(appCategoryId,false,name);
    }

    public List<Application> findByName(String name){
        return applicationDao.findByAppNameOrAppEname(false,name);
    }

    public Application findByIdAndMarkForDelete(long appId){
        return applicationDao.findByIdAndMarkForDelete(appId,false);
    }

}
