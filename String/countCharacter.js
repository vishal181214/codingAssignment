
const countCharacters = (S) => 
{
  let B = [];
  let counta = 0;
  let countb = 0;

  for(let i=0;i<S.length;i++)
  {
    if(S.charAt(i) == "A")
    {
      counta++;
      B[0] = counta;
    }
    if(S.charAt(i) == "D")
    {
      countb++;
      B[1] = countb;
    }
  }
  return B;
};
 
