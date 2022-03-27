function findLongest(array){
    let length = 0;
    let num;
    const stringArr = array.map(String);
    for (let str of stringArr){
      if (str.length>length){
        num=str;
        length = str.length;
      }
    }
    return Number(num);
  }