package com.bayer.bayassistant.controller;

import com.bayer.bayassistant.entity.FaqInfo;
import com.bayer.bayassistant.service.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/faq")
public class FaqController {
    @Autowired
    FaqService faqService;
    @GetMapping("list")
    public List<FaqInfo> findByMarkForDelete(){
        return faqService.findByMarkForDelete();
    }
}
