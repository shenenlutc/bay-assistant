package com.bayer.bayassistant.dao;

import com.bayer.bayassistant.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface ApplicationDao extends JpaRepository<Application, Long>, Serializable {
        @Query("select application  from Application application where application.appRight IN :appRights and application.markForDelete=:flag")
        List<Application> findByMarkForDelete(@Param("appRights") List<String> appRights,@Param("flag") boolean flag);

        List<Application> findByAppCategoryIdAndMarkForDelete(long appCategoryId,boolean flag);

        @Query("select application  from Application application where application.appCategoryId=:appCategoryId and application.appRight IN :appRights and application.markForDelete=:flag")
        List<Application> findByAppCategoryIdInAppRightAndMarkForDelete(@Param("appCategoryId") long appCategoryId,@Param("appRights") List<String> appRights,@Param("flag") boolean flag);

        @Query("select app from Application app where app.appCategoryId=:appCategoryId and app.markForDelete=:flag and ( LOWER(app.appName) LIKE LOWER( CONCAT('%',:name,'%' )) OR LOWER(app.appEname) LIKE LOWER( CONCAT('%',:name,'%')))")
        List<Application> findByAppCategoryIdAndAppNameOrAppEname(@Param("appCategoryId") long appCategoryId, @Param("flag") Boolean flag,@Param("name") String name);

        @Query("select app from Application app where app.markForDelete=:flag and ( LOWER(app.appName) LIKE LOWER( CONCAT('%',:name,'%' )) OR LOWER(app.appEname) LIKE LOWER( CONCAT('%',:name,'%')))")
        List<Application> findByAppNameOrAppEname( @Param("flag") Boolean flag,@Param("name") String name);

        Application findByIdAndMarkForDelete(long id,boolean flag);

}
