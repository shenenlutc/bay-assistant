package com.bayer.bayassistant.enums;

public enum AppRightEnum {
    All("All","All"),
    BHC("BHC","1"),
    BCS("BCS","2");

    private String name;
    private String value;

    AppRightEnum(String name, String value) {
        this.name=name;
        this.value=value;
    }

    public String getName() {
        return name;
    }

    public String getValue() {
        return value;
    }
}
