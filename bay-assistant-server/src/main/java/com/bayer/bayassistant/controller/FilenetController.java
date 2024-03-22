package com.bayer.bayassistant.controller;

import com.bayer.bayassistant.entity.FaqInfo;
import com.bayer.bayassistant.entity.Filenet;
import com.bayer.bayassistant.service.FilenetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/filenet")
public class FilenetController {
    @Autowired
    FilenetService filenetService;
    @GetMapping("list")
    public List<Filenet> findByMarkForDelete(){
        return filenetService.findByMarkForDelete();
    }

}
