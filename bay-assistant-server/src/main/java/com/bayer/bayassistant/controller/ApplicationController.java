package com.bayer.bayassistant.controller;


import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/application")
public class ApplicationController {

    @Autowired
    ApplicationService applicationService;

    @GetMapping("test")
    public List<Application> test(){
        return applicationService.findAll();
    }

    @GetMapping("findAllBcsApp")
    public List<Application> findAllBcsApp(){
        return applicationService.findAllBcsApp();
    }

}
