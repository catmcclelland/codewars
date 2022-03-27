function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const ages = [age1,age2,age3,age4,age5,age6,age7,age8];
    return Math.floor(Math.sqrt(ages.map(element => Math.pow(element, 2)).reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0))*.5);
  
  
  }