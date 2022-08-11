
const highAge = (N, Arr) => 
{
  let age = [];
  let j = 0;
  for(let i=0;i<N;i++)
    if(Arr[i]>=18)
      age[j++] = Arr[i];
  
  return age;
};
 
