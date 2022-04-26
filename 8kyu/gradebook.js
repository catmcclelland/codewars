function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return "A";
      break;

    case avg >= 80:
      return "B";
      break;

    case avg >= 70:
      return "C";
      break;

    case avg >= 60:
      return "D";
      break;

    case avg < 60:
      return "F";
      break;
  }
}
