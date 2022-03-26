function squareDigits(num){
    return Number(new String(num).split("").map(Number).map(num=>num*num).join(""))
   
   }