
var Substring_Check = (S1, S2) => 
{
  let str = S1.split(" ");
  let count = 0;
  for(let i=0 ;i<str.length;i++)
    if(str[i] === S2)
      count++;
  
  if(count > 0)
    return "YES"
  else
    return "NO"
};
 
