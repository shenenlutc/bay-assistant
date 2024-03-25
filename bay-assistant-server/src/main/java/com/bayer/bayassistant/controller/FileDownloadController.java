package com.bayer.bayassistant.controller;


import com.bayer.bayassistant.entity.Filenet;
import com.bayer.bayassistant.service.FilenetService;
import com.bayer.bayassistant.util.ImageTypeUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;


@Controller
@RequestMapping("/api/file")
public class FileDownloadController {
    private static final Logger log = LoggerFactory.getLogger(FileDownloadController.class);

//    private static final MimetypesFileTypeMap mimeTypes = new MimetypesFileTypeMap();

    @Value("${app.home}")
    private String appHome;

    @Autowired
    private FilenetService filenetService;

    @RequestMapping("/download")
    public void download(@RequestParam("id") String id
            , HttpServletResponse response){
        Filenet filenet = filenetService.findById(Long.parseLong(id));
        if (null == filenet || null == filenet.getId()) {
            log.warn("Download file error,no data query : " + id);
            return;
        }
        downloadByFilePath(response, filenet.getFileName(), filenet.getFilePath());
    }

    private void downloadByFilePath(HttpServletResponse response, String fileName, String filePath) {
        String downloadFilePath = appHome + File.separator + filePath;
        File downloadFile = new File(downloadFilePath);
        if (!downloadFile.exists()) {
            log.warn("Download file error,The file not found" + downloadFile.getName());
            return;
        }
        String contentType = URLConnection.guessContentTypeFromName(fileName);
        if (fileName.endsWith(".apk")) {
            contentType = "application/vnd.android.package-archive";
        }

        OutputStream os = null;
        try {
            InputStream in = new BufferedInputStream(new FileInputStream(downloadFile));
            long fileLength = in.available();
            response.setContentType(contentType);
            response.setHeader("Cache-Control", "public");
            response.setHeader("Content-Length", fileLength + "");
            response.addHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName, StandardCharsets.UTF_8));

            os = new BufferedOutputStream(response.getOutputStream());
            byte[] buffer = new byte[4096];
            int readed;
            while ((readed = in.read(buffer)) > 0) {
                os.write(buffer, 0, readed);
            }
            os.flush();
        } catch (Exception e) {
            log.error("download error, e=", e);
        } finally {
            if (os != null) {
                try {
                    os.close();
                } catch (IOException e) {
                    log.error("download IOException, e=", e);
                }
            }
        }
    }


    @RequestMapping("/downloadByFileName")
    public void downloadByPath(@RequestParam("fileName") String fileName
            , HttpServletResponse response){
        String downloadFilePath = appHome + File.separator + "bayer" + File.separator + fileName;
        downloadByFilePath(response, fileName, downloadFilePath);
    }
}
