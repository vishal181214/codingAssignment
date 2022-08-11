
const isAllPass = (N, Arr) => 
{
  let count = 0;
  for(let i=0;i<=N;i++)
    if(Arr[i]>=32)
      count++;
      
    if(count === N)
      return "YES";
    else
      return "NO";
};
 
