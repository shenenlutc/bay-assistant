package com.bayer.bayassistant.controller;


import com.bayer.bayassistant.entity.Message;
import com.bayer.bayassistant.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    @Autowired
    MessageService messageService;

    @GetMapping("getLatest")
    public Message getLatest(){
        return messageService.findLatest();
    }
}
