package com.bayer.bayassistant.dao;

import com.bayer.bayassistant.entity.FaqInfo;
import com.bayer.bayassistant.entity.Filenet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface FilenetDao extends JpaRepository<Filenet, Long>, Serializable {
    List<Filenet> findByMarkForDelete(boolean flag);

    @Query("select filenet.filePath  from Filenet filenet where filenet.id IN :ids")
    List<String> findAllByInIds(@Param("ids") List<Long> ids);

}
