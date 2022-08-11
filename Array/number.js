
const Find_Num = (array,N,M) => 
{
  let count = 0;
  for(let i = 0; i < N; i++)
    if(M === array[i])
      count++;
      
    if(count!==0)
      return "YES";
    else
      return "NO";
  
};
 
