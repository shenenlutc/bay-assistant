package com.bayer.bayassistant.dao;

import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.io.Serializable;


@Repository
public interface MessageDao extends JpaRepository<Message, Long>, Serializable {
    @Query("select message from Message message where message.markForDelete=false  order by message.id desc limit 1")
    Message findLatest();

}
