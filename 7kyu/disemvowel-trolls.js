function disemvowel(str) {
    const vowels = /[aeiou]/ig;
    return str.replace(vowels, "");
    
  }