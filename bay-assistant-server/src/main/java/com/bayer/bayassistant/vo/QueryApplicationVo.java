package com.bayer.bayassistant.vo;


import com.bayer.bayassistant.entity.Application;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QueryApplicationVo extends Application {

    private Integer pageNo;

    private Integer pageSize;

}
