package com.bayer.bayassistant.dao;


import com.bayer.bayassistant.entity.FaqInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface FapDao extends JpaRepository<FaqInfo, Long>, Serializable {
    @Query("from FaqInfo where markForDelete = :flag order by id")
    List<FaqInfo> findByMarkForDelete(boolean flag);
}
