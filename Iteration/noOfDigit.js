const Find_Digits = (N) => 
{
  var count = 0;
 
  if (N >= 1) ++count;

  while (N / 10 >= 1) {
    N /= 10;
    ++count;
  }
  return count;
};