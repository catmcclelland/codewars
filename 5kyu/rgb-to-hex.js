function rgb(r, g, b) {
  const arr = [];
  console.log(r, g, b);
  const convert = (x) => {
    if (x < 0) {
      x = 0;
    } else if (x > 255) {
      x = 255;
    }
    const num = x / 16;
    const a = Math.floor(num);
    const b = ((num - a) * 16).toString(16);
    arr.push(a.toString(16), b);
  };

  convert(r);
  convert(g);
  convert(b);

  return arr.join("").toUpperCase();
}
