function getCount(str) {
    var vowelsCount = 0;
    
    const arr = Array.from(str);
    for (let letters of arr){
      if(letters=="A"||
          letters=="E"||
        letters=="I"||
        letters=="O"||
        letters=="U"||
        letters=="a"||
        letters=="e"||
        letters=="i"||
        letters=="o"||
        letters=="u"){
        vowelsCount++
      }
    }
    // enter your majic here
    
    return vowelsCount;
  }
  //so bad :( 