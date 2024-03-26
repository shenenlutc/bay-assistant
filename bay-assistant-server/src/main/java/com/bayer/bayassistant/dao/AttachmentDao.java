package com.bayer.bayassistant.dao;

import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.entity.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface AttachmentDao extends JpaRepository<Attachment, Long>, Serializable {
    List<Attachment> findByAppIdAndMarkForDelete(long appId, boolean flag);

}


