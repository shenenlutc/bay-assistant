package com.bayer.bayassistant.util;

import java.net.URLConnection;

public enum ImageTypeUtil {

    PNG(".png", "image/png"),
    JPG(".jpg", "image/jpeg"),
    BMP(".bmp", "image/bmp"),
    JPEG(".jpeg", "image/jpeg"),
    GIF(".gif", "image/gif"),
    TIF(".tif", "image/tiff"),
    TIFF(".tiff", "image/tiff"),
    FAX(".fax", "image/fax"),
    ICO(".ico", "image/x-icon"),
    JFIF(".jfif", "image/jpeg"),
    JPE(".jpe", "image/jpeg"),
    NET(".net", "image/pnetvue"),
    WBMP(".wbmp", "image/vnd.wap.wbmp");

    final String mSuffix;
    final String mMIME;

    ImageTypeUtil(String suffix, String mime) {
        this.mSuffix = suffix;
        this.mMIME = mime;
    }

    public static String getSuffixFromUrl(String url) {

        for (ImageTypeUtil fileType : values()) {
            if (url.contains(fileType.suffix())) {
                return fileType.suffix();
            }
        }
        String contentType = getMIMETypeFromUrl(url);
        if (contentType == null) return null;
        return mimeMappingSuffix(contentType);
    }

    public static String getMIMETypeFromUrl(String url) {
        if (url == null || url.isEmpty()) {
            return null;
        }
        return URLConnection.guessContentTypeFromName(url);
    }

    public static String mimeMappingSuffix(String mime) {
        for (ImageTypeUtil fileType : values()) {
            if (fileType.mime().equals(mime)) {
                return fileType.suffix();
            }
        }
        return null;
    }

    public String mime() {
        return mMIME;
    }

    public String suffix() {
        return this.mSuffix;
    }
}
