package com.bayer.bayassistant.controller;

import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.entity.Attachment;
import com.bayer.bayassistant.entity.Filenet;
import com.bayer.bayassistant.service.ApplicationService;
import com.bayer.bayassistant.service.AttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/attachment")
public class AttachmentController {
    @Autowired
    AttachmentService attachmentService;

    @GetMapping("/getListByAppId")
    public List<Attachment> getListByAppId(@RequestParam("appId") long appId){
        return attachmentService.findByAppIdAndMarkForDelete(appId);
    }

    /**
     * 根据appid查询app下的图片
     * @param appId
     * @return 图片路径集合
     */
    @GetMapping("/getByAppId")
    public List<String> getByAppId(@RequestParam("appId") long appId){
        return attachmentService.getByAppId(appId);
    }
}
