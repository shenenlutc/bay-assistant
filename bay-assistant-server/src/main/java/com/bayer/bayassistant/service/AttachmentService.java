package com.bayer.bayassistant.service;

import com.bayer.bayassistant.dao.AttachmentDao;
import com.bayer.bayassistant.dao.FilenetDao;
import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.entity.Attachment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AttachmentService {
    @Autowired
    AttachmentDao attachmentDao;
    @Autowired
    FilenetDao filenetDao;

    public List<Attachment> findByAppIdAndMarkForDelete( long appid){
        return attachmentDao.findByAppIdAndMarkForDelete(appid,false);
    }

    public List<String> getByAppId( long appid){
        List<Long> filenetIds = attachmentDao.findByAppIdAndMarkForDelete(appid, false).stream().map(Attachment::getFilenetId).collect(Collectors.toList());
        List<String> filePath = filenetDao.findAllByInIds(filenetIds);
        return filePath;
    }

}
