function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sum=0;
    for (let sheep of arrayOfSheep){
      if (sheep == true){
        sum+=1
      }
    }
    return sum;
  }