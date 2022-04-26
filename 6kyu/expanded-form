function expandedForm(num) {
  const arr = new String(num).split("").reverse();
  const newArr = [];
  
  for (let i=0; i<arr.length; i++){
    if (arr[i]>0 && i>0){
      newArr.push(arr[i]*(Math.pow(10, i)));
    } else if(arr[i]>0 && i==0){
      newArr.push(arr[i])
    }
  }
  return newArr.reverse().join(" + ");
}