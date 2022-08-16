 
var Game_Winner = (S) => 
{
  let countA = 0;
  let countD = 0;
  let arr = S.split("");
  for(let i = 0; i<S.length; i++)
  {
    if(arr[i] == "A")
      countA++;
    else
      countD++;
  }
  if(countA > countD)
    return "Aditya";
  else if(countA == countD)
    return "Draw";
  else
    return "Danish";
}
 
