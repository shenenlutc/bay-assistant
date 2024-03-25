package com.bayer.bayassistant.service;

import com.bayer.bayassistant.dao.FilenetDao;
import com.bayer.bayassistant.entity.FaqInfo;
import com.bayer.bayassistant.entity.Filenet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilenetService {
    @Autowired
    FilenetDao filenetDao;
    public List<Filenet> findByMarkForDelete(){
        return filenetDao.findByMarkForDelete(false);
    }

    public Filenet findById(long id){
        Optional<Filenet> byId = filenetDao.findById(id);
        return byId.orElse(null);
    }
}
