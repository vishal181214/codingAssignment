 
var Perfect_Check = (N) => 
{
  let sum = 0;
  if(N == 1)
    console.log("YES");
    
  for(let i =0; i<N/2;i++)
    if(N%i == 0)
      sum += i;
  
  if(sum == N)
    return "YES";
  else
    return "NO";
        
};
 
