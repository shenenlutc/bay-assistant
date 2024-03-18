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

}
