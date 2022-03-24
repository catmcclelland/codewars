class SmallestIntegerFinder {
    findSmallestInt(args) {
      const sorted = args.sort(function (a,b){
        return a-b
      })
    return sorted[0];
  }
                }