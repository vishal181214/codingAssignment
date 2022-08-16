 
var Palin_Check = (str) =>
{
  const array = str.split('');
  const reverseArray = array.reverse();
  const reverseString = reverseArray.join('');

  if(str == reverseString) {
    return 'True';
  }
  else 
  {
    return 'False';
  }
}

