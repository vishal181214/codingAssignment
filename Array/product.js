const Find_Prod = (array, N) => 
{
    var sum = 1;
    for(let i=0;i<N;i++)
      sum = sum * array[i];
    return sum;
};
 