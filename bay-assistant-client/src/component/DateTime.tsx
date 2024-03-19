import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import "../i18n";

const textStyle : React.CSSProperties = {
    width: '100%',
    paddingLeft: '1%',
    color: '#FFFFFF',
}


const show_day = [
    // "sun",
    // "mon",
    // "tues",
    // "wed",
    // "thur",
    // "fri",
    // "sat"
    "周日",
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六"
]

const showTime: Function = (dateTime : Date, lang: String) => {
    if( lang == 'zh'){
        let year = dateTime.getFullYear();
        let month  = dateTime.getMonth() + 1;
        let date = dateTime.getDate();
        
        let day = dateTime.getDay();
        let hour = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let second = dateTime.getSeconds();
        let now_time =
        (hour < 12 ? '上午' : '下午') + 
        (hour < 10 ? ("0" + hour) : hour) +
        ":" +
        (minutes < 10 ? ("0" + minutes) : minutes) +
        ":" +
        (second < 10 ? ("0" + second) : second) +
        " " +
        month +
        "月" +
        date +
        "日" +
        " " +
        show_day[day];
        return now_time;
    }else{
        return dateTime.toLocaleTimeString() + ' ' + dateTime.toLocaleDateString();
    }
  };

const DateTime: React.FC = () => {
    const { i18n } = useTranslation();
    let currDateTime = new Date();
    const [currTime, setCurrTime] = useState(showTime(currDateTime, i18n.language));
    setInterval(()=>{
        currDateTime = new Date();
        setCurrTime(showTime(currDateTime, i18n.language));
    }, 1000);

    return (
        <div style={textStyle}>
            <span>{ currTime }</span>
        </div>
    )
};
  
export default DateTime;