package com.bayer.bayassistant.controller;


import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.service.ApplicationService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/application")
public class ApplicationController {

    @Autowired
    ApplicationService applicationService;

    @GetMapping("/test")
    public List<Application> test(){
        return applicationService.findAll();
    }

    @GetMapping("/findAllBhcApp")
    public List<Application> findAllBhcApp(){
        return applicationService.findAllBhcApp();
    }

    @GetMapping("/list")
    public List<Application> findByMarkForDelete(){
        return applicationService.findByMarkForDelete();
    }
    @GetMapping("/getByAppCategoryId")
    public List<Application> findByAppCategoryId(@RequestParam("appCategoryId") long appCategoryId){
        return applicationService.findByAppCategoryId(appCategoryId);
    }
    @GetMapping("getByAppCategoryIdAndName")
    public List<Application> getByAppCategoryIdAndName(@RequestParam("appCategoryId") long appCategoryId,@RequestParam("name") String name){
        return applicationService.findByAppCategoryIdAndName(appCategoryId,name);
    }

    @GetMapping("getByName")
    public List<Application> getByName(@RequestParam("name") String name) {
        return applicationService.findByName(name);
    }

    @GetMapping("getApplicantionById")
    public Application getApplicantionById(@RequestParam("appId") long appId) {
        return applicationService.findByIdAndMarkForDelete(appId);
    }

}
