package com.bayer.bayassistant.service;


import com.bayer.bayassistant.dao.MessageDao;
import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    MessageDao messageDao;
    public Message findLatest(){
        return messageDao.findLatest();
    }

}
