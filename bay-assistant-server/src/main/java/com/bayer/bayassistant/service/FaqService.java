package com.bayer.bayassistant.service;

import com.bayer.bayassistant.dao.FapDao;
import com.bayer.bayassistant.entity.FaqInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqService {
    @Autowired
    FapDao fapDao;

    public List<FaqInfo> findByMarkForDelete(){
        return fapDao.findByMarkForDelete(false);
    }
}
