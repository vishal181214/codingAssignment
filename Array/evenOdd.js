
const findEvenOdd = (N, Arr) => 
{
  let b = [0,0];
  for(let i=0;i<N;i++)
    if(Arr[i] % 2 === 0)
      b[0] = (b[0] + Arr[i]);
    else
      b[1] = (b[1] + Arr[i]);
     
  return b;
};
 
