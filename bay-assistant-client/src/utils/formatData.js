import {pinyin} from "pinyin-pro";
// export {reactVirtualizedList } from "react-virtualized";

//获取字符串中第一个拼音字符并大写
const getFirstPinyinChar=(str)=>{
  const english= pinyin(str);
  const firstPinyinChar=english.charAt(0).toLocaleUpperCase();
  return firstPinyinChar;
}

/**
 * 数据格式化
 * @param list 接口返回的数据格式： [{...},{..}]
 * @returns 渲染的数据格式：{A:[{...},{..,}], B:[{},{}]}；渲染右侧索引的数据格式：["A","B","D"]
 */
export function formatData (list){
  const dataList={};
  //1、遍历数组
  list.forEach((item ) => {
    //2、获取每个首字母
    const firstChar =getFirstPinyinChar(item.appName)
    
    //3、判断dataList中是否有该分类
    if(dataList[firstChar]){
      //4、如果有，直接往分类中push数据
      // dataList[firstChar]=>[{},{}]
      dataList[firstChar].push(item);
    }else{
      //5、如果没有，先创建一个数组，然后把当前信息放到数组中
      dataList[firstChar]=[item]
    }
  });
 
  //获取索引数据:右侧索引
  const dataIndex= Object.keys(dataList).sort();
  return {dataList,dataIndex};
}

